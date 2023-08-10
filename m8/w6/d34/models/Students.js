const { Sequelize, DataTypes } = require("sequelize");

const StudentModel = (sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(63),
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    // },
  });
  return Student;
};

module.exports = StudentModel;
