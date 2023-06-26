// routes/tokenRoutes.js
const express = require("express");
const tokenController = require("../controllers/tokenController");

const router = express.Router();

router.post("/generate", tokenController.generateToken);
router.post("/validate", tokenController.validateToken);
router.get("/tokens/:meter_number", tokenController.getTokensByMeterNumber);

module.exports = router;
