const router = require("express").Router();
const todoCtrl = require("../controllers/todoController");

router // api/todos
  .route("/")
  .get(todoCtrl.getTodos)
  .post(todoCtrl.insertTodo)
  .put(todoCtrl.updateContent);

router // api/todos:id
  .route("/:id")
  .delete(todoCtrl.deleteTodo)
  .put(todoCtrl.updateDone);

module.exports = router;
