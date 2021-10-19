'use strict';
module.exports = (sequelize, DataTypes) => {
     const Cars = sequelize.define('cars', {
          id: DataTypes.UUID,
          name: DataTypes.STRING,
          descripiton: DataTypes.STRING,
          daily_rate: DataTypes.INTEGER,
          available: DataTypes.BOOLEAN,
          license_plate: DataTypes.STRING,
          fine_amount: DataTypes.INTEGER,
          brand: DataTypes.STRING,
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE,
          categories_id: DataTypes.UUID,
     }, {});
     Cars.associate = function (models) {
          Cars.belongsTo(models.Categories, { foreignKey: 'categories_id', as: 'categories' })
     };
     return Cars;
};