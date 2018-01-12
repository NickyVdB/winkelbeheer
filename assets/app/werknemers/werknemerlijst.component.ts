import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Werknemer} from "./werknemer.model";
import {WerknemerService} from "./werknemer.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
import {NgForm} from "@angular/forms";
import {defaultLocaleMonths} from "ngx-bootstrap/bs-moment/locale/locale.class";

@Component({
    selector: 'app-werknemerlijst',
    templateUrl: './werknemerlijst.component.html'
})
export class WerknemerlijstComponent implements OnInit{
    @Input() werknemer: Werknemer;
    werknemerEdit : Werknemer;
    werknemers: Werknemer[];
    @ViewChild('editModal') editModal: ModalDirective;
    constructor(private werknemerService: WerknemerService) {}
    ngOnInit() {
        this.werknemerService.getWerknemers().subscribe(
            (werknemers: Werknemer[]) => {
                this.werknemers = werknemers;
            }
        );
    }

    onDelete(werknemer: Werknemer) {
        this.werknemerService.deleteWerknemer(werknemer)
            .subscribe(
                result => console.log(result)
            );
    }

    showEditModal(werknemer: Werknemer): void {
        this.werknemerService.werknemerIsEdit.subscribe(
            this.werknemer = werknemer
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.werknemerEdit = new Werknemer(form.value.naam, form.value.voornaam, form.value.telefoon, form.value.id)
        console.log(this.werknemerEdit);

        this.werknemerService.updateWerknemer(this.werknemerEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.werknemerService.getWerknemers().subscribe(
            (werknemers: Werknemer[]) => {
                this.werknemers = werknemers;
            }
        );
        this.hideEditModal();
        this.ngOnInit();
    }
}