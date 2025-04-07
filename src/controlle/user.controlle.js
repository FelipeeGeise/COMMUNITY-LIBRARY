import userServices from "../service/user.services.js";

async function createUserControlle(req, res) {
  const newUser = req.body;

  try {
    const user = await userServices.createUserService(newUser);
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export default { createUserControlle };
