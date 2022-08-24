const db = require("../models");

//  Modelo principal de CompraProduto
const CompraProduto = db.compraProduto;

// Tarefas principais do CRUD de CompraProdutos
// CREATE CompraProduto
const createCompraProduto = async (req, res) => {

  let novaCompraProduto = {
    id_produto: req.body.id_produto,
    id_compra: req.body.id_compra,
    qtd_compra: req.body.qtd_compra
  };

  const compraProdutoCriada = await CompraProduto.create(novaCompraProduto);
  res.status(200).send(compraProdutoCriada);
};

// READ ALL CompraProduto
const readAllCompraProduto = async (req, res) => {
  let compraProdutoList = await CompraProduto.findAll({});
  res.status(200).send(compraProdutoList);
};

// READ ONE CompraProduto
const readOneCompraProduto = async (req, res) => {
  let id = req.params.id;
  let compraProduto = await CompraProduto.findOne({ where: { id_compra_produto: id } });
  res.status(200).send(compraProduto);
};

// UPDATE CompraProduto
const updateCompraProduto = async (req, res) => {
  let id = req.params.id;

  const compraProdutoAtualizada = await CompraProduto.update(req.body, { where: { id_compra_produto: id } });

  res.status(200).send({message: `Compra - Produto de id ${id} foi atualizada com sucesso.`});
};

// DELETE CompraProduto
const deleteCompraProduto = async (req, res) => {
  let id = req.params.id;

  await CompraProduto.destroy({ where: { id_compra_produto: id } });

  res.status(200).send({message: `Compra - Produto de id ${id} foi deletada.`});
};

module.exports = {
  createCompraProduto,
  readAllCompraProduto,
  readOneCompraProduto,
  updateCompraProduto,
  deleteCompraProduto,
};
