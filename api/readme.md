# Sequelize

-   yarn sequelize migration:create --name= _cria uma migration_;
-   yarn  sequelize-cli db:migrate _criar a tabela no banco_
_foreingKey_
-    perfis_id:{
      type: Sequelize.INTEGER,
      references:{
        model:'perfis',
        key:'id',
      },
      onUPDATE:'CASCADE',
      onDELETE:'SET NULL',
      allowNull:false,
    },
