import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Klant} from "./klant.model";
import {KlantService} from "./klant.service";
import {NgForm} from "@angular/forms";
import {ModalDirective} from "ngx-bootstrap";

@Component({
    selector: 'app-klantlijst',
    templateUrl: './klantlijst.component.html'
})
export class KlantlijstComponent implements OnInit{
    klanten: Klant[];
    @Input() klant: Klant;
    klantEdit : Klant;
    @ViewChild('editModal') editModal: ModalDirective;

    constructor(private klantService: KlantService) {}
    ngOnInit() {
        this.klantService.getKlanten().subscribe(
            (klanten: Klant[]) => {
                this.klanten = klanten;
            }
        );
    }

    onDelete(klant: Klant) {
        this.klantService.deleteKlant(klant)
            .subscribe(
                result => console.log(result)
            );
    }

    showEditModal(klant: Klant): void {
        this.klantService.klantIsEdit.subscribe(
            this.klant = klant
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.klantEdit = new Klant(form.value.naam, form.value.voornaam, form.value.korting,form.value.telefoon, form.value.email ,form.value.id);
        console.log(this.klantEdit);

        this.klantService.updateKlant(this.klantEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );

        this.hideEditModal();
        this.ngOnInit();
    }

}
