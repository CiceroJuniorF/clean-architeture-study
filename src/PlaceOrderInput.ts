export default class PlaceOrderInput {
    public cpf: string;
    public items: { description : string, price: number, quantity: number, width:number, height:number, depth:number, weight:number}[];
    public coupons?: string[];
    public cepSender:string; 
    public cepRecipient:string;
}