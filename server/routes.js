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

    // // ? Pretty formatting
    // res.header("Content-Type", "application/json");
    // res.send(JSON.stringify(info, null, 4));

    res.redirect("/view");
  } catch (err) {
    console.log(err.message);
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
  const { added_by, added_at } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM data_input WHERE added_by = $1 AND added_at = $2`,
      [added_by, added_at]
    );

    if (!data.rows[0]) return res.status(500).send();

    const results = {
      added_at: data.rows[0].added_at,
      chartData: new Object(),
      numberFieldData: {
        dataInPercentage: new Object(),
        dataNotInPercentage: new Object(),
      },
      textFieldData: {
        row__1: new Array(),
        row__2: new Array(),
        row__3: new Array(),
        row__4: new Array(),
        row__5: new Array(),
        row__6: new Array(),
        row__7: new Array(),
        row__8: new Array(),
        row__9: new Array(),
        row__10: new Array(),
        row__11: new Array(),
      },
    };

    for (const [key, value] of Object.entries(data.rows[0].dataset)) {
      if (value.length === 6) {
        results.chartData[key] = value;
        if (value.includes("1")) {
          results.numberFieldData.dataNotInPercentage[key] = value;
        } else {
          results.numberFieldData.dataInPercentage[key] = value;
        }
      }

      // ? First loop = iterate through all 11 inputs
      // ? Second loop = it's actually hard defining how much text field is allowd in this case i made it to max 10 field
      if (value.length === 7) {
        for (let i = 1; i < 12; i++) {
          for (let j = 0; j < 10; j++) {
            if (key === `row__${i}__input__desc__${j}`) {
              results.textFieldData[`row__${i}`].push(value);
            }
          }
        }
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
