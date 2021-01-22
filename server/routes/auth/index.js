const { Router } = require("express");
const { User } = require("../../models");
const { hashPassword, makeEmailJWT, decodeJwt } = require("../../lib/utils");
const EmailHandler = require("../../lib/mail");
const { checkBodyMiddleWare } = require("../../middleware");
require("dotenv").config();

const emailHandler = new EmailHandler(
  process.env.NODEMAILER_USER,
  process.env.NODEMAILER_PASS
);

const authRouter = Router();

authRouter.get("/check-email", (req, res) => {
  const token = req.headers.authorization;
  const jwt = decodeJwt(token);
  if (!jwt) {
    res.status(409).json({ message: "Token X" });
    return;
  }
  res.status(200).json({ message: "Token O", email: jwt.email });
});

authRouter.post(
  "/sendemail",
  checkBodyMiddleWare(["email"]),
  async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      const jwt = makeEmailJWT({ email });
      emailHandler.sendEmail({
        title: "YeongLog 회원가입 인증 메일",
        html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>  
              </head>
              <body>
                <a href="http://localhost:8080/register?token=${jwt}" target="_blank">
                  회원가입 하기
                </a>
              </body>
            </html>
            `,
        toEmail: email,
      });
      res.status(200).json({ message: "Sending Mail" });
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
