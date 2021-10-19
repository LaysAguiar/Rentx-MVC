'use strict';
module.exports = (sequelize, DataTypes) => {
     const Specifications = sequelize.define('specifications', {
          id: DataTypes.UUID,
          name: DataTypes.STRING,
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE,
          cars_id: DataTypes.UUID,
     }, {});
     Specifications.associate = function (models) {
          Specifications.belongsTo(models.cars, { foreignKey: 'cars_id', as: 'cars' })
     };

     return Specifications;
};