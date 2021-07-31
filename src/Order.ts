import Coupon from "./Coupon";
import CPF from "./CPF";
import OrderItem from "./OrderItem";

export default class Order {

    constructor(public cpf:CPF, public items:OrderItem[], public coupons?: Coupon[]){
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
            return accumulator + item.getTotal();
        }, 0);
    }

    private calculateClosingPrice(){
        let ammount = this.getSum()
        return ammount - ( ammount * this.coupons.reduce((accumulator, coupon) => { return accumulator + coupon.getDiscountPercent(); }, 0));
    }

    public getTotalPrice(): any {
        if(!this.hasCoupons()) return this.getSum();
        return this.calculateClosingPrice();
    }


    

}