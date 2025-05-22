const express = require("express");

const {
  saveText,
  getText,
  getAllBlogs,
} = require("../controllers/texts.controllers");

const textRouter = express.Router();

textRouter.post("/save", saveText);
textRouter.get("/allBlogs", getAllBlogs);
textRouter.get("/:id", getText);

module.exports = textRouter;
