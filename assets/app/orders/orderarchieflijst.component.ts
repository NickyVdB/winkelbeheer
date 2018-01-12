import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Werknemer} from "../werknemers/werknemer.model";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";
import {Leverancier} from "../leveranciers/leverancier.model";
import {Order} from "./order.model";
import {OrderService} from "./order.service";

@Component({
    selector: 'app-orderarchieflijst',
    templateUrl: './orderarchieflijst.component.html'
})
export class OrderarchieflijstComponent implements OnInit{
    orders: Order[];
    @Input() order: Order;
    orderEdit : Order;


    constructor(private orderService: OrderService) {}
    ngOnInit() {
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
                this.orders = orders.filter(x => x.status === "Geleverd");
            }
        );
    }

    onArchiveer(order: Order) {
        this.orderEdit = new Order(order.naam,order.datum, "Niet geleverd",order.totaalprijs, order.leverancier, order.verantwoordelijke, order.id);
        console.log(this.orderEdit);

        this.orderService.updateOrder(this.orderEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );

        this.ngOnInit();
    }

}