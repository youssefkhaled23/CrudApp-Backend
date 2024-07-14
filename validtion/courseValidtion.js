const { body } = require("express-validator");

const courseValidtionSchema = [
  body("title")
    .notEmpty()
    .withMessage("Title required")
    .isLength({ min: 2 })
    .withMessage("Tile must be Atleast 3 digits"),
  body("price").notEmpty().withMessage("Price required "),
];

module.exports = { courseValidtionSchema };
