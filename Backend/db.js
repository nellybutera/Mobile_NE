// db.js
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("prepaid_token", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Define your models
const Token = require("./models/Token");

// Sync the models with the database
sequelize
  .sync({ force: false }) // Set force to true to drop tables and re-create them on every app start
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Unable to sync models with the database:", error);
  });

module.exports = sequelize;
