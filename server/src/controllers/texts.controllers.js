const Text = require("../models/text.model");

async function saveText(req, res) {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({
        error: "The content cannot be empty",
      });
    }

    const entry = await Text.create({
      content,
    });

    return res.status(200).json({
      id: entry._id,
      content: entry.content,
    });
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

async function getText(req, res) {
  try {
    const id = req.params.id;
    console.log(id);
    if (!id) {
      return res.status(400).json({
        error: "Content ID is required",
      });
    }

    const entry = await Text.findOne(
      { _id: id },
      "-_id -createdAt -updatedAt -__v"
    );
    return res.status(200).json(entry);
  } catch (error) {
    console.log("Getting error fetching the data", error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
}

module.exports = { saveText, getText };
