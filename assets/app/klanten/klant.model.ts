export class Klant{
    naam: string;
    kortingsprocent: number;
    telefoon: string;
    email: string;
    voornaam?: string;
    id?: string;


    constructor(naam: string, voornaam: string,kortingprocent: number, telefoon: string,email: string, id?: string){
        this.naam = naam;
        this.voornaam = voornaam;
        this.kortingsprocent = kortingprocent;
        this.telefoon = telefoon;
        this.email = email;
        this.id = id;
    }
}