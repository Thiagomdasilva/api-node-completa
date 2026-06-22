const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const controller = require("../controllers/carroController");

/**
 * @swagger
 * tags:
 *   name: Carros
 *   description: CRUD de carros
 */

/**
 * @swagger
 * /carros:
 *   get:
 *     summary: Lista todos os carros
 *     tags: [Carros]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/", auth, controller.findAll);

/**
 * @swagger
 * /carros/{id}:
 *   get:
 *     summary: Busca carro por ID
 *     tags: [Carros]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/:id", auth, controller.findById);

/**
 * @swagger
 * /carros:
 *   post:
 *     summary: Cria um carro
 *     tags: [Carros]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Criado
 */
router.post("/", auth, role(["admin"]), controller.create);

/**
 * @swagger
 * /carros/{id}:
 *   put:
 *     summary: Atualiza carro
 *     tags: [Carros]
 *     security:
 *       - bearerAuth: []
 */
router.put("/:id", auth, role(["admin"]), controller.update);

/**
 * @swagger
 * /carros/{id}:
 *   delete:
 *     summary: Remove carro
 *     tags: [Carros]
 *     security:
 *       - bearerAuth: []
 */
router.delete("/:id", auth, role(["admin"]), controller.remove);

module.exports = router;