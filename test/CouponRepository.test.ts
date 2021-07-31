import CouponRepository from "../src/CouponRepository";

test("Deveria retornar os cupons por o código", ()=>{
    const CODECOUPON = "VALE20"
    const repository = new CouponRepository();
    const coupon = repository.find(CODECOUPON);
    expect(coupon.discount).toBe(20);    
});