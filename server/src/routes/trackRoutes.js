const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");

const router = express.Router();
router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  const uid = req.user._id;
  const tracks = await Track.find({ uid });
  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const uid = req.user._id;
  const { name, locations } = req.body;

  if (!name || !locations) {
    res
      .status(422)
      .send({ error: "You must provide a track name and location." });
  }

  try {
    const track = new Track({ name, locations, uid });
    await track.save();
    res.send(track);
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
});

module.exports = router;
