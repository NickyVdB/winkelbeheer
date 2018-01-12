/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './factuurarchief.component';
import * as import3 from './factuur.service';
import * as import4 from '@angular/router';
const styles_FactuurarchiefComponent:any[] = ([] as any[]);
export const RenderType_FactuurarchiefComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_FactuurarchiefComponent,
  data: {}
}
);
function View_FactuurarchiefComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit.factuurid;
    ck(v,3,0,currVal_0);
    const currVal_1:any = v.context.$implicit.klantnaam;
    ck(v,6,0,currVal_1);
    const currVal_2:any = v.context.$implicit.status;
    ck(v,9,0,currVal_2);
  });
}
export function View_FactuurarchiefComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Archief'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),17,'table',[[
        'class',
        'table'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),15,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['ID'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Klant'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Status'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_FactuurarchiefComponent_1)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n']))
  ]
  ,(ck,v) => {
    var co:import2.FactuurarchiefComponent = v.component;
    const currVal_0:any = co.facturen;
    ck(v,19,0,currVal_0);
  },(null as any));
}
function View_FactuurarchiefComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-factuurarchief',([] as any[]),(null as any),(null as any),(null as any),View_FactuurarchiefComponent_0,RenderType_FactuurarchiefComponent)),
    import0.ɵdid(57344,(null as any),0,import2.FactuurarchiefComponent,[
      import3.FactuurService,
      import4.ActivatedRoute,
      import4.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const FactuurarchiefComponentNgFactory:import0.ComponentFactory<import2.FactuurarchiefComponent> = import0.ɵccf('app-factuurarchief',import2.FactuurarchiefComponent,View_FactuurarchiefComponent_Host_0,{factuur: 'factuur'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2ZhY3R1cmVuL2ZhY3R1dXJhcmNoaWVmLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9Eb2N1bWVudGVuLzNJVEYvTWVhblN0YWNrL1Byb2plY3Qvd2lua2VsYmVoZWVyL2Fzc2V0cy9hcHAvZmFjdHVyZW4vZmFjdHV1cmFyY2hpZWYuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2ZhY3R1cmVuL2ZhY3R1dXJhcmNoaWVmLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2ZhY3R1cmVuL2ZhY3R1dXJhcmNoaWVmLmNvbXBvbmVudC50cy5GYWN0dXVyYXJjaGllZkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoND5BcmNoaWVmPC9oND5cclxuXHJcbjx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICA8dHI+XHJcbiAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICA8dGg+S2xhbnQ8L3RoPlxyXG4gICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgPC90cj5cclxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZmFjdHV1ciBvZiBmYWN0dXJlblwiPlxyXG4gICAgICAgIDx0ZD57e2ZhY3R1dXIuZmFjdHV1cmlkfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e2ZhY3R1dXIua2xhbnRuYWFtfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e2ZhY3R1dXIuc3RhdHVzfX08L3RkPlxyXG4gICAgPC90cj5cclxuXHJcbjwvdGFibGU+IiwiPGFwcC1mYWN0dXVyYXJjaGllZj48L2FwcC1mYWN0dXVyYXJjaGllZj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUUk7SUFBcUM7SUFDakM7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQTBCO0lBQzlCO0lBQUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEwQjtJQUM5QjtJQUFJO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBdUI7OztJQUZ2QjtJQUFBO0lBQ0E7SUFBQTtJQUNBO0lBQUE7Ozs7O0lBWFo7SUFBSTtJQUFZO01BRWhCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUI7SUFDakI7SUFBQTtJQUFJO0lBQ0E7SUFBSTtJQUFPO0lBQ1g7SUFBSTtJQUFVO0lBQ2Q7SUFBSTtJQUFXO0lBQ2Q7SUFDTDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUlLOzs7O0lBSkQ7SUFBSixVQUFJLFNBQUo7Ozs7O0lDUko7Z0JBQUE7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9