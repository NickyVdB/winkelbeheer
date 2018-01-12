import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Leverancier} from "../leveranciers/leverancier.model";
import {Product} from "./product.model";
import {Afdeling} from "../afdelingen/afdeling.model";


@Injectable()
export class ProductService {
    producten: Product[] = [];
    leveranciers: Leverancier[] = [];
    afdelingen: Afdeling[] = [];
    productIsEdit = new EventEmitter<Product>();

    constructor(private http: Http) {}

    addProduct(product: Product) {
        this.producten.push(product);
        const body = JSON.stringify(product);
        console.log(product);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/producten', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };


    getProducten() {
        return this.http.get('http://localhost:3000/producten')
            .map((response: Response) => {
                const producten = response.json().obj;
                let transformedProducten: Product[] = [];
                for (let product of producten) {
                    transformedProducten.push(new Product(product.naam,product.code,product.beschrijving,product.prijs, product.leverancier, product.afdeling,product._id));
                }
                this.producten = transformedProducten;
                return transformedProducten;
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

    deleteProduct(product: Product){
        this.producten.splice(this.producten.indexOf(product),1);
        return this.http.delete('http://localhost:3000/producten/' + product.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }

    updateProduct(product: Product){
        console.log("service");
        const body = JSON.stringify(product);
        console.log(product);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/producten/' + product.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}