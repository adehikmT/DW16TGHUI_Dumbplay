const express = require("express");
const Route = express.Router();

// controller
const { read, create } = require("../controllers/artisController");
// middleware
const { authToken, authAdmin } = require("../middleware/authMiddleware");
// validate
const { validArtis } = require("../middleware/validMiddleware");

Route.get("/artis", read).post(
  "/artis",
  authToken,
  authAdmin,
  validArtis,
  create
);

module.exports = Route;
