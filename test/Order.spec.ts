import OrderItem from "../src/OrderItem";
import CPF from "../src/CPF";
import Order from "../src/Order";

test("Deve lançar exceção 'Items not be empty' ", ()=>{    
    expect(()=>{
        const order = new Order(getCpf(), [])
    }).toThrow('Items not be empty');
});

test("Deve fazer um pedido com 3 itens", ()=>{    
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
    expect(order.getTotal()).toBe(900);
});

function getCpf(): CPF{
    return new CPF("487.501.680-88");
}