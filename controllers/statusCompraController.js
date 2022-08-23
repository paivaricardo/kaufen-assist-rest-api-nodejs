const db = require("../models");

//  Modelo principal de StatusCompra
const StatusCompra = db.statusCompra;

// Tarefas principais do CRUD de status compras
// CREATE StatusCompra
const createStatusCompra = async (req, res) => {

  let novoStatusCompra = {
    dsc_status_compra: req.body.dsc_status_compra,
  };

  console.log(novoStatusCompra);

  const statusCompra = await StatusCompra.create(novoStatusCompra);
  res.status(200).send(novoStatusCompra);
};

// READ ALL StatusCompra
const readAllStatusCompra = async (req, res) => {
  let statusCompras = await StatusCompra.findAll({});
  res.status(200).send(statusCompras);
};

// READ ONE StatusCompra
const readOneStatusCompra = async (req, res) => {
  let id = req.params.id;
  let statusCompra = await StatusCompra.findOne({ where: { id_status_compra: id } });
  res.status(200).send(statusCompra);
};

// UPDATE StatusCompra
const updateStatusCompra = async (req, res) => {
  let id = req.params.id;

  const statusCompra = await StatusCompra.update(req.body, { where: { id_status_compra: id } });

  res.status(200).send({message: `Status de compra de id ${id} foi atualizado com sucesso.`});
};

// DELETE StatusCompra
const deleteStatusCompra = async (req, res) => {
  let id = req.params.id;

  await StatusCompra.destroy({ where: { id_status_compra: id } });

  res.status(200).send({message: `Status de compra de id ${id} foi deletado.`});
};

module.exports = {
  createStatusCompra,
  readAllStatusCompra,
  readOneStatusCompra,
  updateStatusCompra,
  deleteStatusCompra,
};
