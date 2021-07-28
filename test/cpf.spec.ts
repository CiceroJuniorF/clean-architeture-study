import CPF from "../src/CPF";
import { invalidValuesInterator } from "./utils";


test("Deve lançar exceção 'Invalid CPF' quando passado um CPF inválido", () =>{
    expect(()=>{const cpf = new CPF("111.111.111-11");}).toThrow("Invalid CPF")
});

test("Deve lançar exceção 'Invalid CPF' quando não é passado nenhum CPF", () =>{
    invalidValuesInterator((interator)=>{    
        expect(()=>{const cpf = new CPF(interator);}).toThrow("Invalid CPF")          
    });     
});

test("Não Deve lançar exceção 'Invalid CPF'", () =>{
    expect(()=>{const cpf = new CPF("487.501.680-88");}).not.toThrow("Invalid CPF")
});

test("Não Deve lançar exceção 'Invalid CPF'", () =>{
    const cpfValue = "487.501.680-88"
    const cpf = new CPF(cpfValue);
    expect(cpf.getValue()).toBe(cpfValue);
});