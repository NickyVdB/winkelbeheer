/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './factuurdetail.component';
import * as import2 from '@angular/common';
import * as import3 from 'ngx-bootstrap/modal/modal.directive';
import * as import4 from 'ngx-bootstrap/component-loader/component-loader.factory';
import * as import5 from './factuur.service';
const styles_FactuurdetailComponent:any[] = ([] as any[]);
export const RenderType_FactuurdetailComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_FactuurdetailComponent,
  data: {}
}
);
function View_FactuurdetailComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-info'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.toPdf()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Maak PDF']))
  ]
  ,(null as any),(null as any));
}
function View_FactuurdetailComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '€',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit.beschrijving;
    ck(v,3,0,currVal_0);
    const currVal_1:any = v.context.$implicit.prijs;
    ck(v,6,0,currVal_1);
  });
}
function View_FactuurdetailComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),28,'div',[
      [
        'id',
        'accordion'
      ]
      ,
      [
        'role',
        'tablist'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'div',[[
        'class',
        'card'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'class',
        'card-header'
      ]
      ,
      [
        'role',
        'tab'
      ]

    ]
      ,[[
        8,
        'id',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'h5',[[
        'class',
        'mb-0'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[
      [
        'aria-expanded',
        'false'
      ]
      ,
      [
        'data-toggle',
        'collapse'
      ]
      ,
      [
        'role',
        'button'
      ]

    ]
      ,[[
        1,
        'aria-controls',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                                    Factuurnummer: ',
      '\n                                '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                            '])),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵted((null as any),['\n\n                        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[
      [
        'aria-labelledby',
        'headingOne'
      ]
      ,
      [
        'class',
        'collapse show'
      ]
      ,
      [
        'data-parent',
        '#accordion'
      ]
      ,
      [
        'role',
        'tabpanel'
      ]

    ]
      ,[[
        8,
        'id',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'card-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Klant: ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n\n                                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-info'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.selectFactuur(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Selecteer'])),
    (l()(),import0.ɵted((null as any),['\n                                '])),
    (l()(),import0.ɵted((null as any),['\n                            '])),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                ']))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import0.ɵinlineInterpolate(1,'',v.context.$implicit.factuurid,'');
    ck(v,4,0,currVal_0);
    const currVal_1:any = v.context.$implicit.factuurid;
    ck(v,8,0,currVal_1);
    const currVal_2:any = v.context.$implicit.factuurid;
    ck(v,9,0,currVal_2);
    const currVal_3:any = import0.ɵinlineInterpolate(1,'',v.context.$implicit._id,'');
    ck(v,13,0,currVal_3);
    const currVal_4:any = v.context.$implicit.klantnaam;
    ck(v,18,0,currVal_4);
  });
}
export function View_FactuurdetailComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵqud(201326592,1,{factuurModal: 0}),
    import0.ɵqud(201326592,2,{element: 0}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Details factuur'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-info'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.FactuurdetailComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.openFacturen()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Selecteer factuur'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_FactuurdetailComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,[
      [
        2,
        0
      ]
      ,
      [
        'pdfcontent',
        1
      ]

    ]
      ,(null as any),52,'div',[[
        'style',
        'background: #FFF; padding: 20px'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Factuur ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Klantgegevens'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Klant ID: ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Naam: ',
      ' ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Telefoon: ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'E-mail: ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Details'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),14,'table',[[
        'class',
        'table'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),12,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Beschrijving'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Prijs'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_FactuurdetailComponent_2)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Totaal'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h5',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '€',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n\n\n'])),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),26,'div',[
      [
        'aria-hidden',
        'true'
      ]
      ,
      [
        'aria-labelledby',
        'myFactuurModal'
      ]
      ,
      [
        'bsModal',
        ''
      ]
      ,
      [
        'class',
        'modal fade'
      ]
      ,
      [
        'role',
        'dialog'
      ]
      ,
      [
        'tabindex',
        '-1'
      ]

    ]
    ,(null as any),[
      [
        (null as any),
        'click'
      ]
      ,
      [
        (null as any),
        'keydown.esc'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,68).onClick($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('keydown.esc' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,68).onEsc()) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(106496,[
      [
        1,
        4
      ]
      ,
      [
        'factuurModal',
        4
      ]

    ]
    ,0,import3.ModalDirective,[
      import0.ElementRef,
      import0.ViewContainerRef,
      import0.Renderer2,
      import4.ComponentLoaderFactory
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),22,'div',[
      [
        'class',
        'modal-dialog modal-lg'
      ]
      ,
      [
        'style',
        'overflow-y: scroll'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'div',[[
        'class',
        'modal-content'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'modal-header'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',[[
        'class',
        'modal-title pull-left'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Factuur kiezen'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'button',[
      [
        'aria-label',
        'Close'
      ]
      ,
      [
        'class',
        'close pull-right'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.FactuurdetailComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.hideFactuurModal()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'aria-hidden',
        'true'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['×'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'modal-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_FactuurdetailComponent_3)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.FactuurdetailComponent = v.component;
    const currVal_0:any = co.selectedKlant;
    ck(v,9,0,currVal_0);
    const currVal_7:any = co.factuurItemsFilter;
    ck(v,57,0,currVal_7);
    ck(v,68,0);
    const currVal_9:any = co.facturen;
    ck(v,89,0,currVal_9);
  },(ck,v) => {
    var co:import1.FactuurdetailComponent = v.component;
    const currVal_1:any = ((co.selectedFactuur == null)? (null as any): co.selectedFactuur.factuurid);
    ck(v,16,0,currVal_1);
    const currVal_2:any = ((co.selectedKlant == null)? (null as any): co.selectedKlant.id);
    ck(v,26,0,currVal_2);
    const currVal_3:any = ((co.selectedKlant == null)? (null as any): co.selectedKlant.naam);
    const currVal_4:any = ((co.selectedKlant == null)? (null as any): co.selectedKlant.voornaam);
    ck(v,29,0,currVal_3,currVal_4);
    const currVal_5:any = ((co.selectedKlant == null)? (null as any): co.selectedKlant.telefoon);
    ck(v,32,0,currVal_5);
    const currVal_6:any = ((co.selectedKlant == null)? (null as any): co.selectedKlant.email);
    ck(v,35,0,currVal_6);
    const currVal_8:any = co.bedrag;
    ck(v,64,0,currVal_8);
  });
}
function View_FactuurdetailComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-factuurdetail',([] as any[]),(null as any),(null as any),(null as any),View_FactuurdetailComponent_0,RenderType_FactuurdetailComponent)),
    import0.ɵdid(57344,(null as any),0,import1.FactuurdetailComponent,[import5.FactuurService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const FactuurdetailComponentNgFactory:import0.ComponentFactory<import1.FactuurdetailComponent> = import0.ɵccf('app-factuurdetail',import1.FactuurdetailComponent,View_FactuurdetailComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2ZhY3R1cmVuL2ZhY3R1dXJkZXRhaWwuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L0RvY3VtZW50ZW4vM0lURi9NZWFuU3RhY2svUHJvamVjdC93aW5rZWxiZWhlZXIvYXNzZXRzL2FwcC9mYWN0dXJlbi9mYWN0dXVyZGV0YWlsLmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L0RvY3VtZW50ZW4vM0lURi9NZWFuU3RhY2svUHJvamVjdC93aW5rZWxiZWhlZXIvYXNzZXRzL2FwcC9mYWN0dXJlbi9mYWN0dXVyZGV0YWlsLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL2ZhY3R1cmVuL2ZhY3R1dXJkZXRhaWwuY29tcG9uZW50LnRzLkZhY3R1dXJkZXRhaWxDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDE+RGV0YWlscyBmYWN0dXVyPC9oMT5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIiAoY2xpY2spPVwib3BlbkZhY3R1cmVuKClcIj5TZWxlY3RlZXIgZmFjdHV1cjwvYnV0dG9uPlxyXG48YnV0dG9uICpuZ0lmPVwic2VsZWN0ZWRLbGFudFwiIChjbGljayk9XCJ0b1BkZigpXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj5NYWFrIFBERjwvYnV0dG9uPlxyXG5cclxuPGJyLz5cclxuPGRpdiAjcGRmY29udGVudCBzdHlsZT1cImJhY2tncm91bmQ6ICNGRkY7IHBhZGRpbmc6IDIwcHhcIj5cclxuICAgIDxoMj5GYWN0dXVyIHt7c2VsZWN0ZWRGYWN0dXVyPy5mYWN0dXVyaWR9fTwvaDI+XHJcbiAgICA8YnIvPlxyXG4gICAgPGg0PktsYW50Z2VnZXZlbnM8L2g0PlxyXG4gICAgPGJyLz5cclxuICAgIDxwPktsYW50IElEOiB7e3NlbGVjdGVkS2xhbnQ/LmlkfX08L3A+XHJcbiAgICA8cD5OYWFtOiB7e3NlbGVjdGVkS2xhbnQ/Lm5hYW19fSB7e3NlbGVjdGVkS2xhbnQ/LnZvb3JuYWFtfX08L3A+XHJcbiAgICA8cD5UZWxlZm9vbjoge3tzZWxlY3RlZEtsYW50Py50ZWxlZm9vbn19PC9wPlxyXG4gICAgPHA+RS1tYWlsOiB7e3NlbGVjdGVkS2xhbnQ/LmVtYWlsfX08L3A+XHJcbiAgICA8YnIvPlxyXG4gICAgPGg0PkRldGFpbHM8L2g0PlxyXG4gICAgPGJyLz5cclxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+QmVzY2hyaWp2aW5nPC90aD5cclxuICAgICAgICAgICAgPHRoPlByaWpzPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZmFjdHV1cml0ZW0gb2YgZmFjdHV1ckl0ZW1zRmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDx0ZD57e2ZhY3R1dXJpdGVtLmJlc2NocmlqdmluZ319PC90ZD5cclxuICAgICAgICAgICAgPHRkPuKCrHt7ZmFjdHV1cml0ZW0ucHJpanN9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgIDwvdGFibGU+XHJcblxyXG4gICAgPGg0PlRvdGFhbDwvaDQ+XHJcbiAgICA8aDU+4oKse3tiZWRyYWd9fTwvaDU+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxkaXYgYnNNb2RhbCAjZmFjdHV1ck1vZGFsPVwiYnMtbW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cIm15RmFjdHV1ck1vZGFsXCJcclxuICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgIDxkaXYgc3R5bGU9XCJvdmVyZmxvdy15OiBzY3JvbGxcIiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlIHB1bGwtbGVmdFwiPkZhY3R1dXIga2llemVuPC9oND5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJoaWRlRmFjdHV1ck1vZGFsKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFjY29yZGlvblwiIHJvbGU9XCJ0YWJsaXN0XCIgKm5nRm9yPVwibGV0IGZhY3R1dXIgb2YgZmFjdHVyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIiByb2xlPVwidGFiXCIgaWQ9XCJ7e2ZhY3R1dXIuZmFjdHV1cmlkfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJmYWN0dXVyLmZhY3R1dXJpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWN0dXVybnVtbWVyOiB7e2ZhY3R1dXIuZmFjdHV1cmlkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ7e2ZhY3R1dXIuX2lkfX1cIiBjbGFzcz1cImNvbGxhcHNlIHNob3dcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5LbGFudDoge3tmYWN0dXVyLmtsYW50bmFhbX19PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIChjbGljayk9XCJzZWxlY3RGYWN0dXVyKGZhY3R1dXIpXCI+U2VsZWN0ZWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iLCI8YXBwLWZhY3R1dXJkZXRhaWw+PC9hcHAtZmFjdHV1cmRldGFpbD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0dBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBOEI7UUFBQTtRQUFBO01BQUE7TUFBOUI7SUFBQTtJQUFxRTs7Ozs7O0lBb0I3RDtJQUFtRDtJQUMvQztJQUFJO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBaUM7SUFDckM7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQTJCOzs7SUFEM0I7SUFBQTtJQUNBO0lBQUE7Ozs7O0lBb0JBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUFvRTtNQUNoRTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWtCO0lBQ2Q7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErRDtNQUMzRDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO0lBQ2I7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUM0QztNQUFBO01BQUE7SUFBQTtJQUFBO0lBRXhDO0lBQ0g7SUFDSDtJQUVOO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFDOEI7TUFDMUI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1QjtJQUNuQjtJQUFHO01BQUE7TUFBQTtJ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
