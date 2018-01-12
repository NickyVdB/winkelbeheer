import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Factuur} from "./factuur.model";
import {Klant} from "../klanten/klant.model";
import {FactuurItem} from "./factuuritem.model";
import {he} from "ngx-bootstrap";


@Injectable()
export class FactuurService {
    facturen: Factuur[] = [];
    klanten: Klant[]= [];
    factuuritems: FactuurItem[] =[];
    factuurIsEdit = new EventEmitter<Factuur>();
    factuuritemIsEdit = new EventEmitter<Factuur>();

    constructor(private http: Http) {}

    addFactuur(factuur: Factuur) {
        this.facturen.push(factuur);
        const body = JSON.stringify(factuur);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/facturen', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    addFactuurItem(factuurItem: FactuurItem) {
        console.log(factuurItem);
        this.factuuritems.push(factuurItem);
        const body = JSON.stringify(factuurItem);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/factuuritems', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    getFacturen() {
        return this.http.get('http://localhost:3000/facturen')
            .map((response: Response) => {
                const facturen = response.json().obj;
                let transformedFacturen: Factuur[] = [];
                for (let factuur of facturen) {
                    transformedFacturen.push(new Factuur(factuur.klantnaam, factuur.klantid, factuur.status, factuur.factuurid, factuur._id));
                }
                this.facturen = transformedFacturen;
                return transformedFacturen;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getFactuurItems() {
        return this.http.get('http://localhost:3000/factuuritems')
            .map((response: Response) => {
                const factuuritems = response.json().obj;
                let transformedFactuurItems: FactuurItem[] = [];
                for (let factuuritem of factuuritems) {
                    transformedFactuurItems.push(new FactuurItem(factuuritem.factuurid, factuuritem.prijs,factuuritem.beschrijving, factuuritem._id));
                }
                this.factuuritems = transformedFactuurItems;
                return transformedFactuurItems;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getKlanten() {
        return this.http.get('http://localhost:3000/klanten')
            .map((response: Response) => {
                const klanten = response.json().obj;
                let transformedKlanten: Klant[] = [];
                for (let klant of klanten) {
                    transformedKlanten.push(new Klant(klant.naam, klant.voornaam, klant.kortingsprocent, klant.telefoon,klant.email ,klant._id));
                }
                this.klanten = transformedKlanten;
                return transformedKlanten;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getKlant(id) {
        return this.http.get('http://localhost:3000/klanten/' + id)
            .map((response: Response) => {
                const klant = response.json().obj;
                return klant;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    updateFactuur(factuur: Factuur){
        console.log("service");
        const body = JSON.stringify(factuur);
        console.log(factuur);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/facturen/' + factuur.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    updateFactuurItem(factuurItem: FactuurItem){
        console.log(factuurItem);
        const body = JSON.stringify(factuurItem);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/factuuritems/' + factuurItem.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    deleteFactuurItem(factuurItem: FactuurItem){
        this.factuuritems.splice(this.factuuritems.indexOf(factuurItem),1);
        return this.http.delete('http://localhost:3000/factuuritems/' + factuurItem.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }


}