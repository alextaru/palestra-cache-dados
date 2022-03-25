const { connection } = require('../connection');
const { Model, DataTypes } = require("sequelize");

class Produto extends Model { }

Produto.init({
    codigo_barra: DataTypes.STRING,
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    preco_compra: DataTypes.FLOAT,
    preco_custo: DataTypes.FLOAT,
    preco_venda: DataTypes.FLOAT,
    estoque:DataTypes.INTEGER,
},
{
  sequelize: connection,
  tableName: 'produtos',
  schema: 'venda'
});

module.exports = Produto;
