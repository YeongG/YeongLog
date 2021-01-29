const { Router } = require("express");
const { checkLoginMiddleWare } = require("../../middleware");
const db = require("../../models");
const userRouter = Router();

userRouter.get("/", checkLoginMiddleWare, async (req, res) => {
  const { email } = req.app.get("JWT_DATA");

  const userData = await db.User.findOne({ where: { email } });
  res.json(userData);
});

module.exports = userRouter;
