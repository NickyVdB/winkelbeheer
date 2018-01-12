import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Leverancier} from "../leveranciers/leverancier.model";
import {OrderService} from "./order.service";
import {Order} from "./order.model";
import {Werknemer} from "../werknemers/werknemer.model";


@Component({
    selector: 'app-ordernieuw',
    templateUrl: './ordernieuw.component.html'
})
export class OrdernieuwComponent implements OnInit{
    constructor(private orderService: OrderService) {}
    orders: Order[];
    verantwoordelijke:Werknemer[];
    leveranciers: Leverancier[];
    order: Order;

    onSubmit(form: NgForm) {
        const order = new Order(form.value.naam,form.value.datum, form.value.status,form.value.totaalprijs, form.value.leverancier, form.value.verantwoordelijke);
        this.orderService.addOrder(order).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
    }
    ngOnInit(){
        this.orderService.orderIsEdit.subscribe(
            (order: Order) => this.order = order
        );
        this.orderService.getLeveranciers().subscribe(
            (leveranciers: Leverancier[]) => {
                this.leveranciers = leveranciers.filter(x => x.status === "Actief");
            }
        );
        this.orderService.getWerknemers().subscribe(
            (werknemers: Werknemer[]) => {
                this.verantwoordelijke = werknemers;
            }
        );
    }

}