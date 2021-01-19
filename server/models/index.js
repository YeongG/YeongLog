"use strict";

const Sequelize = require("sequelize");
const config = require("../config/config.json");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User");
db.Comment = require("./Comment");

db.User.init(sequelize);
db.Comment.init(sequelize);

db.User.associate(db);
db.Comment.associate(db);

module.exports = db;
