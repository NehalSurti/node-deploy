const express = require("express");
const taskController = require("../controller/task");
const router = express.Router();

router
  .post("/", taskController.createTask)
  .get("/", taskController.getAllTask)
  .get("/:id", taskController.getTask)
  .put("/:id", taskController.replaceTask)
  .patch("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

module.exports = router;