const { Sequelize, DataTypes } = require("sequelize");

const CourseModel = (sequelize) => {
  const Course = sequelize.define("course", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING(7),
    },
    code: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    teacher_name: {
      type: DataTypes.STRING(15),
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
  return Course;
};

module.exports = CourseModel;
