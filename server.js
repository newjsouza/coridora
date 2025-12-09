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
// MODO MANUTENÇÃO (exibe aviso e desabilita rotas/API)
// ------------------------------------------------------------
app.use((req, res) => {
  res
    .status(503)
    .send(
      "A página está momentaneamente fora do ar para manutenção. Tente novamente em alguns minutos."
    );
});

// ------------------------------------------------------------
// INÍCIO DO SERVIDOR
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Servidor Coridora rodando na porta ${PORT}`);
});
