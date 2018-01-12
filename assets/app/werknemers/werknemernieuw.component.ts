import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Werknemer} from "./werknemer.model";
import {WerknemerService} from "./werknemer.service";

@Component({
    selector: 'app-werknemernieuw',
    templateUrl: './werknemernieuw.component.html',
})

export class WerknemernieuwComponent implements OnInit{
    constructor(private werknemerService: WerknemerService) {}
    werknemer:Werknemer;

    onSubmit(form: NgForm) {
        const werknemer = new Werknemer(form.value.naam, form.value.voornaam, form.value.telefoon);
            this.werknemerService.addWerknemer(werknemer).subscribe(
                data => console.log(data),
                result => console.log(result)
            );
        form.resetForm();
    }
    ngOnInit(){
        this.werknemerService.werknemerIsEdit.subscribe(
            (werknemer: Werknemer) => this.werknemer = werknemer
        );
    }

}