const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema({
  nome: String,
  marca: String,
  ano: Number
});

module.exports = mongoose.model("Carro", CarroSchema);