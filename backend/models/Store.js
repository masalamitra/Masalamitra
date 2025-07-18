const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  url: { type: String, unique: true },
  ownerUid: String,
  products: Array,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Store", storeSchema);