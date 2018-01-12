export class FactuurItem {
    factuurid: number;
    prijs: number;
    beschrijving: string;
    id?: string;


    constructor(factuurid: number, prijs: number, beschrijving: string, id?: string){
        this.factuurid = factuurid;
        this.prijs = prijs;
        this.beschrijving = beschrijving;
        this.id = id;
    }
}