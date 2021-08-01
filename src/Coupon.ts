const B100 = 100;
export default class Coupon{
    
    constructor(public code:string, private discount:number, private expirateDate?:Date){
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

    public isApplicable(): boolean {
        return !this.hasExpiredDate() || !this.isExpired()
    }

    private hasExpiredDate(): boolean {
        return !!this.expirateDate;
    }

    private isExpired(): boolean {       
        return this.hasExpiredDate() && this.expirateDate.getTime() < (new Date()).getTime()
    }

}