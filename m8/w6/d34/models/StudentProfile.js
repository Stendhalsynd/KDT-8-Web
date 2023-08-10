const { DataTypes } = require("sequelize");

const StudentProfileModel = (sequalize) => {
  const StudentProfile = sequalize.define("StudentProfile", {
    // 대문자로 한 이유?
    id: {
      type: DataTypes.INTEGER, // Sequeilze.Integer 와 차점?
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
  });
  return StudentProfile;
};

module.exports = StudentProfileModel;
