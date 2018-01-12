import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {LeverancierService} from "./leverancier.service";
import {Leverancier} from "./leverancier.model";

@Component({
    selector: 'app-leveranciernieuw',
    templateUrl: './leveranciernieuw.component.html',
})
export class LeveranciernieuwComponent implements OnInit{
    constructor(private leverancierService: LeverancierService) {}
    leverancier:Leverancier;

    onSubmit(form: NgForm) {
        const leverancier = new Leverancier(form.value.naam, form.value.telefoon, form.value.locatie, form.value.rekeningnr, form.value.status);
            this.leverancierService.addLeverancier(leverancier).subscribe(
                data => console.log(data),
                result => console.log(result)
            );
        form.resetForm();
    }
    ngOnInit(){
        this.leverancierService.leverancierIsEdit.subscribe(
            (leverancier: Leverancier) => this.leverancier = leverancier
        );
    }

}