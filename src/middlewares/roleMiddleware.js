module.exports = function roleMiddleware(roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Não autenticado" });
    }

    if (!Array.isArray(roles)) {
      return res.status(500).json({ error: "Roles inválidas" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Acesso negado" });
    }

    next();
  };
};