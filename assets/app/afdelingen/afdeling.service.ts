import {Afdeling} from "./afdeling.model";
import {Werknemer} from "../werknemers/werknemer.model";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class AfdelingService {
    afdelingen: Afdeling[] = [];
    werknemers: Werknemer[] = [];
    afdelingIsEdit = new EventEmitter<Afdeling>();

    constructor(private http: Http) {}

    addAfdeling(afdeling: Afdeling) {
        this.afdelingen.push(afdeling);
        const body = JSON.stringify(afdeling);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/afdelingen', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };


    getAfdelingen() {
        return this.http.get('http://localhost:3000/afdelingen')
            .map((response: Response) => {
                const afdelingen = response.json().obj;
                let transformedAfdelingen: Afdeling[] = [];
                for (let afdeling of afdelingen) {
                    transformedAfdelingen.push(new Afdeling(afdeling.naam,afdeling.beschrijving,afdeling.verantwoordelijke, afdeling._id));
                }
                this.afdelingen = transformedAfdelingen;
                return transformedAfdelingen;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getWerknemers() {
        return this.http.get('http://localhost:3000/werknemers')
            .map((response: Response) => {
                const werknemers = response.json().obj;
                let transformedWerknemers: Werknemer[] = [];
                for (let werknemer of werknemers) {
                    transformedWerknemers.push(new Werknemer(werknemer.naam, werknemer.voornaam, werknemer.telefoon, werknemer._id));
                }
                this.werknemers = transformedWerknemers;
                return transformedWerknemers;
            })
            .catch((error:Response) => Observable.throw(error))
    };


    deleteAfdeling(afdeling: Afdeling){
        this.afdelingen.splice(this.afdelingen.indexOf(afdeling),1);
        return this.http.delete('http://localhost:3000/afdelingen/' + afdeling.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }

    updateAfdeling(afdeling: Afdeling){
        console.log("service");
        const body = JSON.stringify(afdeling);
        console.log(afdeling);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/afdelingen/' + afdeling.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

}