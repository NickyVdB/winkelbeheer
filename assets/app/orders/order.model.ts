export class Order{
    naam: string;
    datum: string;
    status: string;
    totaalprijs: number;
    leverancier: string;
    verantwoordelijke: string;
    id?: string;


    constructor(naam: string, datum: string, status: string,totaalprijs: number, leverancier: string,verantwoordelijke: string, id?: string){
        this.naam = naam;
        this.datum = datum;
        this.status = status;
        this.totaalprijs = totaalprijs;
        this.leverancier = leverancier;
        this.verantwoordelijke = verantwoordelijke;
        this.id = id;
    }
}