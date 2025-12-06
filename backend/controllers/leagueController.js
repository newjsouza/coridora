const { leagues } = require("../data/leagues");

function getLeagues(req, res) {
  res.json({ leagues });
}

module.exports = { getLeagues };
