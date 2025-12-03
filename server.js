const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));

const games = require('./public/data/games.json');
const bingos = require('./public/data/bingos.json');
const news = require('./public/data/news.json');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/games', (req, res) => {
  const league = req.query.league || 'brasileirao';
  const filteredGames = games.filter(game => game.league === league);
  res.json(filteredGames);
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
