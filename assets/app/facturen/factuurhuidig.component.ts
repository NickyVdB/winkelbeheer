import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Werknemer} from "../werknemers/werknemer.model";
import {Afdeling} from "../afdelingen/afdeling.model";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";
import {Factuur} from "./factuur.model";
import {FactuurService} from "./factuur.service";
import {Klant} from "../klanten/klant.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-factuurhuidig',
    templateUrl: './factuurhuidig.component.html'
})
export class FactuurhuidigComponent implements OnInit{
    facturen: Factuur[];
    factuurEdit: Factuur;
    @Input() factuur: Factuur;

    constructor(private factuurService: FactuurService, private route: ActivatedRoute,private router: Router) {}
    ngOnInit() {
        this.factuurService.getFacturen().subscribe(
            (facturen: Factuur[]) => {
                this.facturen = facturen.filter(x => x.status === "Openstaand");
                console.log(this.facturen);
            }
        );
    }

    onArchiveer(factuur: Factuur) {
        this.factuurEdit = new Factuur(factuur.klantnaam, factuur.klantid, "Afgesloten" , factuur.factuurid, factuur.id);
        console.log(this.factuurEdit);

        this.factuurService.updateFactuur(this.factuurEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );

        this.ngOnInit();
    }

}