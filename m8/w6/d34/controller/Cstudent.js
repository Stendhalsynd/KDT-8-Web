const express = require("express");
const models = require("../models");
const { Student, StudentProfile, Courses } = models;

const app = express();
app.use(express.urlencoded({ extended: true }));

exports.index = (req, res) => {
  res.render("index");
};

exports.post_student = async (req, res) => {
  try {
    const { userid, email, password, name, major, enroll } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      // include 는 쿼리 실행시 관련된 모델의 데이터도 함께 조회할 수 있다.
      {
        // include: StudentProfile,
        include: [{ model: StudentProfile }],
      }
    );
    console.log("user : ", user);
    res.send(user);
  } catch (error) {
    console.error(error);
  }
};

exports.post_course = async (req, res) => {
  try {
    const { name, room, code, teacher_name, studentId } = req.body;
    const courses = await Courses.create({
      name,
      room,
      code,
      teacher_name,
      studentId,
    });
  } catch (error) {
    console.error(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const students = await Student.findAll({
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(students);
  } catch (error) {
    console.error(error);
  }
};
