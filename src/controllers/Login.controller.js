import * as Yup from "yup";
import User from "../models/User.model.js";

async function getLogin(req, res) {
  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  const isValid = await schema.isValid(req.body);
  if (!isValid) {
    return res
      .status(401)
      .json({ error: "Make sure your email or password are correct" });
  }

  const { email, password } = req.body;

  const emailPassSearch = await User.findOne({
    email: email,
  });

  // console.log(emailPassSearch);

  if (emailPassSearch === null) {
    return res
      .status(401)
      .json({ error: "Make sure your email or password are correct" });
  }



  // if (emailPassSearch === ) 

  return res.status(200).json({ email, password });
}

export { getLogin };
