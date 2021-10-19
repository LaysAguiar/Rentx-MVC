'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("rentals", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expected_return_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cars_id: {
        type: Sequelize.UUID,
        references: {
          model: 'cars',
          key: 'id',
        },
        onUPDATE: 'CASCADE',
        onDELETE: 'SET NULL',
        allowNull: false,
      },
      users_id: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
        onUPDATE: 'CASCADE',
        onDELETE: 'SET NULL',
        allowNull: false,
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("rentals")
  }
};
