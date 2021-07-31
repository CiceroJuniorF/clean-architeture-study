import ICouponRepository from "./ICouponRepository";

export default class CouponRepository implements ICouponRepository {
    constructor(){}

    public static options(){
        return [
            { code: "VALE20", discount:20 },
            { code: "VALE21", discount: 21 }
        ];
    }

    public find(code:string){
        return CouponRepository.options().find(e => e.code == code);
    }

}