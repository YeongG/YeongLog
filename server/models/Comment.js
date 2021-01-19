const Sequelize = require("sequelize");

module.exports = class Comment extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        date: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.User, {
      foreignKey: "commenterId",
      targetKey: "id",
    });
  }
};
