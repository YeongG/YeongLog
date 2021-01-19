const { Router } = require("express");
const { User } = require("../../models");
const { hashPassword } = require("../../lib/utils");
const { checkBodyMiddleWare } = require("../../middleware");

const authRouter = Router();

authRouter.post(
  "/register",
  checkBodyMiddleWare(["email", "name", "password"]),
  async (req, res) => {
    const { email, name, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.status(409).json({ message: "Already User" });
      return;
    }

    User.create({
      email,
      name,
      password: hashPassword(password),
      profileImg: "",
    });
    res.status(200).json({ message: "Success User Create" });
  }
);

authRouter.post(
  "/login",
  checkBodyMiddleWare(["email", "password"]),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password: hashPassword(password) },
    });
    if (!user) {
      res.status(404).json({ message: "Email, Password is not correct" });
      return;
    }

    res.status(200).json(user);
  }
);

module.exports = authRouter;
