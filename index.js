const express = require("express");
const app = express();

app.use(express.json());

const courseRouter = require("./routes/courses.route");

app.use("/api/courses", courseRouter);

app.listen(3000, () => {
  console.log("You are listen in port 3000");
});
    