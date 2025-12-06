const express = require("express");
const router = express.Router();

const leaguesRouter = require("./leagues");
const matchesRouter = require("./matches");
const analysisRouter = require("./analysis");

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Coridora API v1",
    timestamp: new Date().toISOString()
  });
});

router.use("/leagues", leaguesRouter);
router.use("/matches", matchesRouter);
router.use("/analyze", analysisRouter);

module.exports = router;
