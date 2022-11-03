const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: {
    type: Number,
  },
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    speed: Number,
    heading: Number,
    accuracy: Number,
  },
});

const trackSchema = new mongoose.Schema({
  uid: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

mongoose.model("Track", trackSchema);
