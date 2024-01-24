const express = require('express');
const router = express.Router();

const produtos = require('../db.cjs')


// Rota para obter todos os produtos
router.get('/', (req, res) => {
  res.json(produtos);
});

// Rota para obter um produto específico
router.get('/:id', (req, res) => {
  const produtoId = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === produtoId);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
});

// Adicione a rota para criar um novo produto
router.post('/', (req, res) => {
  // Lógica para criar um novo produto a partir dos dados recebidos no corpo da requisição (req.body)
  // Exemplo simples: Criar um novo objeto produto com dados fictícios
  const novoProduto = {
    id: Date.now(), // Usando timestamp como ID (não é a melhor prática para produção)
    nome: req.body.nome,
    preco: req.body.preco,
    quantidade: req.body.quantidade,
  };

  // Lógica para adicionar o novo produto ao seu armazenamento de produtos (como um array em memória ou banco de dados)
  // Armazene o novo produto no local adequado (array de produtos, banco de dados, etc.)

  res.status(201).json(novoProduto); // Retorna o novo produto criado
});

// Adicione a rota para atualizar um produto existente
router.put('/:id', (req, res) => {
  const produtoId = parseInt(req.params.id, 10); // Converte o ID para um número inteiro

  // Lógica para atualizar o produto com o ID correspondente
  // Exemplo simples: Encontrar o produto pelo ID e atualizar os dados
  // Certifique-se de ter lógica para tratar casos em que o produto não é encontrado

  res.status(200).json({ mensagem: `Produto com ID ${produtoId} foi atualizado.` });
});

// Adicione a rota para excluir um produto existente
router.delete('/:id', (req, res) => {
  const produtoId = parseInt(req.params.id, 10); // Converte o ID para um número inteiro

  // Lógica para excluir o produto com o ID correspondente
  // Exemplo simples: Encontrar o produto pelo ID e removê-lo
  // Certifique-se de ter lógica para tratar casos em que o produto não é encontrado

  res.status(200).json({ mensagem: `Produto com ID ${produtoId} foi excluído.` });
});


module.exports = router;
