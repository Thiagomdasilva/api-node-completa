const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/sql/User");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ error: "Senha inválida" });
  }

  // 🔥 AQUI É ONDE VOCÊ COLOCA O CÓDIGO DO TOKEN
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return res.json({ token });
};