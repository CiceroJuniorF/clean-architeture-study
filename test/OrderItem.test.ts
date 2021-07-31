import OrderItem from "../src/OrderItem";
import { invalidValuesInterator } from "./utils";

test("Deve criar um OrderItem com descrição preço e quantidade", () => {
    expect(()=>{
        const orderItem = new OrderItem("Bola", 200.25, 5);
    }).not.toThrow();
});

test("Deve lançar erro 'Invalid description' ", () => {
    invalidValuesInterator((interator)=>{    
        expect(()=>{
            const orderItem = new OrderItem(interator, 200.25, 5) 
        }).toThrow("Invalid description")          
    });
});

test("Deve lançar erro 'Invalid price' por o price ser menor que 0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', -1 , Number.MAX_VALUE)
    }).toThrow("Invalid price")      
});

test("Deve lançar erro 'Invalid price' por o price ser  0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', 0 , Number.MAX_VALUE )
    }).toThrow("Invalid price")      
});

test("Deve lançar erro 'Invalid quantity' por o quantity ser menor que 0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', Number.MAX_VALUE  , -1)
    }).toThrow("Invalid quantity")      
});

test("Deve lançar erro 'Invalid quantity' por o quantity ser  0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', Number.MAX_VALUE , 0)
    }).toThrow("Invalid quantity")      
});

test("Deve retornar o total do OrderItem price * quantity", () => {
    const orderItem = new OrderItem('Bola', 200.25 , 10);
    expect(orderItem.getTotal()).toBe(2002.5);  
});