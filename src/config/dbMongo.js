const mongoose = require("mongoose");

module.exports = async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo conectado");
  } catch (err) {
    console.error("Erro Mongo:", err.message);
  }
};