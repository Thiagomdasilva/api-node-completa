const request = require("supertest");
const app = require("../src/app");

describe("API COMPLETA", () => {

  let token;

  it("login admin", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "teste", password: "123" });

    token = res.body.token;

    expect(res.statusCode).toBe(200);
  });

  it("bloqueia carros sem token", async () => {
    const res = await request(app).get("/carros");
    expect(res.statusCode).toBe(401);
  });

  it("lista carros com token", async () => {
    const res = await request(app)
      .get("/carros")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

});