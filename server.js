if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const routes = require("./server/routes");

const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(express.static(path.join(__dirname + "/client")));
app.use(express.static(path.join(__dirname + "/client/public")));
app.use(express.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
