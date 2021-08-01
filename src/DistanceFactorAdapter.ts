import IDistaceFactorAdapter from "./IDistanceFactorAdapter";

export default class DistaceFactorAdapter implements IDistaceFactorAdapter {
    constructor(){}

    public getFactor(cepSender:string, cepRecipient:string){
        return 1000;
    }
}