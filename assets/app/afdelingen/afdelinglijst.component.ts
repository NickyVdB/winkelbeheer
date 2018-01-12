import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Afdeling} from "./afdeling.model";
import {AfdelingService} from "./afdeling.service";
import {Werknemer} from "../werknemers/werknemer.model";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-afdelinglijst',
    templateUrl: './afdelinglijst.component.html'
})
export class AfdelinglijstComponent implements OnInit{
    afdelingen: Afdeling[];
    @Input() afdeling: Afdeling;
    afdelingEdit : Afdeling;
    werknemers: Werknemer[];
    @ViewChild('editModal') editModal: ModalDirective;

    constructor(private afdelingService: AfdelingService) {}
    ngOnInit() {
        this.afdelingService.getWerknemers().subscribe(
            (werknemers: Werknemer[]) => {
                this.werknemers = werknemers;
            }
        );
        this.afdelingService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
    }

    onDelete(afdeling: Afdeling) {
        this.afdelingService.deleteAfdeling(afdeling)
            .subscribe(
                result => console.log(result)
            );
    }

    showEditModal(afdeling: Afdeling): void {
        this.afdelingService.afdelingIsEdit.subscribe(
            this.afdeling = afdeling
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.afdelingEdit = new Afdeling(form.value.naam, form.value.beschrijving, form.value.verantwoordelijke, form.value.id);
        console.log(this.afdelingEdit);

        this.afdelingService.updateAfdeling(this.afdelingEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.afdelingService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
        this.hideEditModal();
        this.ngOnInit();
    }

    filterOnVerantwoordelijke(form: NgForm) {
               this.afdelingService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen.filter(x => x.verantwoordelijke === form.value.verantwoordelijk);
            }
        );
    }

}