export default class OrderItem {
    constructor(public description: string, public price: number, public quantity: number) {
        this.validate();
    }

    private validate() {
        if (!this.hasDescription()) throw "Invalid description";
        if (!this.isPriceGreaterThanZero()) throw "Invalid price";
        if (!this.isQuantityGreaterThanZero()) throw "Invalid quantity";
    }

    private hasDescription() {
        return !!this.description;
    }

    private isPriceGreaterThanZero() {
        return this.price > 0
    }

    private isQuantityGreaterThanZero() {
        return this.quantity > 0
    }

    public getTotal(){
        return this.quantity * this.price;
    }

}