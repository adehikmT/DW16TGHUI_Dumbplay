const express = require("express");
const Route = express.Router();
// controller
const { register, login } = require("../controllers/authController");
// validate
const { validRegist, validLogin } = require("../middleware/validMiddleware");

Route.post("/registration", validRegist, register).post(
  "/login",
  validLogin,
  login
);

module.exports = Route;
