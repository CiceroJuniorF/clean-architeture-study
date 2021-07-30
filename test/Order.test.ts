import OrderItem from "../src/OrderItem";
import CPF from "../src/CPF";
import Order from "../src/Order";
import Coupon from "../src/Coupon";

test("Deve lançar exceção 'Items not be empty' ", ()=>{    
    expect(()=>{
        const order = new Order(getCpf(), [])
    }).toThrow('Items cannot be empty');
});

test("Deve criar um pedido com 3 itens", ()=>{    
    expect(()=>{
        const orderItem1 = new OrderItem("Bola", 100, 1);
        const orderItem2 = new OrderItem("Tênis", 100, 2);
        const orderItem3 = new OrderItem("Meião", 200, 3);
        const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3]);
    }).not.toThrow();
});

test("O total da order deve dar 900", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1);
    const orderItem2 = new OrderItem("Tênis", 100, 2);
    const orderItem3 = new OrderItem("Meião", 200, 3);
    const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3]);
    expect(order.getClosingPriece()).toBe(900);
});

test("O total da order deve dar 810, pois um cupom de 10% foi aplicado", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1);
    const orderItem2 = new OrderItem("Tênis", 100, 2);
    const orderItem3 = new OrderItem("Meião", 200, 3);
    const coupon1 = new Coupon("MAISDESCONTO", 10);
    const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3], [coupon1]);
    expect(order.getClosingPriece()).toBe(810);
});

test("O total da order deve dar 810, pois 2 cupons de 10% foram aplicados", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1);
    const orderItem2 = new OrderItem("Tênis", 100, 2);
    const orderItem3 = new OrderItem("Meião", 200, 3);
    const coupon1 = new Coupon("MAISDESCONTO", 10);
    const coupon2 = new Coupon("MAISDESCONTOPARAVOCE", 10);
    const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3], [coupon1, coupon2]);
    expect(order.getClosingPriece()).toBe(720);
});

function getCpf(): CPF{
    return new CPF("487.501.680-88");
}