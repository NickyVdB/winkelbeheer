/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './werknemernieuw.component';
import * as import2 from '@angular/forms';
import * as import3 from './werknemer.service';
const styles_WerknemernieuwComponent:any[] = ([] as any[]);
export const RenderType_WerknemernieuwComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_WerknemernieuwComponent,
  data: {}
}
);
export function View_WerknemernieuwComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Nieuwe werknemer'])),
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),52,'form',[[
        'ngNativeValidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.WerknemernieuwComponent = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,4).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,4).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.onSubmit(import0.ɵnov(v,4))) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(8192,[[
        'f',
        4
      ]
    ],0,import2.NgForm,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),{ngSubmit: 'ngSubmit'}),
    import0.ɵprd(1024,(null as any),import2.ControlContainer,(null as any),[import2.NgForm]),
    import0.ɵdid(8192,(null as any),0,import2.NgControlStatusGroup,[import2.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'naam'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Achternaam'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'naam'
      ]
      ,
      [
        'name',
        'naam'
      ]
      ,
      [
        'required',
        ''
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,[
      [
        1,
        'required',
        0
      ]
      ,
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,14)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,14).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,14)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,14)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
      import0.ɵdid(8192,(null as any),0,import2.RequiredValidator,([] as any[]),{required: [
        0,
        'required'
      ]
    },(null as any)),
    import0.ɵprd(512,(null as any),import2.NG_VALIDATORS,(p0_0:any) => {
      return [p0_0];
    },[import2.RequiredValidator]),
    import0.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import2.NgModel,[
      [
        2,
        import2.ControlContainer
      ]
      ,
      [
        2,
        import2.NG_VALIDATORS
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
    ,{
      name: [
        0,
        'name'
      ]
      ,
      model: [
        1,
        'model'
      ]

    }
    ,(null as any)),
    import0.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'voornaam'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Voornaam'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'voornaam'
      ]
      ,
      [
        'name',
        'voornaam'
      ]
      ,
      [
        'required',
        ''
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,[
      [
        1,
        'required',
        0
      ]
      ,
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,29)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,29).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,29)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,29)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
      import0.ɵdid(8192,(null as any),0,import2.RequiredValidator,([] as any[]),{required: [
        0,
        'required'
      ]
    },(null as any)),
    import0.ɵprd(512,(null as any),import2.NG_VALIDATORS,(p0_0:any) => {
      return [p0_0];
    },[import2.RequiredValidator]),
    import0.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import2.NgModel,[
      [
        2,
        import2.ControlContainer
      ]
      ,
      [
        2,
        import2.NG_VALIDATORS
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
    ,{
      name: [
        0,
        'name'
      ]
      ,
      model: [
        1,
        'model'
      ]

    }
    ,(null as any)),
    import0.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'telefoon'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Telefoon'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'telefoon'
      ]
      ,
      [
        'name',
        'telefoon'
      ]
      ,
      [
        'required',
        ''
      ]
      ,
      [
        'type',
        'tel'
      ]

    ]
    ,[
      [
        1,
        'required',
        0
      ]
      ,
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,44)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,44).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,44)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,44)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
      import0.ɵdid(8192,(null as any),0,import2.RequiredValidator,([] as any[]),{required: [
        0,
        'required'
      ]
    },(null as any)),
    import0.ɵprd(512,(null as any),import2.NG_VALIDATORS,(p0_0:any) => {
      return [p0_0];
    },[import2.RequiredValidator]),
    import0.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import2.NgModel,[
      [
        2,
        import2.ControlContainer
      ]
      ,
      [
        2,
        import2.NG_VALIDATORS
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
    ,{
      name: [
        0,
        'name'
      ]
      ,
      model: [
        1,
        'model'
      ]

    }
    ,(null as any)),
    import0.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-outline-success'
      ]
      ,
      [
        'type',
        'submit'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Submit'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.WerknemernieuwComponent = v.component;
    const currVal_15:any = '';
    ck(v,15,0,currVal_15);
    const currVal_16:any = 'naam';
    const currVal_17:any = ((co.werknemer == null)? (null as any): co.werknemer.naam);
    ck(v,18,0,currVal_16,currVal_17);
    const currVal_26:any = '';
    ck(v,30,0,currVal_26);
    const currVal_27:any = 'voornaam';
    const currVal_28:any = ((co.werknemer == null)? (null as any): co.werknemer.voornaam);
    ck(v,33,0,currVal_27,currVal_28);
    const currVal_37:any = '';
    ck(v,45,0,currVal_37);
    const currVal_38:any = 'telefoon';
    const currVal_39:any = ((co.werknemer == null)? (null as any): co.werknemer.telefoon);
    ck(v,48,0,currVal_38,currVal_39);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,6).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,6).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,6).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,6).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,6).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,6).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,6).ngClassPending;
    ck(v,3,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = (import0.ɵnov(v,15).required? '': (null as any));
    const currVal_8:any = import0.ɵnov(v,20).ngClassUntouched;
    const currVal_9:any = import0.ɵnov(v,20).ngClassTouched;
    const currVal_10:any = import0.ɵnov(v,20).ngClassPristine;
    const currVal_11:any = import0.ɵnov(v,20).ngClassDirty;
    const currVal_12:any = import0.ɵnov(v,20).ngClassValid;
    const currVal_13:any = import0.ɵnov(v,20).ngClassInvalid;
    const currVal_14:any = import0.ɵnov(v,20).ngClassPending;
    ck(v,13,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_18:any = (import0.ɵnov(v,30).required? '': (null as any));
    const currVal_19:any = import0.ɵnov(v,35).ngClassUntouched;
    const currVal_20:any = import0.ɵnov(v,35).ngClassTouched;
    const currVal_21:any = import0.ɵnov(v,35).ngClassPristine;
    const currVal_22:any = import0.ɵnov(v,35).ngClassDirty;
    const currVal_23:any = import0.ɵnov(v,35).ngClassValid;
    const currVal_24:any = import0.ɵnov(v,35).ngClassInvalid;
    const currVal_25:any = import0.ɵnov(v,35).ngClassPending;
    ck(v,28,0,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25);
    const currVal_29:any = (import0.ɵnov(v,45).required? '': (null as any));
    const currVal_30:any = import0.ɵnov(v,50).ngClassUntouched;
    const currVal_31:any = import0.ɵnov(v,50).ngClassTouched;
    const currVal_32:any = import0.ɵnov(v,50).ngClassPristine;
    const currVal_33:any = import0.ɵnov(v,50).ngClassDirty;
    const currVal_34:any = import0.ɵnov(v,50).ngClassValid;
    const currVal_35:any = import0.ɵnov(v,50).ngClassInvalid;
    const currVal_36:any = import0.ɵnov(v,50).ngClassPending;
    ck(v,43,0,currVal_29,currVal_30,currVal_31,currVal_32,currVal_33,currVal_34,currVal_35,currVal_36);
  });
}
function View_WerknemernieuwComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-werknemernieuw',([] as any[]),(null as any),(null as any),(null as any),View_WerknemernieuwComponent_0,RenderType_WerknemernieuwComponent)),
    import0.ɵdid(57344,(null as any),0,import1.WerknemernieuwComponent,[import3.WerknemerService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const WerknemernieuwComponentNgFactory:import0.ComponentFactory<import1.WerknemernieuwComponent> = import0.ɵccf('app-werknemernieuw',import1.WerknemernieuwComponent,View_WerknemernieuwComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL3dlcmtuZW1lcnMvd2Vya25lbWVybmlldXcuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L0RvY3VtZW50ZW4vM0lURi9NZWFuU3RhY2svUHJvamVjdC93aW5rZWxiZWhlZXIvYXNzZXRzL2FwcC93ZXJrbmVtZXJzL3dlcmtuZW1lcm5pZXV3LmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L0RvY3VtZW50ZW4vM0lURi9NZWFuU3RhY2svUHJvamVjdC93aW5rZWxiZWhlZXIvYXNzZXRzL2FwcC93ZXJrbmVtZXJzL3dlcmtuZW1lcm5pZXV3LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovRG9jdW1lbnRlbi8zSVRGL01lYW5TdGFjay9Qcm9qZWN0L3dpbmtlbGJlaGVlci9hc3NldHMvYXBwL3dlcmtuZW1lcnMvd2Vya25lbWVybmlldXcuY29tcG9uZW50LnRzLldlcmtuZW1lcm5pZXV3Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPk5pZXV3ZSB3ZXJrbmVtZXI8L2gxPlxyXG48Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiIG5nTmF0aXZlVmFsaWRhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYWFtXCI+QWNodGVybmFhbTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgaWQ9XCJuYWFtXCJcclxuICAgICAgICAgICAgICAgW25nTW9kZWxdPVwid2Vya25lbWVyPy5uYWFtXCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICBuYW1lPVwibmFhbVwiXHJcbiAgICAgICAgICAgICAgIHJlcXVpcmVkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ2b29ybmFhbVwiPlZvb3JuYWFtPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICBpZD1cInZvb3JuYWFtXCJcclxuICAgICAgICAgICAgICAgW25nTW9kZWxdPVwid2Vya25lbWVyPy52b29ybmFhbVwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgbmFtZT1cInZvb3JuYWFtXCJcclxuICAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRlbGVmb29uXCI+VGVsZWZvb248L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgaWQ9XCJ0ZWxlZm9vblwiXHJcbiAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cIndlcmtuZW1lcj8udGVsZWZvb25cIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxlZm9vblwiXHJcbiAgICAgICAgICAgICAgIHJlcXVpcmVkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+U3VibWl0PC9idXR0b24+XHJcblxyXG48L2Zvcm0+XHJcbiIsIjxhcHAtd2Vya25lbWVybmlldXc+PC9hcHAtd2Vya25lbWVybmlldXc+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFBSTtJQUFxQjtNQUN6QjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQU07UUFBQTtRQUFBO01BQUE7TUFBTjtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBO0lBQTREO01BQ3hEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFDcEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFrQjtJQUFrQjtJQUNwQztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTs7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBO0lBS2dCO0lBQ2Q7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO01BQ3BCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0I7SUFBZ0I7SUFDdEM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTtnQkFBQTtJQUtnQjtJQUNkO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUNwQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNCO0lBQWdCO0lBQ3RDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTs7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUE7Z0JBQUE7SUFLZ0I7SUFDZDtJQUNOO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUFzRDtJQUFlO0lBRWxFOzs7O0lBdEJRO0lBTFAsVUFLTyxVQUxQO0lBSU87SUFGQTtJQUZQLFVBSU8sV0FGQSxVQUZQO0lBY087SUFMUCxVQUtPLFVBTFA7SUFJTztJQUZBO0lBRlAsVUFJTyxXQUZBLFVBRlA7SUFjTztJQUxQLFVBS08sVUFMUDtJQUlPO0lBRkE7SUFGUCxVQUlPLFdBRkEsVUFGUDs7SUFyQlI7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxTQUFBLHFFQUFBO0lBR1E7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsVUFBQSwwRUFBQTtJQVNBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxVQUFBLFdBQUEsNEVBQUE7SUFTQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsVUFBQSxXQUFBLDRFQUFBOzs7OztJQ3RCUjtnQkFBQTs7O0lBQUE7OzsifQ==
