'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

    User.getEmail = async (email) => {
        return await User.findAll({
            where: {
                email: email
            }
        })
    }

    User.getName = async (name) => {
        return await User.findAll({
            where: {
                name: name
            }
        })
    }

  return User;
};

