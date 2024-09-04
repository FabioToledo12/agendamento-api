import * as Yup from "yup";
import User from "../models/User.model.js";

async function getUsers(req, res) {
  const users = await User.find();
  return res.status(200).json(users);
}

async function createUsers(req, res) {
  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  const isValid = await schema.isValid(req.body);
  //console.log(req.body);
  if (!isValid) {
    return res
      .status(401)
      .json({ error: "Make sure your email or password are correct" });
  }

  const user = req.body;

  // console.log(user.email);

  const emailPassSearch = await User.findOne({
    email: user.email,
  });

  // console.log(emailPassSearch);

  if (emailPassSearch !== null ) {
    return res
      .status(401)
      .json({ error: "cool... your account already exists on our servers" });
  }
    
  const newUser = await User.create(user);
  //const user = { id: v4(), email, password };
  //users.push(user);
  return res.status(201).json(newUser);
  //return res.status(201).json({message: "ok"});
}

async function deleteUsers(req, res) {
  //const index = res.userIndex;
  //users.splice(index, 1);
  //console.log(req);
  const id = req.params.id;
  await User.findByIdAndDelete({ _id: id });

  return res.status(200).json("User deleted with success !!!");
}

export { getUsers, createUsers, deleteUsers };
