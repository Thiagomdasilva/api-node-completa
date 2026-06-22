const Moto = require("../models/nosql/Moto");

exports.create = async (req, res) => {
  const data = await Moto.create(req.body);
  res.status(201).json(data);
};

exports.findAll = async (req, res) => {
  res.json(await Moto.find());
};

exports.findById = async (req, res) => {
  const data = await Moto.findById(req.params.id);
  if (!data) return res.status(404).json({ error: "Não encontrado" });
  res.json(data);
};

exports.update = async (req, res) => {
  res.json(await Moto.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.remove = async (req, res) => {
  await Moto.findByIdAndDelete(req.params.id);
  res.json({ message: "Removido" });
};