const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // auth = Bearer 'askdjasldkfsdf'
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, "USER_TOKEN", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in.x" });
    }
    const { uid } = payload;
    const user = await User.findById(uid);
    req.user = user;
    next();
  });
};
