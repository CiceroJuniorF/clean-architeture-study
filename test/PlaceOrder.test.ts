import CouponRepository from "../src/CouponRepository";
import ICouponRepository from "../src/ICouponRepository";
import PlaceOrder from "../src/PlaceOrder";
import PlaceOrderInput from "../src/PlaceOrderInput";

test("Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)", ()=> {
    const input:PlaceOrderInput = {
        cpf: "487.501.680-88",
        items: [
            { description : "Bola", price: 100, quantity: 1},
            { description : "Tênis", price: 100, quantity: 2},
            { description : "Meião", price: 100, quantity: 3},
        ]
    }
    const counponRepository: ICouponRepository = new CouponRepository();
    const placeOrder = new PlaceOrder(counponRepository);
    const output = placeOrder.execute(input);
    expect(output.total).toBe(600);   
});

test("Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)", ()=> {
    const input:PlaceOrderInput = {
        cpf: "487.501.680-88",
        items: [
            { description : "Bola", price: 100, quantity: 1},
            { description : "Tênis", price: 100, quantity: 2},
            { description : "Meião", price: 100, quantity: 3},
        ],
        coupons: [
            "VALE20",
            "VALE21"
        ]
    }
    const counponRepository: ICouponRepository = new CouponRepository();
    const placeOrder = new PlaceOrder(counponRepository);
    const output = placeOrder.execute(input);
    expect(output.total).toBe(354);   
});
