const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

// 🔐 criar usuário (apenas admin)
router.post("/", auth, role(["admin"]), controller.createUser);

// 🔐 listar usuários (apenas admin)
router.get("/", auth, role(["admin"]), controller.findAll);

// 🔐 buscar usuário por id
router.get("/:id", auth, controller.findById);

// 🔐 atualizar usuário (admin)
router.put("/:id", auth, role(["admin"]), controller.update);

// 🔐 deletar usuário (admin)
router.delete("/:id", auth, role(["admin"]), controller.remove);

// 🔥 rota temporária de seed (SEM autenticação)
router.get("/seed", controller.seed);

module.exports = router;