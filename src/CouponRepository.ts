import ICouponRepository from "./ICouponRepository";

const THREE_DAYS = 3;
const TWO_DAYS = 2;
const ONE_DAYS = 1;
export default class CouponRepository implements ICouponRepository {
    constructor() { }

    public static options() {

        const DATE_NOW_CALC = (days) => {
            const date = new Date();
            date.setDate(date.getDate() + days);
            return date
        }

        return [
            { code: "VALE20", discount: 20, expirationDate: DATE_NOW_CALC(TWO_DAYS) },
            { code: "VALE21", discount: 21, expirationDate: DATE_NOW_CALC(THREE_DAYS) },
            { code: "VALE22", discount: 21, expirationDate: DATE_NOW_CALC(-ONE_DAYS) }
        ];
    }

    public find(code: string): { code: string, discount: number, expirationDate: Date } {
        return CouponRepository.options().find(e => e.code == code);
    }



}