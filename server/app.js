const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

require("dotenv").config();

db.sequelize.sync({ force: false }).then(() => {
  console.log("DB 연결");
});

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is open Port : ${PORT}`);
});
