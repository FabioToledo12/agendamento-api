import cors from "cors";
import express from "express";

// import connectDataBase from "./src/database/db.js";
import connectDataBase from "./src/database/db.js";
// import routes from "./src/routes.js";
import routes from "./src/routes.js";

const server = express();
server.use(express.json());
server.use(cors());

server.use(routes);

const port = 3001;

/*************************************************************************************************************/
/* começando as rotas */
const tasks = [];

const checkTaskId = (req, res, next) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === id);

  //console.log(index);
  if (index < 0) {
    return res.status(404).json({ message: "❌ Task not found ❌" });
  }
  res.taskIndex = index;
  res.taskId = id;

  next();
};

/*************************************************************************************************************/
/* Aqui comeca minhas rotas de users */
const users = [];

const checkUserId = (req, res, next) => {
  const { id } = req.params;
  const index = tasks.findIndex((user) => user.id === id);

  //console.log(index);
  if (index < 0) {
    return res.status(404).json({ message: "❌ User not found ❌" });
  }
  res.userIndex = index;
  res.userId = id;

  next();
};

server.put("/users/:id", checkUserId, (req, res) => {
  const { email, password } = req.body;
  const index = res.userIndex;
  const id = res.userId;

  const updateTask = { id, email, password };

  users[index] = updateUser;

  return res.status(200).json(updateUser);
});

/*************************************************************************************************************/
/* conexao com o banco de dados mongoDB */
connectDataBase()
  .then(() => {
    console.log("🏦🎲 DataBase connected successfully!!! 🚀");
  })
  .catch((error) => {
    console.log(`🏦🎲 DataBase not connected😔" + error`);
  });

/*************************************************************************************************************/
/* subir o servidor para que possamos utilizar o front-end */
server.listen(port, () => {
  console.log(
    `🚀 Server started on port ${port}: : http://localhost:${port}/ 🚀`
  );
});
