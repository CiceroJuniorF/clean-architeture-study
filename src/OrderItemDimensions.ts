const CUBICMETER = 1000000;
export default class OrderItemDimensions{
    
    constructor(private width:number, private height:number, private depth:number, private weight:number){}

    public getVolume(): any {
        return (this.width * this.height * this.depth) / CUBICMETER;        
    }

    public getDensity(): any {
        return Math.trunc(this.weight / this.getVolume());
    }

}