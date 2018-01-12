export class Product{
    naam: string;
    code: string;
    beschrijving: string;
    prijs: number;
    leverancier: string;
    afdeling: string;
    id?: string;


    constructor(naam: string, code: string, beschrijving: string,prijs: number, leverancier: string,afdeling: string, id?: string){
        this.naam = naam;
        this.code = code;
        this.beschrijving = beschrijving;
        this.prijs = prijs;
        this.leverancier = leverancier;
        this.afdeling = afdeling;
        this.id = id;
    }
}