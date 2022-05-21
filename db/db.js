const { Sequelize, DataTypes } = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/stackathon"
);

module.exports = { db, DataTypes };