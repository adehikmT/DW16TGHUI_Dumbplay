const express = require("express");
const Route = express.Router();

// panggil controller
const {
  read,
  create,
  update,
  destroy,
} = require("../controllers/transactionController");
const { authToken, authAdmin } = require("../middleware/authMiddleware");
//helper
const upload = require("../helpers/upload");
//authmidel
const { valTrans } = require("../middleware/validMiddleware");

Route.get("/transaction", authToken, read)
  .post("/transaction", authToken, upload, valTrans, create)
  .patch("/transaction/:id", authToken, authAdmin, update)
  .delete("/transaction/:id", authToken, authAdmin, destroy);

module.exports = Route;
