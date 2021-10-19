'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cars", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripiton: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      daily_rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      license_plate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fine_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
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
      categories_id: {
        type: Sequelize.UUID,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUPDATE: 'CASCADE',
        onDELETE: 'SET NULL',
        allowNull: false,
      },


    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cars");
  }
};
