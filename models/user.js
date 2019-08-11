'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    user: DataTypes.STRING,
  }, {
      underscored: true,
      defaultScope: {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
      }
  }, {
    instanceMethods: {
      // Metodos de instancia.
    }
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
