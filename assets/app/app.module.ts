import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HeaderComponent} from "./shared/header.component";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {OrdersComponent} from "./orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {AfdelingenComponent} from "./afdelingen/afdelingen.component";
import {KlantenComponent} from "./klanten/klanten.component";
import {LeveranciersComponent} from "./leveranciers/leveranciers.component";
import {ProductenComponent} from "./producten/producten.component";
import {PromotiesComponent} from "./promoties/promoties.component";
import {FacturenComponent} from "./facturen/facturen.component";
import {WerknemersComponent} from "./werknemers/werknemers.component";
import {AfdelingnieuwComponent} from "./afdelingen/afdelingnieuw.component";
import {AfdelinglijstComponent} from "./afdelingen/afdelinglijst.component";
import {WerknemernieuwComponent} from "./werknemers/werknemernieuw.component";
import {WerknemerlijstComponent} from "./werknemers/werknemerlijst.component";
import {WerknemerService} from "./werknemers/werknemer.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LeveranciernieuwComponent} from "./leveranciers/leveranciernieuw.component";
import {LeverancierlijstComponent} from "./leveranciers/leverancierlijst.component";
import {LeverancierService} from "./leveranciers/leverancier.service";
import {KlantlijstComponent} from "./klanten/klantlijst.component";
import {KlantnieuwComponent} from "./klanten/klantnieuw.component";
import {KlantService} from "./klanten/klant.service";
import {AfdelingService} from "./afdelingen/afdeling.service";
import {PromotienieuwComponent} from "./promoties/promotienieuw.component";
import {PromotielijstComponent} from "./promoties/promotielijst.component";
import {PromotieService} from "./promoties/promotie.service";
import {AccordionModule, ModalModule} from "ngx-bootstrap";
import {FactuurnieuwComponent} from "./facturen/factuurnieuw.component";
import {FactuurService} from "./facturen/factuur.service";
import {ProductlijstComponent} from "./producten/productlijst.component";
import {ProductnieuwComponent} from "./producten/productnieuw.component";
import {ProductService} from "./producten/product.service";
import {FactuurhuidigComponent} from "./facturen/factuurhuidig.component";
import {FactuurdetailComponent} from "./facturen/factuurdetail.component";
import {FactuuraanpasComponent} from "./facturen/factuuraanpas.component";
import {OrdernieuwComponent} from "./orders/ordernieuw.component";
import {OrderService} from "./orders/order.service";
import {OrderlijstComponent} from "./orders/orderlijst.component";
import {OrderarchieflijstComponent} from "./orders/orderarchieflijst.component";
import {FactuurarchiefComponent} from "./facturen/factuurarchief.component";
import {angular1Providers} from "@angular/upgrade/static/src/static/angular1_providers";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,

        //afdeling
        AfdelingenComponent,
        AfdelingnieuwComponent,
        AfdelinglijstComponent,
        //werknemer
        WerknemersComponent,
        WerknemernieuwComponent,
        WerknemerlijstComponent,
        //leverancier
        LeveranciersComponent,
        LeveranciernieuwComponent,
        LeverancierlijstComponent,
        //klant
        KlantenComponent,
        KlantlijstComponent,
        KlantnieuwComponent,
        //promotie
        PromotiesComponent,
        PromotienieuwComponent,
        PromotielijstComponent,
        //factuur
        FacturenComponent,
        FactuurnieuwComponent,
        FactuurhuidigComponent,
        FactuurdetailComponent,
        FactuuraanpasComponent,
        FactuurarchiefComponent,
        //product
        ProductenComponent,
        ProductlijstComponent,
        ProductnieuwComponent,
        //order
        OrdersComponent,
        OrdernieuwComponent,
        OrderlijstComponent,
        OrderarchieflijstComponent
    ],
    imports: [BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule, ModalModule.forRoot(), AccordionModule],
    bootstrap: [AppComponent],
    providers: [WerknemerService, LeverancierService, KlantService, AfdelingService, PromotieService, FactuurService, ProductService, OrderService]
})
export class AppModule {

}