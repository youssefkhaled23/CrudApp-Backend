const { validationResult } = require("express-validator");
let { courses } = require("../data/data");

const getAllCourses = (req, res) => {
  res.json(courses);
};

const getCourseById = (req, res) => {
  const courseId = +req.params.id;
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return res.status(404).json({ msg: "Course not found" });
  }

  res.json(course);
};

const createCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  const course = { id: courses.length + 1, ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

const updateCourse = (req, res) => {
  const courseId = +req.params.id;
  const courseIndex = courses.findIndex((course) => course.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).json({ msg: "Course not found" });
  }

  const updatedCourse = { ...courses[courseIndex], ...req.body };
  courses[courseIndex] = updatedCourse;

  res.status(200).json(updatedCourse);
};

const deleteCourse = (req, res) => {
  let courseId = +req.params.id;

  courses = courses.filter((course) => course.id !== courseId);

  res.status(200).json({ mes: "Delete Successfully" });
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
