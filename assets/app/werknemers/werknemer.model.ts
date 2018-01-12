export class Werknemer{
    naam: string;
    voornaam: string;
    telefoon: string;
    id?: string;


    constructor(naam: string, voornaam: string, telefoon: string, id?: string){
        this.naam = naam;
        this.voornaam = voornaam;
        this.telefoon = telefoon;
        this.id = id;
    }
}