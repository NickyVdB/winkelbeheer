import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FactuurService} from "./factuur.service";
import {Factuur} from "./factuur.model";
import {ModalDirective} from "ngx-bootstrap";
import {Klant} from "../klanten/klant.model";
import {FactuurItem} from "./factuuritem.model";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
    selector: 'app-factuurdetail',
    templateUrl: './factuurdetail.component.html'
})
export class FactuurdetailComponent implements OnInit {
    facturen: Factuur[];
    selectedFactuur: Factuur;
    selectedKlant: Klant;
    factuurItems: FactuurItem[];
    factuurItemsFilter: FactuurItem[];
    bedrag: number;
    korting: number;
    @ViewChild('factuurModal') factuurModal: ModalDirective;
    @ViewChild('pdfcontent') element: ElementRef;

    constructor(private factuurService: FactuurService) {
    }

    ngOnInit() {
        this.factuurService.getFacturen().subscribe(
            (facturen: Factuur[]) => {
                this.facturen = facturen;
                console.log(this.facturen);
            }
        );
    }

    openFacturen(): void {
        this.factuurModal.show();
    }

    hideFactuurModal(): void {
        this.factuurModal.hide();
    }

    selectFactuur(factuur: Factuur) {
        this.selectedFactuur = factuur;

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
                this.bedrag = 0;
                for (var i in this.factuurItemsFilter) {
                    this.bedrag += this.factuurItemsFilter[i].prijs;
                }
                this.korting = this.bedrag/100*this.selectedKlant.kortingsprocent;
                this.bedrag = this.bedrag - (this.bedrag/100*this.selectedKlant.kortingsprocent);

            }
        );

        this.hideFactuurModal();
        return this.selectedFactuur;
    }

    toPdf() {
        let pdf = new jsPDF('p', 'pt', 'a4');
        let options = {
            pagesplit: true
        };
        pdf.addHTML(this.element.nativeElement, 20, 20, options, () => {
            pdf.save("factuur.pdf");
        });
    }
}