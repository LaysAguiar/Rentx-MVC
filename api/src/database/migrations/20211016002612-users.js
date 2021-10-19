"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable("users", {
			id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			username: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			driver_license: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			admin: {
				type: Sequelize.BOOLEAN,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable("users");
	},
};
