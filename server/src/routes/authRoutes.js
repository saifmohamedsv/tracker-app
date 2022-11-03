const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ uid: user._id }, "USER_TOKEN");

    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(422)
        .send({ error: "Must provide email and password." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        error: "Invalid email or password",
      });
    }

    try {
      await user.comparePasswords(password);
      const token = jwt.sign({ uid: user._id }, "USER_TOKEN");
      res.send({ token });
    } catch (error) {
      return res.status(422).send({ error: "Invalid email or password." });
    }
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

module.exports = router;
