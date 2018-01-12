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
    selector: 'app-factuurarchief',
    templateUrl: './factuurarchief.component.html'
})
export class FactuurarchiefComponent implements OnInit{
    facturen: Factuur[];
    factuurEdit: Factuur;
    @Input() factuur: Factuur;

    constructor(private factuurService: FactuurService, private route: ActivatedRoute,private router: Router) {}
    ngOnInit() {
        this.factuurService.getFacturen().subscribe(
            (facturen: Factuur[]) => {
                this.facturen = facturen.filter(x => x.status === "Afgesloten");
                console.log(this.facturen);
            }
        );
    }

}