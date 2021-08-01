import OrderItem from "../src/OrderItem";
import CPF from "../src/CPF";
import Order from "../src/Order";
import Coupon from "../src/Coupon";
import OrderItemDimensions from "../src/OrderItemDimensions";

test("Deve lançar exceção 'Items not be empty' ", ()=>{    
    expect(()=>{
        const distanceFactor = 1000;
        const order = new Order(getCpf(), [], distanceFactor)
    }).toThrow('Items cannot be empty');
});

test("Deve criar um pedido com 3 itens", ()=>{    
    expect(()=>{
        const orderItem1 = new OrderItem("Bola", 100, 1, getOrderItemDimesions());
        const orderItem2 = new OrderItem("Tênis", 100, 2, getOrderItemDimesions());
        const orderItem3 = new OrderItem("Meião", 200, 3, getOrderItemDimesions());
        const distanceFactor = 1000;
        const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3], distanceFactor);
    }).not.toThrow();
});

test("O total da order deve dar 959.94", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1, getOrderItemDimesions());
    const orderItem2 = new OrderItem("Tênis", 100, 2, getOrderItemDimesions());
    const orderItem3 = new OrderItem("Meião", 200, 3, getOrderItemDimesions());
    const distanceFactor = 1000;
    const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3], distanceFactor);
    expect(order.getTotalPrice()).toBe(959.94);
});

test("O total da order deve dar 863.95, pois um cupom de 10% foi aplicado", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1, getOrderItemDimesions());
    const orderItem2 = new OrderItem("Tênis", 100, 2, getOrderItemDimesions());
    const orderItem3 = new OrderItem("Meião", 200, 3, getOrderItemDimesions());
    const distanceFactor = 1000;
    const coupon1 = new Coupon("MAISDESCONTO", 10);
    const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3], distanceFactor, [coupon1]);
    expect(order.getTotalPrice()).toBe(863.95);
});

test("O total da order deve dar 767.95, pois dois cupoms de 10% foram aplicados", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1, getOrderItemDimesions());
    const orderItem2 = new OrderItem("Tênis", 100, 2, getOrderItemDimesions());
    const orderItem3 = new OrderItem("Meião", 200, 3, getOrderItemDimesions());
    const distanceFactor = 1000;
    const coupon1 = new Coupon("MAISDESCONTO", 10);
    const coupon2 = new Coupon("MAISDESCONTO2", 10);
    const order = new Order(getCpf(), [orderItem1, orderItem2, orderItem3], distanceFactor, [coupon1, coupon2]);
    expect(order.getTotalPrice()).toBe(767.95);
});


test("O total da order deve dar 109.99, com as dimesões pré definidas", ()=>{    
    const orderItem1 = new OrderItem("Bola", 100, 1, getOrderItemDimesions());
    const distanceFactor = 1000;
    const order = new Order(getCpf(), [orderItem1], distanceFactor);
    expect(order.getTotalPrice()).toBe(109.99);
});

function getOrderItemDimesions(){
    const width = 20;
    const height = 15;
    const depth = 10;
    const weight = 1;
    return new OrderItemDimensions(width, height, depth, weight);
}

function getCpf(): CPF{
    return new CPF("487.501.680-88");
}