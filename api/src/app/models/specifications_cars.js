'use strict';
module.exports = (sequelize, DataTypes) => {
     const Specifications_cars = sequelize.define('specifications_cars', {
          id: DataTypes.UUID,
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE,
          cars_id: DataTypes.UUID,
          specifications_id: DataTypes.UUID,
     }, {});
     Specifications_cars.associate = function (models) {
          Specifications_cars.belongsTo(models.cars, { foreignKey: 'cars_id', as: 'cars' })
          Specifications_cars.belongsTo(models.specifications, { foreignKey: 'specifications_id', as: 'specifications' })
     };

     return Specifications_cars;
};