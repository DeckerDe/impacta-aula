import handler from "../src/index.mjs";

describe("Teste base do App", () => {
  it("deve retornar sucesso", async () => {
    const response = await handler({ httpMethod: "GET" });
    expect(response.statusCode).toBe(200);
  });
});