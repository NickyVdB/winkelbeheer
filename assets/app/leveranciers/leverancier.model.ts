export class Leverancier{
    naam: string;
    telefoon: string;
    locatie: string;
    rekeningnr: string;
    status: string;
    id?: string;


    constructor(naam: string, telefoon: string, locatie: string, rekeningnr: string, status: string, id?: string){
        this.naam = naam;
        this.telefoon = telefoon;
        this.locatie = locatie;
        this.rekeningnr = rekeningnr;
        this.status = status;
        this.id = id;
    }
}