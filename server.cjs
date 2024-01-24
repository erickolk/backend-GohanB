const express = require('express');
const produtosRoutes = require('./routes/produtos.cjs'); // Caminho relativo ao arquivo server.js
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Adicione middleware para processar JSON
app.use(express.json());

// Rotas para produtos
app.use('/produtos', produtosRoutes);

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../gohanbebidas/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
