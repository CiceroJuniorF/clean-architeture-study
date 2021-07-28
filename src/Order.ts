import CPF from "./CPF";
import OrderItem from "./OrderItem";

export default class Order {
    
    constructor(public cpf:CPF, public items:OrderItem[]){
        this.validate();
    }

    private validate(){
        if(!this.hasItems()) throw "Items not be empty";
    }

    private hasItems(){
        return !!this.items && !!this.items.length
    }

    public getTotal(){
        return this.items.reduce((accumulator, item) => {
            return accumulator + item.getTotal();
        }, 0);
    }

}