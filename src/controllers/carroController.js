const Carro = require("../models/nosql/Carro");

// CREATE
exports.create = async (req, res) => {
  const data = await Carro.create(req.body);
  res.status(201).json(data);
};

// FIND ALL
exports.findAll = async (req, res) => {
  const data = await Carro.find();
  res.json(data);
};

// FIND BY ID
exports.findById = async (req, res) => {
  const data = await Carro.findById(req.params.id);
  if (!data) return res.status(404).json({ error: "Não encontrado" });
  res.json(data);
};

// UPDATE
exports.update = async (req, res) => {
  const data = await Carro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

// DELETE
exports.remove = async (req, res) => {
  await Carro.findByIdAndDelete(req.params.id);
  res.json({ message: "Removido" });
};