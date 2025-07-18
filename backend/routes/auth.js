const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Firebase Init
const serviceAccount = require("../utils/firebaseServiceKey.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

router.post("/verify", async (req, res) => {
  try {
    const token = req.body.token;
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.status(200).json({ uid: decodedToken.uid });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;