import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Werknemer} from "../werknemers/werknemer.model";
import {Product} from "./product.model";
import {Afdeling} from "../afdelingen/afdeling.model";
import {ProductService} from "./product.service";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";
import {Leverancier} from "../leveranciers/leverancier.model";

@Component({
    selector: 'app-productlijst',
    templateUrl: './productlijst.component.html'
})
export class ProductlijstComponent implements OnInit{
    producten: Product[];
    afdelingen: Afdeling[];
    leveranciers: Leverancier[];
    @Input() product: Product;
    productEdit : Product;
    @ViewChild('editModal') editModal: ModalDirective;


    constructor(private productService: ProductService) {}
    ngOnInit() {
        this.productService.getProducten().subscribe(
            (producten: Product[]) => {
                this.producten = producten;
            }
        );
        this.productService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
        this.productService.getLeveranciers().subscribe(
            (leveranciers: Leverancier[]) => {
                this.leveranciers = leveranciers.filter(x => x.status === "Actief");
            }
        );
    }

    onDelete(product: Product) {
        this.productService.deleteProduct(product)
            .subscribe(
                result => console.log(result)
            );
    }

    showEditModal(product: Product): void {
        this.productService.productIsEdit.subscribe(
            this.product = product
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.productEdit = new Product(form.value.naam,form.value.code, form.value.beschrijving,form.value.prijs, form.value.leverancier, form.value.afdeling, form.value.id);
        console.log(this.productEdit);

        this.productService.updateProduct(this.productEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );

        this.hideEditModal();
        this.ngOnInit();
    }

    filterOnAfdeling(form: NgForm) {
        this.productService.getProducten().subscribe(
            (producten: Product[]) => {
                this.producten = producten.filter(x => x.afdeling === form.value.afdelingFilter);
            }
        );
    }

    filterOnLeverancier(form: NgForm) {
        this.productService.getProducten().subscribe(
            (producten: Product[]) => {
                this.producten = producten.filter(x => x.leverancier === form.value.leverancierFilter);
            }
        );
    }

}