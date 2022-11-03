require("./models/User");
require("./models/Tracks");
const express = require("express");
const authRoutes = require("./routes/authRoutes.js");
const trackRoutes = require("./routes/trackRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");

const uri =
  "mongodb+srv://saifmohamedsv:weekweeks@cluster0.bq297d9.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);
app.use(trackRoutes);

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("App started...");
});

mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log("Connected to the database...");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
