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

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/view",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// ** CRUD API ** //

router.post("/upload", checkIsAuthenticated, async (req, res) => {
  try {
    const info = req.body;
    const { added_at } = info;
    const added_by = req.user.username;
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
    const added_by = req.user.username;
    const data = await pool.query(
      `SELECT * FROM data_input WHERE added_by = $1 AND added_at = $2`,
      [added_by, added_at]
    );

    if (!data.rows[0]) return res.status(200).send();

    const results = {
      added_at: data.rows[0].added_at,
      dataset_length: data.rows[0].dataset.dataset_length,
      allTableData: new Object(),
      textFieldData: new Object(),
      dataset: data.rows[0].dataset,
    };

    for (let i = 1; i <= data.rows[0].dataset.dataset_length; i++) {
      results.textFieldData[`row__${i}`] = new Object();
    }

    for (const [key, value] of Object.entries(data.rows[0].dataset)) {
      // ? Set number field and text field data
      if (key === "dataset_length") {
        continue;
      } else {
        results.allTableData[key] = value.tableData;
        results.textFieldData[key] = value.descData;
      }

      // ? Set and calculate PCP
      if (value.data_type === "year") {
        const temp = value.tableData.map((ele) => Number(ele));
        const result = temp.reduce((prev, next) => {
          return prev + next;
        });
        results.dataset[key].pcp = result;
      } else {
        const temp = value.tableData
          .map((ele) => Number(ele))
          .filter((ele) => ele > 0);
        const result =
          temp.reduce((prev, next) => {
            return prev + next;
          }) / temp.length;
        results.dataset[key].pcp = result.toFixed(2);
      }
    }

    res.json(results);
  } catch (error) {
    console.log(error.message);
  }
});

// ** AUTH MIDDDLEWARE ** //

function checkIsAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return res.redirect("/upload");
  next();
}

router.get("*", (req, res) => {
  res.status(200);
  res.redirect("/view");
});

module.exports = router;
