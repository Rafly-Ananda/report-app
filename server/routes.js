if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = express.Router();
const pool = require("./db/database-config");
const path = require("path");
const passport = require("passport");
const initializePassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");

router.use(express.urlencoded({ extended: false }));
router.use(flash());
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// ** Rendering Views ** //

router.get("/upload", (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "../../client/public/views/uploadPage.html")
  );
});

router.get("/view", (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "../../client/public/views/viewPage.html")
  );
});

// ** CRUD API ** //

router.post("/upload", (req, res) => {
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

// ? get user data
router.get("/view/data/user", async (req, res) => {
  const data = await pool.query("SELECT username FROM users");
  res.json(data.rows);
});

// ? get dataset
router.get("/view/data/:added_by/:added_at", async (req, res) => {
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

router.get("*", (req, res) => {
  res.status(200);
  res.redirect("/view");
});

module.exports = router;
