const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Carregando modelos no Sequelize
db.produtos = require("./produtoModel.js")(sequelize, DataTypes);
db.compras = require("./compraModel.js")(sequelize, DataTypes);
db.statusCompra = require("./statusCompraModel.js")(sequelize, DataTypes);
db.tipoPagamento = require("./tipoPagamentoModel.js")(sequelize, DataTypes);
db.compraProduto = require("./compraProdutoModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("SEQUELIZE SYNC: sucesso.");
});

module.exports = db;