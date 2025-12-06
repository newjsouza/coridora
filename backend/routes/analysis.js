const express = require("express");
const { analyze } = require("../controllers/analysisController");

const router = express.Router();

// POST /api/analyze/:matchId
router.post("/:matchId", analyze);

module.exports = router;
