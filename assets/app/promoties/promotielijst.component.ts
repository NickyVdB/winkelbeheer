import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Promotie} from "./promotie.model";
import {PromotieService} from "./promotie.service";
import {Werknemer} from "../werknemers/werknemer.model";
import {Afdeling} from "../afdelingen/afdeling.model";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-promotielijst',
    templateUrl: './promotielijst.component.html'
})
export class PromotielijstComponent implements OnInit{
    promoties: Promotie[];
    afdelingen: Afdeling[];
    @Input() promotie: Promotie;
    promotieEdit : Promotie;
    @ViewChild('editModal') editModal: ModalDirective;

    constructor(private promotieService: PromotieService) {}
    ngOnInit() {
        this.promotieService.getPromoties().subscribe(
            (promoties: Promotie[]) => {
                this.promoties = promoties;
            }
        );
        this.promotieService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
    }

    onDelete(promotie: Promotie) {
        this.promotieService.deletePromotie(promotie)
            .subscribe(
                result => console.log(result)
            );
    }

    showEditModal(promotie: Promotie): void {
        this.promotieService.promotieIsEdit.subscribe(
            this.promotie = promotie
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.promotieEdit = new Promotie(form.value.naam, form.value.beschrijving, form.value.kortingsprocent, form.value.afdeling,form.value.begindatum,form.value.einddatum, form.value.id);
        console.log(this.promotieEdit);

        this.promotieService.updatePromotie(this.promotieEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.promotieService.getPromoties().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
        this.hideEditModal();
        this.ngOnInit();
    }

    filterOnAfdeling(form: NgForm) {
        this.promotieService.getPromoties().subscribe(
            (promoties: Promotie[]) => {
                this.promoties = promoties.filter(x => x.afdeling === form.value.afdelingFilter);
            }
        );
    }
}