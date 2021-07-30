import Coupon from "./Coupon";
import CPF from "./CPF";
import Order from "./Order";
import OrderItem from "./OrderItem";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder{
       
    constructor(){}

    public execute(input:PlaceOrderInput): PlaceOrderOutput{
        const order:Order = new Order(this.createCpf(input), this.creatOrderItems(input), this.createCoupons(input));
        return {total: order.getTotalPrice()};
    }

    public createCpf({cpf}:PlaceOrderInput):CPF{
        return new CPF(cpf);
    }

    public creatOrderItems({items}:PlaceOrderInput): OrderItem[]{
        return items.map(i => new OrderItem(i.description, i.price, i.quantity));
    }

    public createCoupons({coupons}:PlaceOrderInput):Coupon[]{
        return coupons?.map(desciption => Coupon.options().find(c => c.code == desciption));
    }

    
}