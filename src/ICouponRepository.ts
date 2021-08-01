export default interface ICouponRepository {
    find(code:string): { code: string, discount: number, expirationDate: Date };
}