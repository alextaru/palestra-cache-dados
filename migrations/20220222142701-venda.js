'use strict';
const schema = 'venda';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema(schema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema(schema);
  }
};
