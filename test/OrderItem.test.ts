import OrderItemDimensions from "../src/OrderItemDimensions";
import OrderItem from "../src/OrderItem";
import { invalidValuesInterator } from "./utils";

test("Deve criar um OrderItem com descrição preço e quantidade", () => {
    expect(()=>{
        const orderItem = new OrderItem("Bola", 200.25, 5, getOrderItemDimesions());
    }).not.toThrow();
});

test("Deve lançar erro 'Invalid description' ", () => {
    invalidValuesInterator((interator)=>{    
        expect(()=>{
            const orderItem = new OrderItem(interator, 200.25, 5, getOrderItemDimesions()) 
        }).toThrow("Invalid description")          
    });
});

test("Deve lançar erro 'Invalid price' por o price ser menor que 0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', -1 , Number.MAX_VALUE, getOrderItemDimesions())
    }).toThrow("Invalid price")      
});

test("Deve lançar erro 'Invalid price' por o price ser  0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', 0 , Number.MAX_VALUE, getOrderItemDimesions() )
    }).toThrow("Invalid price")      
});

test("Deve lançar erro 'Invalid quantity' por o quantity ser menor que 0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', Number.MAX_VALUE  , -1, getOrderItemDimesions())
    }).toThrow("Invalid quantity")      
});

test("Deve lançar erro 'Invalid quantity' por o quantity ser 0", () => {
    expect(()=>{
        const orderItem = new OrderItem('bola', Number.MAX_VALUE , 0, getOrderItemDimesions())
    }).toThrow("Invalid quantity")      
});

test("Deve lançar erro 'Invalid dimensions' por items sem dimensões", () => {
    expect(()=>{
        const orderItem = new OrderItem('Bola', 200.25 , 10, null);
    }).toThrow("Invalid dimensions");
});


function getOrderItemDimesions(){
    const width = 20;
    const height = 15;
    const depth = 10;
    const weight = 1;
    return new OrderItemDimensions(width, height, depth, weight);
}


