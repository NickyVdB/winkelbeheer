import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders/orders.component";
import {HomeComponent} from "./home/home.component";
import {AfdelingenComponent} from "./afdelingen/afdelingen.component";
import {KlantenComponent} from "./klanten/klanten.component";
import {LeveranciersComponent} from "./leveranciers/leveranciers.component";
import {ProductenComponent} from "./producten/producten.component";
import {PromotiesComponent} from "./promoties/promoties.component";
import {FacturenComponent} from "./facturen/facturen.component";
import {WerknemersComponent} from "./werknemers/werknemers.component";
import {AfdelinglijstComponent} from "./afdelingen/afdelinglijst.component";
import {AfdelingnieuwComponent} from "./afdelingen/afdelingnieuw.component";
import {WerknemerlijstComponent} from "./werknemers/werknemerlijst.component";
import {WerknemernieuwComponent} from "./werknemers/werknemernieuw.component";
import {LeverancierlijstComponent} from "./leveranciers/leverancierlijst.component";
import {LeveranciernieuwComponent} from "./leveranciers/leveranciernieuw.component";
import {KlantlijstComponent} from "./klanten/klantlijst.component";
import {KlantnieuwComponent} from "./klanten/klantnieuw.component";
import {PromotielijstComponent} from "./promoties/promotielijst.component";
import {PromotienieuwComponent} from "./promoties/promotienieuw.component";
import {FactuurnieuwComponent} from "./facturen/factuurnieuw.component";
import {ProductlijstComponent} from "./producten/productlijst.component";
import {ProductnieuwComponent} from "./producten/productnieuw.component";
import {FactuurhuidigComponent} from "./facturen/factuurhuidig.component";
import {FactuurdetailComponent} from "./facturen/factuurdetail.component";
import {FactuuraanpasComponent} from "./facturen/factuuraanpas.component";
import {OrdernieuwComponent} from "./orders/ordernieuw.component";
import {OrderlijstComponent} from "./orders/orderlijst.component";
import {OrderarchieflijstComponent} from "./orders/orderarchieflijst.component";
import {FactuurarchiefComponent} from "./facturen/factuurarchief.component";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},

    {path: 'home', component: HomeComponent},

    {
        path: 'orders', component: OrdersComponent,
        children: [{path: 'nieuw', component: OrdernieuwComponent},
            {path: 'huidig', component: OrderlijstComponent},
            {path: 'archief', component: OrderarchieflijstComponent},
            {path: '', component: OrderlijstComponent}
        ]
    },

    {
        path: 'afdelingen', component: AfdelingenComponent,
        children: [{path: 'lijst', component: AfdelinglijstComponent},
            {path: 'nieuw', component: AfdelingnieuwComponent},
            {path: '', component: AfdelinglijstComponent}
        ]
    },

    {
        path: 'klanten', component: KlantenComponent,
        children: [{path: 'lijst', component: KlantlijstComponent},
            {path: 'nieuw', component: KlantnieuwComponent},
            {path: '', component: KlantlijstComponent}
        ]
    },

    {
        path: 'leveranciers', component: LeveranciersComponent,
        children: [{path: 'lijst', component: LeverancierlijstComponent},
            {path: 'nieuw', component: LeveranciernieuwComponent},
            {path: '', component: LeverancierlijstComponent}
        ]
    },

    {
        path: 'producten', component: ProductenComponent,
        children: [{path: 'lijst', component: ProductlijstComponent},
            {path: 'nieuw', component: ProductnieuwComponent},
            {path: '', component: ProductlijstComponent}
        ]
    },

    {
        path: 'promoties', component: PromotiesComponent,
        children: [{path: 'lijst', component: PromotielijstComponent},
            {path: 'nieuw', component: PromotienieuwComponent},
            {path: '', component: PromotielijstComponent}
        ]
    },

    {
        path: 'facturen', component: FacturenComponent,
        children: [{path: 'nieuw', component: FactuurnieuwComponent},
            {path: 'huidig', component: FactuurhuidigComponent},
            {path: 'detail', component: FactuurdetailComponent},
            {path: 'edit', component: FactuuraanpasComponent},
            {path: 'archief', component: FactuurarchiefComponent},
            {path: '', component: FactuurhuidigComponent}
        ]
    },

    {
        path: 'werknemers', component: WerknemersComponent,
        children: [{path: 'nieuw', component: WerknemernieuwComponent},
            {path: 'lijst', component: WerknemerlijstComponent},
            {path: '', component: WerknemerlijstComponent}
        ]
    },
];

export const routing = RouterModule.forRoot(APP_ROUTES);