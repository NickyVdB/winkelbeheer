import {Werknemer} from "./werknemer.model";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class WerknemerService {
    werknemers: Werknemer[] = [];
    werknemerIsEdit = new EventEmitter<Werknemer>();

    constructor(private http: Http) {}

    addWerknemer(werknemer: Werknemer) {
        this.werknemers.push(werknemer);
        const body = JSON.stringify(werknemer);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/werknemers', body, {headers: headers})
            .map((response: Response) => response.json())
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

    deleteWerknemer(werknemer: Werknemer){
        this.werknemers.splice(this.werknemers.indexOf(werknemer),1);
        return this.http.delete('http://localhost:3000/werknemers/' + werknemer.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }


    updateWerknemer(werknemer: Werknemer){
        console.log("service");
        const body = JSON.stringify(werknemer);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/werknemers/' + werknemer.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }


}