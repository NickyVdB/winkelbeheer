import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ModalDirective} from "ngx-bootstrap";
import {Klant} from "../klanten/klant.model";
import {FactuurService} from "./factuur.service";
import {Factuur} from "./factuur.model";
import {FactuurItem} from "./factuuritem.model";

@Component({
    selector: 'app-factuurnieuw',
    templateUrl: './factuurnieuw.component.html'
})
export class FactuurnieuwComponent implements OnInit{
    klanten: Klant[];
    selectedklant: Klant;
    factuurItems: FactuurItem[];
    factuurItemsFilter: FactuurItem[];
    factuurItem: FactuurItem;
    factuurItemEdit: FactuurItem;
    facturen: Factuur[];
    factuurId: number;
    @ViewChild('klantenModal') klantenModal: ModalDirective;
    @ViewChild('editModal') editModal: ModalDirective;

    constructor(private factuurService: FactuurService) {}
    ngOnInit() {
        this.factuurService.getFacturen().subscribe(
            (facturen: Factuur[]) => {
                this.facturen = facturen;
                if (this.facturen.length == 0) {
                    this.factuurId = 0;
                } else {
                    this.factuurId = this.facturen.length;
                }

                console.log(this.facturen);
                console.log(this.factuurId);

            }
        );


        this.factuurService.getKlanten().subscribe(
            (klanten: Klant[]) => {
                this.klanten = klanten;
                console.log(this.klanten);
            }
        );

        this.selectedklant = this.selectedklant;

        this.factuurService.getFactuurItems().subscribe(
            (factuurItems: FactuurItem[]) => {
                this.factuurItems = factuurItems;
                this.factuurItemsFilter = this.factuurItems.filter(factuur => factuur.factuurid === this.factuurId);
                console.log(this.factuurItems);
            }
        );

    }

    openKlanten(): void {
        this.klantenModal.show();
    }

    hideKlantModal(): void {
        this.klantenModal.hide();
    }

    showEditModal(factuurItem: FactuurItem): void {
        this.factuurService.factuuritemIsEdit.subscribe(
            this.factuurItem = factuurItem
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    selectKlant(klant: Klant) {
        this.selectedklant = klant;
        this.hideKlantModal();
        return this.selectedklant;

    }

    saveFactuur(form: NgForm) {
        const klantnaam = this.selectedklant.naam + " " + this.selectedklant.voornaam;
        const factuur = new Factuur(klantnaam, this.selectedklant.id, "Openstaand" , this.factuurId);
        console.log(factuur);
        this.factuurService.addFactuur(factuur).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
        this.selectedklant = null;
        this.factuurId = this.factuurId + 1;
        this.ngOnInit();
    }

    saveProduct(form: NgForm) {
        const factuurItem = new FactuurItem(this.factuurId, form.value.prijs, form.value.beschrijving);
        console.log(factuurItem);
        this.factuurService.addFactuurItem(factuurItem).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();

        this.factuurService.getFactuurItems().subscribe(
            (factuurItems: FactuurItem[]) => {
                this.factuurItems = factuurItems;
                this.factuurItemsFilter = this.factuurItems.filter(factuur => factuur.factuurid === this.factuurId);
                console.log(this.factuurItems);
            }
        );
        this.ngOnInit();
    }

    updateProduct(form: NgForm) {
        this.factuurItemEdit = new FactuurItem(form.value.factuurid, form.value.prijsItem, form.value.beschrijvingItem, form.value.id);
        console.log(this.factuurItemEdit);
        this.factuurService.updateFactuurItem(this.factuurItemEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.factuurService.getFactuurItems().subscribe(
            (factuurItems: FactuurItem[]) => {
                this.factuurItems = factuurItems;
                this.factuurItemsFilter = this.factuurItems.filter(factuur => factuur.factuurid === this.factuurId);
                console.log(this.factuurItems);
            }
        );
        this.hideEditModal();
        this.ngOnInit();
    }

    onDelete(factuurItem: FactuurItem) {
        this.factuurService.deleteFactuurItem(factuurItem)
            .subscribe(
                result => console.log(result)
            );

        this.factuurService.getFactuurItems().subscribe(
            (factuurItems: FactuurItem[]) => {
                this.factuurItems = factuurItems;
                this.factuurItemsFilter = this.factuurItems.filter(factuur => factuur.factuurid === this.factuurId);
                console.log(this.factuurItems);
            }
        );
    }


}
