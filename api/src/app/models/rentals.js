'use strict';
module.exports = (sequelize, DataTypes) => {
     const Rentals = sequelize.define('rentals', {
          id: DataTypes.UUID,
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE,
          cars_id: DataTypes.UUID,
          users_id: DataTypes.UUID,
     }, {});
     Rentals.associate = function (models) {
          Rentals.belongsTo(models.cars, { foreignKey: 'cars_id', as: 'cars' })
          Rentals.belongsTo(models.users, { foreignKey: 'users_id', as: 'users' })
     };

     return Rentals;
};