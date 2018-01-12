export class Factuur{
    klantnaam: string;
    klantid: string;
    status: string;
    factuurid: number;
    id?: string;


    constructor(klantnaam: string,klantid: string, status: string, factuurid: number, id?: string){
        this.klantnaam = klantnaam;
        this.klantid = klantid;
        this.status = status;
        this.factuurid = factuurid;
        this.id = id;
    }
}