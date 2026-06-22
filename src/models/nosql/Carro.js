const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema(
  {
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    ano: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carro", CarroSchema);