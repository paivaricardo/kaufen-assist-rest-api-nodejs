const db = require("../models");

//  Modelo principal de Produto
const Produto = db.produtos;

// Tarefas principais do CRUD de produtos
// CREATE Produto
const createProduto = async (req, res) => {
  let requisitionBody = req.body;

  console.log(requisitionBody);

  let novoProduto = {
    nome: requisitionBody.nome,
    descricao: requisitionBody.descricao,
    preco: requisitionBody.preco,
    // data_criacao: req.body.data_criacao,
    // data_atualizacao: req.body.data_atualizacao,
    // ic_ativo: req.body.ic_ativo,
  };
  
  console.log(requisitionBody);

  const produto = await Produto.create(novoProduto).catch(err => res.status(500).send({message: `Houve um erro ao tentar registrar novo produto.`}));
  res.status(200).send(produto);
};

// READ ALL Produto
const readAllProduto = async (req, res) => {
  // A requisição GET para todos os produtos somente buscará os produtos ativos. Produtos inativos não aparecerão dos resultados

  let produtos = await Produto.findAll({ where: { ic_ativo: true } });
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

  res
    .status(200)
    .send({ message: `Produto de id ${id} foi atualizado com sucesso.` });
};

// DELETE Produto
const deleteProduto = async (req, res) => {
  let id = req.params.id;

  // Como é necessário manter um histórico dos produtos já comprados, até para manter a consistência do registro de compras passadas, a requisição DELETE vai apenas inativar o produto, não excluí-lo da base de dados.

  // await Produto.destroy({ where: { id_produto: id } });

  const produto = await Produto.update(
    { ic_ativo: false },
    { where: { id_produto: id } }
  );

  res.status(200).send({ message: `Produto de id ${id} foi desativado.` });
};

module.exports = {
  createProduto,
  readAllProduto,
  readOneProduto,
  updateProduto,
  deleteProduto,
};
