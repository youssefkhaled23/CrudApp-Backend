const express = require("express");

const router = express.Router(); // Changed from express() to express.Router()

const courseController = require("../Controllers/courses.controller.js");

const { courseValidtionSchema } = require("../validtion/courseValidtion"); // Destructured courseValidtionSchema from require statement

router.route("/")
  .get(courseController.getAllCourses)
  .post(courseValidtionSchema, courseController.createCourse); // Added curly braces around courseValidtionSchema

router
  .route("/:id")
  .get(courseController.getCourseById)
  .patch(courseController.updateCourse) // Removed ":id" from patch route
  .delete(courseController.deleteCourse) // Removed ":id" from delete route

module.exports = router; // Changed from { router } to router
