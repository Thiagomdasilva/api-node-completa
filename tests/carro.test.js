const request = require("supertest");
const app = require("../src/app");

describe("Carros API", () => {
  it("deve bloquear sem token", async () => {
    const res = await request(app).get("/carros");
    expect(res.statusCode).toBe(401);
  });
});