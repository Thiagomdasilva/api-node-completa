const mongoose = require("mongoose");

const MotoSchema = new mongoose.Schema({
  nome: String,
  cilindrada: Number
});

module.exports = mongoose.model("Moto", MotoSchema);