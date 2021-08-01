import DistaceFactorAdapter from "../src/DistanceFactorAdapter";
import IDistaceFactorAdapter from "../src/IDistanceFactorAdapter";
import CouponRepository from "../src/CouponRepository";
import ICouponRepository from "../src/ICouponRepository";
import PlaceOrder from "../src/PlaceOrder";
import PlaceOrderInput from "../src/PlaceOrderInput";

test("Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)", ()=> {
    const width = 20;
    const height = 15;
    const depth = 10;
    const weight = 1;
    const input:PlaceOrderInput = {
        cpf: "487.501.680-88",
        items: [
            { description : "Bola", price: 100, quantity: 1, width: 20, height: 15, depth: 10, weight: 1},
            { description : "Tênis", price: 100, quantity: 2, width: 20, height: 15, depth: 10, weight: 1},
            { description : "Meião", price: 200, quantity: 3, width: 20, height: 15, depth: 10, weight: 1},
        ],
        cepSender:"68010-590", 
        cepRecipient:"53402-540"
    }
    const counponRepository: ICouponRepository = new CouponRepository();
    const distaceFactorAdapter:IDistaceFactorAdapter = new DistaceFactorAdapter();
    const placeOrder = new PlaceOrder(counponRepository, distaceFactorAdapter);
    const output = placeOrder.execute(input);
    expect(output.total).toBe(959.94);   
});

test("Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)", ()=> {
    const input:PlaceOrderInput = {
        cpf: "487.501.680-88",
        items: [
            { description : "Bola", price: 100, quantity: 1, width: 20, height: 15, depth: 10, weight: 1},
            { description : "Tênis", price: 100, quantity: 2, width: 20, height: 15, depth: 10, weight: 1},
            { description : "Meião", price: 200, quantity: 3, width: 20, height: 15, depth: 10, weight: 1},
        ],
        cepSender:"68010-590", 
        cepRecipient:"53402-540",
        coupons: [
            "VALE20",
            "VALE21"
        ]
    }
    const distaceFactorAdapter:IDistaceFactorAdapter = new DistaceFactorAdapter();
    const counponRepository: ICouponRepository = new CouponRepository();
    const placeOrder = new PlaceOrder(counponRepository, distaceFactorAdapter);
    const output = placeOrder.execute(input);
    expect(output.total).toBe(566.36);   
});
