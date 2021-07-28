import Coupon from "../src/Coupon";

test("Deve lançar exceção 'Invalid Discount' quando discount for 0", () =>{
      expect(()=>{const coupon = new Coupon("DESCONTOSIM", 0)}).toThrow('Invalid Discount')
});

test("Deve retornar o discount na em base 100", () =>{
    const coupon = new Coupon("DESCONTOSIM", 10);
    expect(coupon.getDiscountPercent()).toBe(0.10);
});