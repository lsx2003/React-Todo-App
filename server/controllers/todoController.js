const connection = require("../dbConfig");
const { param } = require("../routes/todosRouter");

const todoCtrl = {
  getTodos: async (req, res) => {
    connection.query("SELECT * FROM TodoApp.todos", (error, rows) => {
      if (error) throw error;
      res.send(rows); // DB의 rows들을 응답으로 보내준다.
    });
  },
  insertTodo: async (req, res) => {
    const { id, date, done, content } = req.body;
    const sql = `INSERT INTO TodoApp.todos VALUES (${id},  '${date}',  ${done}, '${content}')`;

    connection.query(sql, (error, rows) => {
      if (error) throw error;
      res.send(200);
    });
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM TodoApp.todos WHERE id = '${id}' `;
    connection.query(sql, (error) => {
      if (error) throw error;
      res.send(200);
    });
  },

  updateDone: async (req, res) => {
    const { id } = req.params;
    const { isDone } = req.body;
    console.log(id);
    console.log(isDone);
    const Done = isDone === 1 ? 0 : 1;
    const sql = `UPDATE todos SET isDone=${Done} WHERE id =${id}`;
    connection.query(sql, (error) => {
      if (error) throw error;
      res.send(200);
    });
  },

  updateContent: async (req, res) => {
    const { id, content } = req.body;
    console.log(id, content);
    const sql = `UPDATE todos SET content='${content}' WHERE id =${id}`;
    connection.query(sql, (error) => {
      if (error) throw error;
      res.send(200);
    });
  },
};

module.exports = todoCtrl;
