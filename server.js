require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

const gamesData = require('./public/data/games.json');
const bingos = require('./public/data/bingos.json');
const news = require('./public/data/news.json');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/games', (req, res) => {
  const leagues = Array.isArray(gamesData.leagues) ? gamesData.leagues : [];
  const requestedLeague = (req.query.league || 'brasileirao').toLowerCase();

  if (requestedLeague === 'all') {
    return res.json(leagues);
  }

  const leagueData = leagues.find((liga) => liga.id === requestedLeague);
  if (!leagueData) {
    return res.status(404).json({ message: 'Liga não encontrada' });
  }

  res.json(leagueData.games || []);
});

app.get('/api/bingos', (req, res) => {
  res.json(bingos);
});

app.get('/api/news', (req, res) => {
  res.json(news);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
