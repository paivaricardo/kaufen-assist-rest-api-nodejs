const db = require("../models");

//  Modelo principal de Produto
const Produto = db.produtos;

// Tarefas principais do CRUD de produtos
// CREATE Produto
const createProduto = async (req, res) => {

  let novoProduto = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
    data_criacao: req.body.data_criacao,
    data_atualizacao: req.body.data_atualizacao,
  };

  console.log(novoProduto);

  const produto = await Produto.create(novoProduto);
  res.status(200).send(produto);
};

// READ ALL Produto
const readAllProduto = async (req, res) => {
  let produtos = await Produto.findAll({});
  res.status(200).send(produtos);
};

// READ ONE Produto
const readOneProduto = async (req, res) => {
  let id = req.params.id;
  let produto = await Produto.findOne({ where: { id_produto: id } });
  res.status(200).send(produto);
};

// UPDATE Produto
const updateProduto = async (req, res) => {
  let id = req.params.id;

  const produto = await Produto.update(req.body, { where: { id_produto: id } });

  res.status(200).send({message: `Produto de id ${id} foi atualizado com sucesso.`});
};

// DELETE Produto
const deleteProduto = async (req, res) => {
  let id = req.params.id;

  await Produto.destroy({ where: { id_produto: id } });

  res.status(200).send({message: `Produto de id ${id} foi deletado.`});
};

module.exports = {
  createProduto,
  readAllProduto,
  readOneProduto,
  updateProduto,
  deleteProduto,
};
