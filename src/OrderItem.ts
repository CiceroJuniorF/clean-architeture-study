import OrderItemDimensions from "./OrderItemDimensions";

export default class OrderItem {
    constructor(private description: string, public price: number, public quantity: number, public dimesions: OrderItemDimensions) {
        this.validate();
    }

    private validate() {
        if (!this.hasDescription()) throw "Invalid description";
        if (!this.isPriceGreaterThanZero()) throw "Invalid price";
        if (!this.isQuantityGreaterThanZero()) throw "Invalid quantity";
        if (!this.hasDimensions()) throw "Invalid dimensions";
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

    private hasDimensions() {
        return !!this.dimesions;
    }

}