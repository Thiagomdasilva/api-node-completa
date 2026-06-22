const bcrypt = require("bcryptjs");
const User = require("../models/sql/User");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      role: role || "user"
    });

    const { password: _, ...safe } = user.toJSON();

    res.status(201).json(safe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// FIND ALL
exports.findAll = async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ["password"] }
  });

  res.json(users);
};

// FIND BY ID
exports.findById = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ["password"] }
  });

  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

  res.json(user);
};

// UPDATE
exports.update = async (req, res) => {
  await User.update(req.body, {
    where: { id: req.params.id }
  });

  res.json({ message: "Atualizado com sucesso" });
};

// DELETE
exports.remove = async (req, res) => {
  await User.destroy({
    where: { id: req.params.id }
  });

  res.json({ message: "Removido com sucesso" });
};

// SEED
exports.seed = async (req, res) => {
  const existe = await User.findOne({ where: { email: "teste@email.com" } });

  if (existe) {
    return res.json({ mensagem: "Usuário já existe" });
  }

  const hash = await bcrypt.hash("123", 10);

  const user = await User.create({
    name: "Administrador",
    email: "teste@email.com",
    password: hash,
    role: "admin"
  });

  const { password, ...safe } = user.toJSON();

  res.json({ user: safe });
};