import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Leverancier} from "./leverancier.model";
import {LeverancierService} from "./leverancier.service";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";
@Component({
    selector: 'app-leverancierlijst',
    templateUrl: './leverancierlijst.component.html'
})
export class LeverancierlijstComponent implements OnInit{
    leveranciers: Leverancier[];
    @Input() leverancier: Leverancier;
    leverancierEdit : Leverancier;
    @ViewChild('editModal') editModal: ModalDirective;

    constructor(private leverancierService: LeverancierService) {}
    ngOnInit() {
        this.leverancierService.getLeveranciers().subscribe(
            (leveranciers: Leverancier[]) => {
                this.leveranciers = leveranciers;
            }
        );
    }

    onDelete(leverancier: Leverancier) {
        this.leverancierService.deleteLeverancier(leverancier)
            .subscribe(
                result => console.log(result)
            );
    }

    showEditModal(leverancier: Leverancier): void {
        this.leverancierService.leverancierIsEdit.subscribe(
            this.leverancier = leverancier
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.leverancierEdit = new Leverancier(form.value.naam, form.value.telefoon,form.value.locatie,form.value.rekeningnr, form.value.status ,form.value.id);
        console.log(this.leverancierEdit);

        this.leverancierService.updateLeverancier(this.leverancierEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );

        this.hideEditModal();
        this.ngOnInit();
    }
}