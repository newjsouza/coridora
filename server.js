// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const apiRouter = require("./backend/routes");

const app = express();
const PORT = process.env.PORT || 8080;

// Permitir JSON
app.use(express.json());

// ------------------------------------------------------------
// ROTAS DE API (CORIDORA API v1)
// ------------------------------------------------------------
app.use("/api", apiRouter);

// ------------------------------------------------------------
// FRONTEND REACT (VITE BUILD)
// ------------------------------------------------------------
const distPath = path.join(__dirname, "frontend", "dist");

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// ------------------------------------------------------------
// INÍCIO DO SERVIDOR
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Servidor Coridora rodando na porta ${PORT}`);
});
