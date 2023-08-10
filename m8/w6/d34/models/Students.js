const { Sequelize, DataTypes } = require("sequelize");

const StudentModel = (sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    enroll: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
  return Student;
};

module.exports = StudentModel;
