import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    template:`
        <header class="row">
                <ul class="nav justify-content">
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/home']">Home</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/orders']">Orders</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/facturen']">Facturen</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/producten']">Producten</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/promoties']">Promoties</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/leveranciers']">Leveranciers</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/werknemers']">Werknemers</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/klanten']">Klanten</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="['/afdelingen']">Afdelingen</a></li>
                </ul>
        </header>
    `
})
export class HeaderComponent{}