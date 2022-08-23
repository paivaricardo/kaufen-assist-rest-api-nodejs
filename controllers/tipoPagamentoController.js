const db = require("../models");

//  Modelo principal de TipoPagamento
const TipoPagamento = db.tipoPagamento;

// Tarefas principais do CRUD de status compras
// CREATE TipoPagamento
const createTipoPagamento = async (req, res) => {

  let novoTipoPagamento = {
    dsc_tipo_pagamento: req.body.dsc_tipo_pagamento,
  };

  console.log(novoTipoPagamento);

  const tipoPagamento = await TipoPagamento.create(novoTipoPagamento);
  res.status(200).send(novoTipoPagamento);
};

// READ ALL TipoPagamento
const readAllTipoPagamento = async (req, res) => {
  let tipoPagamentos = await TipoPagamento.findAll({});
  res.status(200).send(tipoPagamentos);
};

// READ ONE TipoPagamento
const readOneTipoPagamento = async (req, res) => {
  let id = req.params.id;
  let tipoPagamento = await TipoPagamento.findOne({ where: { id_tipo_pagamento: id } });
  res.status(200).send(tipoPagamento);
};

// UPDATE TipoPagamento
const updateTipoPagamento = async (req, res) => {
  let id = req.params.id;

  const tipoPagamento = await TipoPagamento.update(req.body, { where: { id_tipo_pagamento: id } });

  res.status(200).send({message: `Tipo de pagamento id ${id} foi atualizado com sucesso.`});
};

// DELETE TipoPagamento
const deleteTipoPagamento = async (req, res) => {
  let id = req.params.id;

  await TipoPagamento.destroy({ where: { id_tipo_pagamento: id } });

  res.status(200).send({message: `Tipo de pagamento de id ${id} foi deletado.`});
};

module.exports = {
  createTipoPagamento,
  readAllTipoPagamento,
  readOneTipoPagamento,
  updateTipoPagamento,
  deleteTipoPagamento,
};
