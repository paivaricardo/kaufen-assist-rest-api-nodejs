const db = require("../models");

//  Modelo principal de Compra e entidades relacionadas com chaves estrangeiras
const Compra = db.compras;
const Produto = db.produtos;
const StatusCompra = db.statusCompra;
const TipoPagamento = db.tipoPagamento;
const CompraProduto = db.compraProduto;

// Relacionamentos
StatusCompra.hasMany(Compra, {foreignKey: "id_status_compra"});
Compra.belongsTo(StatusCompra, {foreignKey: "id_status_compra"});
TipoPagamento.hasMany(Compra, {foreignKey: "id_tipo_pagamento"});
Compra.belongsTo(TipoPagamento, {foreignKey: "id_tipo_pagamento"});
Produto.belongsToMany(Compra, {through: CompraProduto, uniqueKey: 'id_compra_produto', foreignKey: "id_produto"})
Compra.belongsToMany(Produto, {through: CompraProduto, uniqueKey: 'id_compra_produto', foreignKey: "id_compra"})
// Compra.belongsToMany(Produto, {through: CompraProduto})

// Tarefas principais do CRUD de Compras
// CREATE Compra
const createCompra = async (req, res) => {

  let novaCompra = {
    total: req.body.total,
    id_tipo_pagamento: req.body.id_tipo_pagamento,
    id_status_compra: req.body.id_status_compra
  };

  const compraCriada = await Compra.create(novaCompra);
  res.status(200).send(compraCriada);
};

// READ ALL Compra
const readAllCompra = async (req, res) => {
  
  let compras = await Compra.findAll({include: [StatusCompra, TipoPagamento, Produto]});
  res.status(200).send(compras);
};

// READ ONE Compra
const readOneCompra = async (req, res) => {
  let id = req.params.id;
  let compra = await Compra.findOne({ where: { id_compra: id }, include: [StatusCompra, TipoPagamento, Produto] });
  res.status(200).send(compra);
};

// UPDATE Compra
const updateCompra = async (req, res) => {
  let id = req.params.id;

  const compraAtualizada = await Compra.update(req.body, { where: { id_compra: id } });

  res.status(200).send({message: `Compra de id ${id} foi atualizada com sucesso.`});
};

// DELETE Compra
const deleteCompra = async (req, res) => {
  let id = req.params.id;

  await Compra.destroy({ where: { id_compra: id } });

  res.status(200).send({message: `Compra de id ${id} foi deletado.`});
};

module.exports = {
  createCompra,
  readAllCompra,
  readOneCompra,
  updateCompra,
  deleteCompra,
};
