'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cars_image", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      image_name: {
        type: Sequelize.UUID,
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

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cars_image");
  }
};
