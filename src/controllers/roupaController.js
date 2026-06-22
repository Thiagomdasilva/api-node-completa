const Roupa = require("../models/nosql/Roupa");

exports.create = async (req, res) => {
  res.status(201).json(await Roupa.create(req.body));
};

exports.findAll = async (req, res) => {
  res.json(await Roupa.find());
};

exports.findById = async (req, res) => {
  const data = await Roupa.findById(req.params.id);
  if (!data) return res.status(404).json({ error: "Não encontrado" });
  res.json(data);
};

exports.update = async (req, res) => {
  res.json(await Roupa.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.remove = async (req, res) => {
  await Roupa.findByIdAndDelete(req.params.id);
  res.json({ message: "Removido" });
};