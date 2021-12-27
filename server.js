const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const pool = require("./server/db/database-config");

const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: "http://localhost:8080",
};

// Parse incoming requests data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
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
    // const { database, identifier } = req.params;

    const added_by = "ananda";
    pool.query(
      `INSERT INTO data_input (added_by, dataset) VALUES ($1, $2) RETURNING *`,
      [added_by, info]
    );

    console.log("submitted");
    res.redirect("/view");
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/view/:added_by", async (req, res) => {
  const { added_by } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM data_input WHERE added_by = $1`,
      [added_by]
    );

    !data.rows[0] ? res.json(`Data doesn't exist!`) : res.json(data.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

const xoxo = new Date();
console.log(xoxo);

app.get("*", (req, res) => {
  res.status(200);
  res.redirect("/view");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
