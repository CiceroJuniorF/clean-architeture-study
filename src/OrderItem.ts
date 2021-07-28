export default class OrderItem {
    constructor(public description: string, public price: number, public quantity: number) {
        this.validate();
    }

    private validate() {
        if (!this.hasDescription()) throw "Invalid description";
        if (!this.isPriceMoreZero()) throw "Invalid price";
        if (!this.isQuantityMoreZero()) throw "Invalid quantity";
    }

    private hasDescription() {
        return !!this.description;
    }

    private isPriceMoreZero() {
        return this.price > 0
    }

    private isQuantityMoreZero() {
        return this.quantity > 0
    }

    public getTotal(){
        return this.quantity * this.price;
    }

}