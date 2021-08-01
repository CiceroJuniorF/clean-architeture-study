import Coupon from "./Coupon";
import CPF from "./CPF";
import ICouponRepository from "./ICouponRepository";
import IDistaceFactorAdapter from "./IDistanceFactorAdapter";
import Order from "./Order";
import OrderItem from "./OrderItem";
import OrderItemDimensions from "./OrderItemDimensions";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder{
       
    constructor(private counponRepostiroy:ICouponRepository, private distaceFactorAdapter:IDistaceFactorAdapter){}

    public execute(input:PlaceOrderInput): PlaceOrderOutput{
        const order:Order = new Order(this.createCpf(input), this.createOrderItems(input), 
        this.getDistanceFactor(input), this.createCoupons(input));
        return {total: order.getTotalPrice()};
    }

    private createCpf({cpf}:PlaceOrderInput):CPF{
        return new CPF(cpf);
    }

    private createOrderItems({items}:PlaceOrderInput): OrderItem[]{
        return items.map(i => new OrderItem(i.description, i.price, i.quantity, new OrderItemDimensions(i.width, i.height, i.depth, i.weight)));
    }

    private createCoupons({coupons}:PlaceOrderInput):Coupon[]{
        return coupons?.map(c => {
            const couponData = this.counponRepostiroy.find(c)
            if(!couponData) throw `Counpon ${c} does not exists`;
            return new Coupon(couponData.code, couponData.discount, couponData.expirationDate);
        });
    }

    private getDistanceFactor({cepRecipient, cepSender}:PlaceOrderInput):number{
        return this.distaceFactorAdapter.getFactor(cepSender, cepRecipient);
    }

    
}