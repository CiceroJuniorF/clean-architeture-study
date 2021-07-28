export default class CPF {

    private readonly FACTOR_DIGIT_1 = 10;
    private readonly FACTOR_DIGIT_2 = 11;
    private readonly MAX_DIGITS_1 = 9;
    private readonly MAX_DIGITS_2 = 10;

    constructor(private cpf: string) {
        this.validate()
    }

    private validate(){
        if(!this.isValid()) throw "Invalid CPF"
    }

    private isValid():boolean {
        if (!this.hasValue()) return false;
        const cpfClean = this.extractDigits();
        if (this.isInvalidLength(cpfClean)) return false;
        if (this.isBlocked(cpfClean)) return false;
        const digit1 = this.calculateDigit(cpfClean, this.FACTOR_DIGIT_1, this.MAX_DIGITS_1);
        const digit2 = this.calculateDigit(cpfClean, this.FACTOR_DIGIT_2, this.MAX_DIGITS_2);
        let calculatedCheckDigit = `${digit1}${digit2}`;
        return this.getCheckDigit(cpfClean) == calculatedCheckDigit;
    }

    private hasValue(){
        return !!this.cpf;
    }

    private extractDigits() {
        return this.cpf.replace(/\D/g, "");
    }

    private isInvalidLength(cpfClean:string) {
        return cpfClean.length !== 11;
    }

    private isBlocked(cpfClean:string) {
        const [digit1] = cpfClean;
        return cpfClean.split("").every(digit => digit === digit1);
    }

    private calculateDigit(cpfClean, factor, max) {
        let total = 0;
        for (const digit of this.toDigitArray(cpfClean).slice(0, max)) {
            total += digit * factor--;
        }
        return (total % 11 < 2) ? 0 : (11 - total % 11);
    }

    private toDigitArray(cpfClean:string) {
        return [...cpfClean].map(digit => parseInt(digit));
    }

    private getCheckDigit(cpfClean:string) {
        return cpfClean.slice(9);
    }

    public getValue() {
        return this.cpf;
    }

}