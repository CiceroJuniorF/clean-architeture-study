import Coupon from "./Coupon";
import CPF from "./CPF";
import ICouponRepository from "./ICouponRepository";
import Order from "./Order";
import OrderItem from "./OrderItem";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder{
       
    constructor(private counponRepostiroy:ICouponRepository){}

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
        return coupons?.map(c => {
            const couponData = this.counponRepostiroy.find(c)
            return new Coupon(couponData.code, couponData.discount);
        });
    }

    
}