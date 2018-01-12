import {Afdeling} from "../afdelingen/afdeling.model";

export class Promotie{
    naam: string;
    beschrijving: string;
    kortingsprocent: number;
    afdeling: string;
    begindatum: string;
    einddatum: string;
    id?: string;


    constructor(naam: string, beschrijving: string,kortingsprocent: number,afdeling: string, begindatum: string,einddatum: string, id?: string){
        this.naam = naam;
        this.beschrijving = beschrijving;
        this.afdeling = afdeling;
        this.kortingsprocent = kortingsprocent;
        this.begindatum = begindatum;
        this.einddatum = einddatum;
        this.id = id;
    }
}