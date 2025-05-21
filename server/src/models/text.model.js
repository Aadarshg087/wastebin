const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
