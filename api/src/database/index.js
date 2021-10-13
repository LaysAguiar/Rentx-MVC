//import modulos
import Sequelize from "sequelize";
//import databaseConfig
import databaseConfig from "../config/database";
//import models for database

const models = [];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models.map((model) => model.init(this.connection)).map((model) => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
