import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {PromotieService} from "./promotie.service";
import {Promotie} from "./promotie.model";
import {AfdelingService} from "../afdelingen/afdeling.service";
import {Afdeling} from "../afdelingen/afdeling.model";


@Component({
    selector: 'app-promotienieuw',
    templateUrl: './promotienieuw.component.html'
})
export class PromotienieuwComponent implements OnInit{
    constructor(private promotieService: PromotieService) {}
    promotie:Promotie;
    afdelingen: Afdeling[];

    onSubmit(form: NgForm) {
        const promotie = new Promotie(form.value.naam, form.value.beschrijving, form.value.kortingsprocent, form.value.afdeling,  form.value.begindatum,  form.value.einddatum);
        this.promotieService.addPromotie(promotie).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
    }
    ngOnInit(){
        this.promotieService.promotieIsEdit.subscribe(
            (promotie: Promotie) => this.promotie = promotie
        );
        this.promotieService.getAfdelingen().subscribe(
            (afdelingen: Afdeling[]) => {
                this.afdelingen = afdelingen;
            }
        );
    }

}