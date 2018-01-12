export class Afdeling{
    naam: string;
    beschrijving: string;
    verantwoordelijke: string;
    id?: string;


    constructor(naam: string, beschrijving: string,verantwoordelijke: string, id?: string){
        this.naam = naam;
        this.beschrijving = beschrijving;
        this.verantwoordelijke = verantwoordelijke;
        this.id = id;
    }
}