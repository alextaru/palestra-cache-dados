'use strict';
const tableName = 'produtos';
const schema = 'venda';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({tableName, schema}, [{
      codigo_barra: '5448445155445',
      codigo: '0',
      nome: 'notebook dell',
      preco_compra: 1000,
      preco_custo: 800,
      preco_venda: 1000,
      estoque: 3,
      marca: 'dell',
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({tableName, schema}, {}, {});
  }
};
