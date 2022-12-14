const { sequelize } = require(".");

// ReferĂȘncia do DDL em SQL:
// CREATE TABLE `tb_produto` (
//     `id_produto` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `nome` VARCHAR(255) NOT NULL,
//     `descricao` VARCHAR(1000) NOT NULL,
//     `preco` DECIMAL(7 , 2 ) NOT NULL,
//     `data_criacao` DATETIME NOT NULL,
//     `data_atualizacao` DATETIME NOT NULL
// );

module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'tb_produto',
    {
      id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preco: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
      },
      data_criacao: {
        type: DataTypes.DATE,
      },
      data_atualizacao: {
        type: DataTypes.DATE,
      },
      ic_ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Produto;
};