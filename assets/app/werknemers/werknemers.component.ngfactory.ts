/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from './werknemers.component';
const styles_WerknemersComponent:any[] = ([] as any[]);
export const RenderType_WerknemersComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_WerknemersComponent,
  data: {}
}
);
export function View_WerknemersComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Werknemers'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),29,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),20,'div',[[
        'class',
        'col-4'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),17,'ul',[
      [
        'class',
        'nav flex-column'
      ]
      ,
      [
        'style',
        'background-color: #e3f2fd;'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'li',[[
        'class',
        'nav-item'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'nav-link'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,12).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Nieuwe werknemer'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'li',[[
        'class',
        'nav-item'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',[[
        'class',
        'nav-link'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,20).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(335872,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Alle werknemers'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'col-8'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.RouterOutlet,[
      import1.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,13,0,'nieuw');
    ck(v,12,0,currVal_2);
    const currVal_5:any = ck(v,21,0,'lijst');
    ck(v,20,0,currVal_5);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,12).target;
    const currVal_1:any = import0.ɵnov(v,12).href;
    ck(v,11,0,currVal_0,currVal_1);
    const currVal_3:any = import0.ɵnov(v,20).target;
    const currVal_4:any = import0.ɵnov(v,20).href;
    ck(v,19,0,currVal_3,currVal_4);
  });
}
function View_WerknemersComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-werknemers',([] as any[]),(null as any),(null as any),(null as any),View_WerknemersComponent_0,RenderType_WerknemersComponent)),
    import0.ɵdid(24576,(null as any),0,import3.WerknemersComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const WerknemersComponentNgFactory:import0.ComponentFactory<import3.WerknemersComponent> = import0.ɵccf('app-werknemers',import3.WerknemersComponent,View_WerknemersComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL3dlcmtuZW1lcnMvd2Vya25lbWVycy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL3dlcmtuZW1lcnMvd2Vya25lbWVycy5jb21wb25lbnQudHMiLCJuZzovLy9EOi9Eb2N1bWVudGVuLzNJVEYvTWVhblN0YWNrL1Byb2plY3Qvd2lua2VsYmVoZWVyL2Fzc2V0cy9hcHAvd2Vya25lbWVycy93ZXJrbmVtZXJzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL3dlcmtuZW1lcnMvd2Vya25lbWVycy5jb21wb25lbnQudHMuV2Vya25lbWVyc0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMT5XZXJrbmVtZXJzPC9oMT5cclxuXHJcbjxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgIDx1bCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XCIgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJ25pZXV3J11cIj5OaWV1d2Ugd2Vya25lbWVyPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnbGlqc3QnXVwiPkFsbGUgd2Vya25lbWVyczwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPGFwcC13ZXJrbmVtZXJzPjwvYXBwLXdlcmtuZW1lcnM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFBSTtJQUFlO01BRW5CO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7TUFDYjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO0lBQ2Y7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStEO01BQzNEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUI7TUFDakI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBb0I7SUFBeUI7SUFBb0I7SUFDaEU7TUFDTDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFCO01BQ2pCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQW9CO0lBQXlCO0lBQW1CO0lBQy9EO0lBQ0o7SUFDSDtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUI7SUFDZjtnQkFBQTs7OztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBK0I7SUFDN0I7OztJQVQwQjtJQUFwQixVQUFvQixTQUFwQjtJQUdvQjtJQUFwQixVQUFvQixTQUFwQjs7SUFIQTtJQUFBO0lBQUEsVUFBQSxtQkFBQTtJQUdBO0lBQUE7SUFBQSxVQUFBLG1CQUFBOzs7OztJQ1RoQjtnQkFBQTs7OzsifQ==
