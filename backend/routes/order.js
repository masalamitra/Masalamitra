const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  // mock logic — add to DB and WhatsApp webhook later
  res.json({ message: "Order placed successfully" });
});

module.exports = router;