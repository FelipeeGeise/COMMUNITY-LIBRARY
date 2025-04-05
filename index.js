//PARTES DA ROTA
//METHOD => GET, POST PUT/PATCH, DELETE
//NAME => "/users" SEMPRE NO PLURAL
//CALLBACK FUNCTION => ONDE EXECUTAMOS O BACK-END (LÓGICA, REGRA DE NEGÓCIOS)

import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  res.status(201).json("Usuário Criado Com Sucesso!");
});

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
