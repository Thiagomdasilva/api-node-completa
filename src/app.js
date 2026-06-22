const express = require("express");
const cors = require("cors");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express(); // <-- precisa vir antes de usar app

app.use(cors());
app.use(express.json());

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({ status: "API rodando" });
});

// ROTAS
app.use("/carros", require("./routes/carroRoutes"));
app.use("/motos", require("./routes/motoRoutes"));
app.use("/roupas", require("./routes/roupaRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));

module.exports = app;