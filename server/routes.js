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

router.get("/login", (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "../../client/public/views/login.html")
  );
});

// ** CRUD API ** //

router.post("/upload", async (req, res) => {
  try {
    const info = req.body;
    const { added_at, added_by } = info;

    const dataset = { ...info };
    delete dataset.added_at;
    delete dataset.added_by;

    const isValid = await pool.query(
      `SELECT added_at FROM data_input WHERE added_at = $1`,
      [added_at]
    );

    if (isValid.rows.length > 0) {
      return res.status(409).send();
    } else {
      pool.query(
        `INSERT INTO data_input (added_by, added_at, dataset) VALUES ($1, $2, $3) RETURNING *`,
        [added_by, added_at, dataset]
      );
      return res.status(200).send("OK");
    }
  } catch (err) {
    console.log(err);
  }
});

// ? get user data
router.get("/view/data/user", async (req, res) => {
  const data = await pool.query("SELECT username FROM users");

  const results = {
    username: new Array(),
  };

  for (const [_, value] of Object.entries(data.rows)) {
    results.username.push(value.username);
  }

  res.json(results);
});

// ? get dataset
router.get("/view/data/:added_by/:added_at", async (req, res) => {
  try {
    const { added_by, added_at } = req.params;
    const data = await pool.query(
      `SELECT * FROM data_input WHERE added_by = $1 AND added_at = $2`,
      [added_by, added_at]
    );

    if (!data.rows[0]) return res.status(200).send();

    const results = {
      added_at: data.rows[0].added_at,
      numberFieldData: {
        allTableData: new Object(),
        dataInPercentage: new Object(),
        dataNotInPercentage: new Object(),
      },
      textFieldData: {
        row__1: new Object(),
        row__2: new Object(),
        row__3: new Object(),
        row__4: new Object(),
        row__5: new Object(),
        row__6: new Object(),
        row__7: new Object(),
        row__8: new Object(),
        row__9: new Object(),
        row__10: new Object(),
        row__11: new Object(),
      },
    };

    for (const [key, value] of Object.entries(data.rows[0].dataset)) {
      results.numberFieldData.allTableData[key] = value.tableData;
      results.textFieldData[key] = value.descData;

      if (key === "row__4" || key === "row__10") {
        results.numberFieldData.dataNotInPercentage[key] = value.tableData;
      } else {
        results.numberFieldData.dataInPercentage[key] = value.tableData;
      }
    }

    res.json(results);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("*", (req, res) => {
  res.status(200);
  res.redirect("/upload");
});

module.exports = router;
