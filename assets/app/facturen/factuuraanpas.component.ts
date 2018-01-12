import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FactuurService} from "./factuur.service";
import {Klant} from "../klanten/klant.model";
import {FactuurItem} from "./factuuritem.model";
import {Factuur} from "./factuur.model";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-factuuraanpas',
    templateUrl: './factuuraanpas.component.html'
})
export class FactuuraanpasComponent implements OnInit {
    klanten: Klant[];
    selectedKlant: Klant;
    selectedFactuur: Factuur;
    factuurItems: FactuurItem[];
    factuurItemsFilter: FactuurItem[];
    factuurItem: FactuurItem;
    factuurItemEdit: FactuurItem;
    facturen: Factuur[];
    factuurId: number;
    @ViewChild('factuurModal') factuurModal: ModalDirective;
    @ViewChild('editModal') editModal: ModalDirective;
    constructor(private factuurService: FactuurService) {
    }

    ngOnInit() {
        this.factuurService.getFacturen().subscribe(
            (facturen: Factuur[]) => {
                this.facturen = facturen.filter(x => x.status === "Openstaand");
            }
        );


        this.factuurService.getKlanten().subscribe(
            (klanten: Klant[]) => {
                this.klanten = klanten;
                console.log(this.klanten);
            }
        );

        this.factuurService.getFactuurItems().subscribe(
            (factuurItems: FactuurItem[]) => {
                this.factuurItems = factuurItems;
                this.factuurItemsFilter = this.factuurItems.filter(factuur => factuur.factuurid === this.factuurId);
                console.log(this.factuurItems);
            }
        );

        this.selectedKlant = this.selectedKlant;

    }

    openFacturen(): void {
        this.factuurModal.show();
    }

    hideFactuurModal(): void {
        this.factuurModal.hide();
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

    selectFactuur(factuur: Factuur) {
        this.selectedFactuur = factuur;

        this.factuurId = factuur.factuurid;

        this.factuurService.getKlant(factuur.klantid).subscribe(
            (klant: Klant) => {
                this.selectedKlant = klant;
                console.log(this.selectedKlant);
            }
        );

        this.factuurService.getFactuurItems().subscribe(
            (factuurItems: FactuurItem[]) => {
                this.factuurItems = factuurItems;
                this.factuurItemsFilter = this.factuurItems.filter(item => item.factuurid === this.selectedFactuur.factuurid);
                console.log(this.factuurItems);
            }
        );

        this.hideFactuurModal();
        return this.selectedFactuur;

    }

    saveProduct(form: NgForm) {
        const factuurItem = new FactuurItem(this.factuurId, form.value.prijs, form.value.beschrijving);
        console.log(factuurItem);
        this.factuurService.addFactuurItem(factuurItem).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
        this.ngOnInit();
    }

    updateProduct(form: NgForm) {
        this.factuurItemEdit = new FactuurItem(this.factuurId, form.value.prijsItem, form.value.beschrijvingItem, form.value.id);
        console.log(this.factuurItemEdit);
        this.factuurService.updateFactuurItem(this.factuurItemEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
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
                this.factuurItemsFilter = this.factuurItems.filter(item => item.factuurid === this.selectedFactuur.factuurid);
                console.log(this.factuurItems);
            }
        );
    }

}