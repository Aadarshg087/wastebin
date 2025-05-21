const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/wastebin`
    );

    console.log("Mongo is connected: ", connectionInstance.connection.host);
  } catch (e) {
    console.log("Error in connecting to the DB", e);
    process.exit(1);
  }
}

module.exports = connectDB;
