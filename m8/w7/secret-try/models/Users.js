const { Sequelize, DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pw: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  });
  return User;
};

module.exports = UserModel;
