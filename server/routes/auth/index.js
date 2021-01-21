const { Router } = require("express");
const { User } = require("../../models");
const { hashPassword } = require("../../lib/utils");
const EmailHandler = require("../../lib/mail");
const { checkBodyMiddleWare } = require("../../middleware");
require("dotenv").config();

const emailHandler = new EmailHandler(
  process.env.NODEMAILER_USER,
  process.env.NODEMAILER_PASS
);

const authRouter = Router();

authRouter.post(
  "/sendemail",
  checkBodyMiddleWare(["email"]),
  async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      const randomCode = Math.random().toString().substr(2, 6);
      try {
        await emailHandler.sendEmail({
          title: "YeongLog 회원가입 인증 메일",
          content: randomCode,
          toEmail: email,
        });
        res.status(200).json({ message: "Sending Mail" });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Sending Mail Failed" });
      }
      return;
    }
  }
);

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
