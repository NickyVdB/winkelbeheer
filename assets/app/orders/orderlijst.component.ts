import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Werknemer} from "../werknemers/werknemer.model";
import {ModalDirective} from "ngx-bootstrap";
import {NgForm} from "@angular/forms";
import {Leverancier} from "../leveranciers/leverancier.model";
import {Order} from "./order.model";
import {OrderService} from "./order.service";

@Component({
    selector: 'app-orderlijst',
    templateUrl: './orderlijst.component.html'
})
export class OrderlijstComponent implements OnInit{
    orders: Order[];
    verantwoordelijke: Werknemer[];
    leveranciers: Leverancier[];
    @Input() order: Order;
    orderEdit : Order;
    @ViewChild('editModal') editModal: ModalDirective;


    constructor(private orderService: OrderService) {}
    ngOnInit() {
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
                this.orders = orders.filter(x => x.status === "Niet geleverd");
            }
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
        )
    }

    showEditModal(order: Order): void {
        this.orderService.orderIsEdit.subscribe(
            this.order = order
        );
        this.editModal.show();
    }

    hideEditModal(): void {
        this.editModal.hide();
    }

    onEdit(form: NgForm) {
        this.orderEdit = new Order(form.value.naam,form.value.datum, form.value.status,form.value.totaalprijs, form.value.leverancier, form.value.verantwoordelijke, form.value.id);
        console.log(this.orderEdit);

        this.orderService.updateOrder(this.orderEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );

        this.hideEditModal();
        this.ngOnInit();
    }

    onArchiveer(order: Order) {
        this.orderEdit = new Order(order.naam,order.datum, "Geleverd",order.totaalprijs, order.leverancier, order.verantwoordelijke, order.id);
        console.log(this.orderEdit);

        this.orderService.updateOrder(this.orderEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
                this.orders = orders.filter(x => x.status === "Niet geleverd");
            }
        );

        this.ngOnInit();
    }

    filterOnLeverancier(form: NgForm) {
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
                this.orders = orders.filter(x => x.leverancier === form.value.leverancierFilter);
            }
        );
    }

    filterOnVerantwoordelijke(form: NgForm) {
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
                this.orders = orders.filter(x => x.verantwoordelijke === form.value.verantwoordelijkeFilter);
            }
        );
    }
}