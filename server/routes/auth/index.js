const { Router } = require("express");
const { User } = require("../../models");
const {
  hashPassword,
  makeEmailJWT,
  decodeJwt,
  makeAccessJWT,
} = require("../../lib/utils");
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
  try {
    const jwt = decodeJwt(token);
    res.status(200).json({ message: "Token O", email: jwt.email });
  } catch (err) {
    res.status(409).json({ message: "Token X" });
    return;
  }
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
                <a href="http://121.184.45.242:8080/register?token=${jwt}" target="_blank">
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
    const accessJWT = makeAccessJWT({ email });
    emailHandler.sendEmail({
      title: "YeongLog 로그인 메일",
      html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>  
            </head>
            <body>
              <a href="http://121.184.45.242:8080/login?token=${accessJWT}" target="_blank">
                로그인 하기
              </a>
            </body>
          </html>
          `,
      toEmail: email,
    });
    res.status(200).json({ message: "Sending Mail" });
  }
);

authRouter.post(
  "/register",
  checkBodyMiddleWare(["email", "name", "introduce"]),
  async (req, res) => {
    const { email, name, introduce } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.status(409).json({ message: "Already User" });
      return;
    }

    await User.create({
      email,
      name,
      introduce,
      profileImg: "",
    });

    res.status(200).json({ message: "Success User Create" });
  }
);

module.exports = authRouter;
