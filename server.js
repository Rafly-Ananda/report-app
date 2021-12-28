const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const pool = require("./server/db/database-config");
const formidable = require("express-formidable");

const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: "http://localhost:8080",
};

// Parse incoming requests data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
// ? use to parse formData
// app.use(formidable());
// Use static files in client dir
app.use(express.static(path.join(__dirname + "/client")));
app.use(express.static(path.join(__dirname + "/client/public")));
// Enable CORS
app.use(cors(corsOptions));

app.get("/upload", (req, res) => {
  res.sendFile(__dirname + "/client/public/views/uploadPage.html");
});

app.get("/view", (req, res) => {
  res.sendFile(__dirname + "/client/public/views/viewPage.html");
});

app.post("/upload", (req, res) => {
  try {
    const info = req.body;
    const { period: added_at, user: added_by } = info;

    const dataset = { ...info };
    delete dataset.user;
    delete dataset.period;

    pool.query(
      `INSERT INTO data_input (added_by, added_at, dataset) VALUES ($1, $2, $3) RETURNING *`,
      [added_by, added_at, dataset]
    );

    res.redirect("/view");
  } catch (err) {
    console.log(err.message);
  }
});

// ? get dataset full
app.get("/view/:added_by/:added_at", async (req, res) => {
  const { added_by, added_at } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM data_input WHERE added_by = $1 AND added_at = $2`,
      [added_by, added_at]
    );

    !data.rows[0] ? res.json(`Data doesn't exist!`) : res.json(data.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// ? get user data
app.get("/view/user", async (req, res) => {
  const data = await pool.query("SELECT added_by FROM data_input");

  res.json(data.rows);
});

app.get("*", (req, res) => {
  res.status(200);
  res.redirect("/view");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
