import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Leverancier} from "../leveranciers/leverancier.model";
import {Order} from "./order.model";
import {Werknemer} from "../werknemers/werknemer.model";


@Injectable()
export class OrderService {
    orders: Order[] = [];
    leveranciers: Leverancier[] = [];
    werknemers: Werknemer[] = [];
    orderIsEdit = new EventEmitter<Order>();

    constructor(private http: Http) {}

    addOrder(order: Order) {
        this.orders.push(order);
        const body = JSON.stringify(order);
        console.log(order);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/orders', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.toString()))
    };


    getOrders() {
        return this.http.get('http://localhost:3000/orders')
            .map((response: Response) => {
                const orders = response.json().obj;
                let transformedOrders: Order[] = [];
                for (let order of orders) {
                    transformedOrders.push(new Order(order.naam,order.datum,order.status,order.totaalprijs, order.leverancier, order.verantwoordelijke,order._id));
                }
                this.orders = transformedOrders;
                return transformedOrders;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getLeveranciers() {
        return this.http.get('http://localhost:3000/leveranciers')
            .map((response: Response) => {
                const leveranciers = response.json().obj;
                let transformedLeveranciers: Leverancier[] = [];
                for (let leverancier of leveranciers) {
                    transformedLeveranciers.push(new Leverancier(leverancier.naam, leverancier.locatie, leverancier.telefoon,leverancier.rekeningnr, leverancier.status, leverancier._id));
                }
                this.leveranciers = transformedLeveranciers;
                return transformedLeveranciers;
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


    updateOrder(order: Order){
        console.log("service");
        const body = JSON.stringify(order);
        console.log(order);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/orders/' + order.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}