'use strict';
module.exports = (sequelize, DataTypes) => {
     const Categories = sequelize.define('categories', {
          id: DataTypes.UUID,
          name: DataTypes.STRING,
          descripiton: DataTypes.STRING,
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE,
     }, {});
     return Categories;
};