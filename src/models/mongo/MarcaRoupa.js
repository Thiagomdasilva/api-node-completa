const mongoose = require("mongoose");

const MarcaRoupaSchema = new mongoose.Schema({
  nome: String,
  pais: String
});

module.exports = mongoose.model("MarcaRoupa", MarcaRoupaSchema);