const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/connectDB");
const textRouter = require("./routes/texts.routes");
dotenv.config({
  path: ".env",
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CORS,
  })
);

async function DBConnection() {
  try {
    await connectDB();
  } catch (e) {
    console.log("Erro in connection with DB", e);
  }
}

DBConnection();

app.use("/", textRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});

module.exports = app;
