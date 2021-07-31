const B100 = 100;
export default class Coupon{
    
    constructor(public code:string, public discount:number){
        this.validate();
    }

    private validate(){
        if(!this.isDiscountValid()) throw "Invalid Discount"
    }

    private isDiscountValid(){
        return !!this.discount && this.discount > 0;
    }

    public getDiscountPercent(): number {
        return (this.discount / B100);
    }

}