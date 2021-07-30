export default class PlaceOrderInput {
    public cpf: string;
    public items: { description : string, price: number, quantity: number}[];
    public coupons?: string[];
}