import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AfdelingService} from "./afdeling.service";
import {Afdeling} from "./afdeling.model";
import {Werknemer} from "../werknemers/werknemer.model";


@Component({
    selector: 'app-afdelingnieuw',
    templateUrl: './afdelingnieuw.component.html'
})
export class AfdelingnieuwComponent implements OnInit{
    constructor(private afdelingService: AfdelingService) {}
    afdeling:Afdeling;
    werknemers: Werknemer[];

    onSubmit(form: NgForm) {
        const afdeling = new Afdeling(form.value.naam, form.value.beschrijving, form.value.verantwoordelijke);
        this.afdelingService.addAfdeling(afdeling).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
    }
    ngOnInit(){
        this.afdelingService.afdelingIsEdit.subscribe(
            (afdeling: Afdeling) => this.afdeling = afdeling
        );
        this.afdelingService.getWerknemers().subscribe(
            (werknemers: Werknemer[]) => {
                this.werknemers = werknemers;
            }
        );
    }

}