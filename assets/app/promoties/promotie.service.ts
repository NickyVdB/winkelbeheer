import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Promotie} from "./promotie.model";
import {Afdeling} from "../afdelingen/afdeling.model";


@Injectable()
export class PromotieService {
    promoties: Promotie[] = [];
    afdelingen: Afdeling[] = [];
    promotieIsEdit = new EventEmitter<Promotie>();

    constructor(private http: Http) {}

    addPromotie(promotie: Promotie) {
        this.promoties.push(promotie);
        const body = JSON.stringify(promotie);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/promoties', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };


    getPromoties() {
        return this.http.get('http://localhost:3000/promoties')
            .map((response: Response) => {
                const promoties = response.json().obj;
                let transformedPromoties: Promotie[] = [];
                for (let promotie of promoties) {
                    transformedPromoties.push(new Promotie(promotie.naam,promotie.beschrijving,promotie.kortingsprocent, promotie.afdeling, promotie.begindatum, promotie.einddatum,promotie._id));
                }
                this.promoties = transformedPromoties;
                return transformedPromoties;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getAfdelingen() {
        return this.http.get('http://localhost:3000/afdelingen')
            .map((response: Response) => {
                const afdelingen = response.json().obj;
                let transformedAfdelingen: Afdeling[] = [];
                for (let afdeling of afdelingen) {
                    transformedAfdelingen.push(new Afdeling(afdeling.naam, afdeling.beschrijving, afdeling.verantwoordelijke, afdeling._id));
                }
                this.afdelingen = transformedAfdelingen;
                return transformedAfdelingen;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    deletePromotie(promotie: Promotie){
        this.promoties.splice(this.promoties.indexOf(promotie),1);
        return this.http.delete('http://localhost:3000/promoties/' + promotie.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }


    updatePromotie(promotie: Promotie){
        console.log("service");
        const body = JSON.stringify(promotie);
        console.log(promotie);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/promoties/' + promotie.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}