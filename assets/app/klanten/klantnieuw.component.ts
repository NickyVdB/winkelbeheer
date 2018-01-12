import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {KlantService} from "./klant.service";
import {Klant} from "./klant.model";

@Component({
    selector: 'app-klantnieuw',
    templateUrl: './klantnieuw.component.html',
})
export class KlantnieuwComponent implements OnInit{
    constructor(private klantService: KlantService ) {}
    klant:Klant;

    onSubmit(form: NgForm) {
        const klant = new Klant(form.value.naam, form.value.voornaam, form.value.kortingsprocent, form.value.telefoon,  form.value.email);
            this.klantService.addKlant(klant).subscribe(
                data => console.log(data),
                result => console.log(result)
            );
        form.resetForm();
    }
    ngOnInit(){
        this.klantService.klantIsEdit.subscribe(
            (klant: Klant) => this.klant = klant
        );
    }

}