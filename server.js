const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const pool = require("./server/db/database-config");

const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/client")));
app.use(express.static(path.join(__dirname + "/client/public")));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/public/views/uploadPage.html");
});

app.get("/view", (req, res) => {
  res.sendFile(__dirname + "/client/public/views/viewPage.html");
});

app.post("/upload", (req, res) => {
  try {
    const info = req.body;
    // const { database, identifier } = req.params;
    const added_by = "rafly";
    pool.query(
      `INSERT INTO data_input (added_by, dataset) VALUES ($1, $2) RETURNING *`,
      [added_by, JSON.stringify(info)]
    );
    res.json(`data added`);
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

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
