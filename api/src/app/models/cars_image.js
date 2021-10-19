'use strict';
module.exports = (sequelize, DataTypes) => {
     const Cars_image = sequelize.define('cars_image', {
          id: DataTypes.UUID,
          image_name: DataTypes.STRING,
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE,
          cars_id: DataTypes.UUID,
     }, {});
     Cars_image.associate = function (models) {
          Cars_image.belongsTo(models.cars, { foreignKey: 'cars_id', as: 'cars' })
     };

     return Cars_image;
};