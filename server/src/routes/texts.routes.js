const express = require("express");

const { saveText, getText } = require("../controllers/texts.controllers");

const textRouter = express.Router();

textRouter.post("/save", saveText);
textRouter.get("/:id", getText);

module.exports = textRouter;
