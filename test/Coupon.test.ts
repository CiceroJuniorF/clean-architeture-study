import Coupon from "../src/Coupon";

const THREE_DAYS = 3

test("Deve lançar exceção 'Invalid Discount' quando discount for 0", () =>{
      expect(()=>{const coupon = new Coupon("DESCONTOSIM", 0)}).toThrow('Invalid Discount')
});

test("Deve retornar o discount na de 10% em base 100", () =>{
    const coupon = new Coupon("DESCONTOSIM", 10);
    expect(coupon.getDiscountPercent()).toBe(0.10);
});

test("Deve retornar que o coupon não é aplicável pois está vencido", () =>{
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - THREE_DAYS);
    const coupon = new Coupon("DESCONTOSIM", 10, expirationDate);   
    expect(coupon.isApplicable()).toBe(false);
});

test("Deve retornar que o coupon é aplicável pois a data de expiração é maior que data atual ", () =>{
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + THREE_DAYS);
    const coupon = new Coupon("DESCONTOSIM", 10, expirationDate);   
    expect(coupon.isApplicable()).toBe(true);
});

test("O cupom deve ser aplicável pois é um cupom que nunca vence", () =>{
    const coupon = new Coupon("DESCONTOSIM", 10);   
    expect(coupon.isApplicable()).toBe(true);
});
