import {Klant} from "./klant.model";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class KlantService {
    klanten: Klant[] = [];
    klantIsEdit = new EventEmitter<Klant>();

    constructor(private http: Http) {}

    addKlant(klant: Klant) {
        this.klanten.push(klant);
        const body = JSON.stringify(klant);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/klanten', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };


    getKlanten() {
        return this.http.get('http://localhost:3000/klanten')
            .map((response: Response) => {
                const klanten = response.json().obj;
                let transformedKlanten: Klant[] = [];
                for (let klant of klanten) {
                    transformedKlanten.push(new Klant(klant.naam, klant.voornaam, klant.kortingsprocent, klant.telefoon, klant.email, klant._id));
                }
                this.klanten = transformedKlanten;
                return transformedKlanten;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    deleteKlant(klant: Klant){
        this.klanten.splice(this.klanten.indexOf(klant),1);
        return this.http.delete('http://localhost:3000/klanten/' + klant.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }

    updateKlant(klant: Klant){
        console.log("service");
        const body = JSON.stringify(klant);
        console.log(klant);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/klanten/' + klant.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}