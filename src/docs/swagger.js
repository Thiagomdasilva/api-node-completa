const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Node.js Completa",
      version: "1.0.0",
      description: "CRUD com JWT + SQL + NoSQL",
    },
    servers: [
      { url: "http://localhost:3000" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsDoc(options);