import {Leverancier} from "./leverancier.model";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class LeverancierService {
    leveranciers: Leverancier[] = [];
    leverancierIsEdit = new EventEmitter<Leverancier>();

    constructor(private http: Http) {}

    addLeverancier(leverancier: Leverancier) {
        this.leveranciers.push(leverancier);
        const body = JSON.stringify(leverancier);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/leveranciers', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };


    getLeveranciers() {
        return this.http.get('http://localhost:3000/leveranciers')
            .map((response: Response) => {
                const leveranciers = response.json().obj;
                let transformedLeveranciers: Leverancier[] = [];
                for (let leverancier of leveranciers) {
                    transformedLeveranciers.push(new Leverancier(leverancier.naam, leverancier.telefoon, leverancier.locatie, leverancier.rekeningnr, leverancier.status ,leverancier._id));
                }
                this.leveranciers = transformedLeveranciers;
                return transformedLeveranciers;
            })
            .catch((error:Response) => Observable.throw(error))
    };


    deleteLeverancier(leverancier: Leverancier){
        this.leveranciers.splice(this.leveranciers.indexOf(leverancier),1);
        return this.http.delete('http://localhost:3000/leveranciers/' + leverancier.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }

    updateLeverancier(leverancier: Leverancier){
        console.log("service");
        const body = JSON.stringify(leverancier);
        console.log(leverancier);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/leveranciers/' + leverancier.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}