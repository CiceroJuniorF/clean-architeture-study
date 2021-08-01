import Coupon from "./Coupon";
import CPF from "./CPF";
import OrderItem from "./OrderItem";

export default class Order {

    constructor(private cpf:CPF, private items:OrderItem[], private distanceFactor:number, private coupons?: Coupon[]){
        this.validate();
    }

    private validate(){
        if(!this.hasItems()) throw "Items cannot be empty";
    }

    private hasItems(){
        return !!this.items && !!this.items.length;
    }

    private hasCoupons(){
        return !!this.coupons && !!this.coupons.length;
    }

    private getSum(){
        return this.items.reduce((accumulator, item) => {
            return accumulator 
                    + ( item.price + ( this.distanceFactor * item.dimesions.getVolume() * (item.dimesions.getDensity() / 100) ) ) * item.quantity
        }, 0);
    }

    private calculateTotalPrice(){
        let ammount = this.getSum()
        return ammount - ( ammount * this.getCouponsApplicable().reduce((accumulator, coupon) => { return accumulator + coupon.getDiscountPercent(); }, 0));
    }

    public getCouponsApplicable(){
        return this.coupons?.filter(c => c.isApplicable())
    }

    public getTotalPrice(): number {
        if(!this.hasCoupons()) return this.getSum();
        return Number(this.calculateTotalPrice().toFixed(2));
    }    

}