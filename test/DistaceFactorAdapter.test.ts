import DistaceFactorAdapter from "../src/DistanceFactorAdapter";

test("Deve retornar 1000 para qualquer CEP devido estar mocado - será um integração externa com algum serviço", () =>{
    const distaceFactorAdapter = new DistaceFactorAdapter();
    expect(distaceFactorAdapter.getFactor("68010-590", "53402-540")).toBe(1000)
});