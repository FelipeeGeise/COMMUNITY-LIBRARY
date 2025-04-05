//PARTES DA ROTA
//METHOD => GET, POST PUT/PATCH, DELETE
//NAME => "/users" SEMPRE NO PLURAL
//CALLBACK FUNCTION => ONDE EXECUTAMOS O BACK-END (LÓGICA, REGRA DE NEGÓCIOS)

import express from "express";

const app = express();
import userRouters from "./src/routes/user.routes.js";

app.use(express.json());
app.use(userRouters);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
