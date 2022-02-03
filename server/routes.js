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

initializePassport(passport);

router.use(express.urlencoded({ extended: false }));
router.use(flash());
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());

// ** Rendering Views ** //

router.get("/upload", checkIsAuthenticated, (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "../../client/public/views/uploadPage.html")
  );
});

router.get("/view", checkIsAuthenticated, (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "../../client/public/views/viewPage.html")
  );
});

router.get("/login", checkNotAuthenticated, (req, res) => {
  res.sendFile(
    path.resolve(__dirname + "../../client/public/views/login.html")
  );
});

router.get("/logged/user", checkIsAuthenticated, (req, res) => {
  res.json(req.user.username);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

// ** LOGIN AUTH ** //

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/view",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

// ** CRUD API ** //

router.post("/upload", checkIsAuthenticated, async (req, res) => {
  try {
    const info = req.body;
    const { added_at } = info;
    // const added_by = req.user.username;
    const added_by = "test";

    const dataset = { ...info };
    delete dataset.added_at;
    delete dataset.added_by;

    pool.query(
      `INSERT INTO data_input (added_by, added_at, dataset) VALUES ($1, $2, $3) RETURNING *`,
      [added_by, added_at, dataset]
    );

    return res.status(200).send("OK");
  } catch (err) {
    console.log(err);
  }
});

// ? get dataset
router.get("/view/data/:added_at", checkIsAuthenticated, async (req, res) => {
  try {
    const { added_at } = req.params;
    // const added_by = req.user.username;
    const added_by = "test";
    const data = await pool.query(
      `SELECT * FROM data_input WHERE added_by = $1 AND added_at = $2`,
      [added_by, added_at]
    );

    if (!data.rows[0]) return res.status(200).send();

    const results = {
      added_at: data.rows[0].added_at,
      kpi_title: new Array(),
      dataset_length: data.rows[0].dataset.dataset_length,
      numberFieldData: {
        allTableData: new Object(),
        dataInPercentage: new Object(),
        dataNotInPercentage: new Object(),
      },
      textFieldData: new Object(),
    };

    for (let i = 1; i <= data.rows[0].dataset.dataset_length; i++) {
      results.textFieldData[`row__${i}`] = new Object();
      results.kpi_title.push(data.rows[0].dataset[`row__${i}`].rowTitle);
    }

    for (const [key, value] of Object.entries(data.rows[0].dataset)) {
      if (key === "dataset_length") {
        continue;
      } else {
        results.numberFieldData.allTableData[key] = value.tableData;
        results.textFieldData[key] = value.descData;
      }

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

// ** AUTH MIDDDLEWARE ** //

function checkIsAuthenticated(req, res, next) {
  // if (req.isAuthenticated()) return next();
  // res.redirect("/login");
  next();
}

function checkNotAuthenticated(req, res, next) {
  // if (req.isAuthenticated()) return res.redirect("/upload");
  next();
}

router.get("*", (req, res) => {
  res.status(200);
  res.redirect("/view");
});

module.exports = router;
