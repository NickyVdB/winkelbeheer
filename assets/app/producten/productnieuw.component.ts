import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Afdeling} from "../afdelingen/afdeling.model";
import {ProductService} from "./product.service";
import {Leverancier} from "../leveranciers/leverancier.model";
import {Product} from "./product.model";


@Component({
    selector: 'app-productnieuw',
    templateUrl: './productnieuw.component.html'
})
export class ProductnieuwComponent implements OnInit{
    constructor(private productService: ProductService) {}
    producten: Product[];
    afdelingen:Afdeling[];
    leveranciers: Leverancier[];
    product: Product;

    onSubmit(form: NgForm) {
        const product = new Product(form.value.naam,form.value.code, form.value.beschrijving,form.value.prijs, form.value.leverancier, form.value.afdeling);
        this.productService.addProduct(product).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
    }
    ngOnInit(){
        this.productService.productIsEdit.subscribe(
            (product: Product) => this.product = product
        );
        this.productService.getLeveranciers().subscribe(
            (leveranciers: Leverancier[]) => {
                this.leveranciers = leveranciers.filter(x => x.status === "Actief");
            }
        );
        this.productService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
    }

}