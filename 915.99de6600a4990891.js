"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[915],{3915:(M,v,m)=>{m.r(v),m.d(v,{AppointmentsModule:()=>E});var s=m(6895),g=m(9455),t=m(4650),Z=m(7241),x=m(5830),b=m(8423),_=m(4333),T=m(502);function y(n,p){if(1&n&&(t.TgZ(0,"div",13)(1,"label"),t._uU(2),t.qZA()()),2&n){const i=t.oxw();t.xp6(2),t.Oqu(i.util.translate("No Data Found.."))}}function A(n,p){1&n&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",14),t.qZA())}const k=function(){return[1,2,3,4,1,2,3,4,5,5,6]};function w(n,p){1&n&&(t.TgZ(0,"tr"),t.YNc(1,A,2,0,"td",11),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,k)))}function a(n,p){1&n&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function u(n,p){if(1&n&&(t.TgZ(0,"span")(1,"p",21),t._uU(2),t.YNc(3,a,2,0,"span",12),t.qZA()()),2&n){const i=p.$implicit,r=p.index,f=t.oxw(2).$implicit;t.xp6(2),t.hij(" ",i.name," "),t.xp6(1),t.Q6J("ngIf",r!=f.items.length-1)}}function e(n,p){if(1&n&&(t.TgZ(0,"div",20),t.YNc(1,u,4,2,"span",11),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",i.items.services)}}function o(n,p){1&n&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function l(n,p){if(1&n&&(t.TgZ(0,"span")(1,"p",21),t._uU(2),t.YNc(3,o,2,0,"span",12),t.qZA()()),2&n){const i=p.$implicit,r=p.index,f=t.oxw(2).$implicit;t.xp6(2),t.hij(" ",i.name," "),t.xp6(1),t.Q6J("ngIf",r!=f.items.length-1)}}function c(n,p){if(1&n&&(t.TgZ(0,"div",20),t.YNc(1,l,4,2,"span",11),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",i.items.packages)}}function d(n,p){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.AsE("",r.util.currecny," ",i.grand_total," ")}}function h(n,p){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const i=t.oxw().$implicit,r=t.oxw();t.xp6(1),t.AsE("",i.grand_total," ",r.util.currecny,"")}}function q(n,p){if(1&n){const i=t.EpF();t.TgZ(0,"tr")(1,"th",15),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",16),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"img",16),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t.YNc(12,e,2,1,"div",17),t.qZA(),t.TgZ(13,"td"),t.YNc(14,c,2,1,"div",17),t.qZA(),t.TgZ(15,"td"),t.YNc(16,d,2,2,"span",12),t.YNc(17,h,2,2,"span",12),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td")(23,"div",18)(24,"c-badge",19),t.NdJ("click",function(){const C=t.CHM(i).$implicit,F=t.oxw();return t.KtG(F.viewData(C.id))}),t._uU(25),t.qZA()()()()}if(2&n){const i=p.$implicit,r=t.oxw();t.xp6(2),t.hij(" ",i.data_id," "),t.xp6(2),t.Q6J("src",r.api.imageUrl+i.salonInfo.cover,t.LSH),t.xp6(2),t.hij(" ",i.salonInfo.name," "),t.xp6(2),t.Q6J("src",r.api.imageUrl+i.userInfo.cover,t.LSH),t.xp6(2),t.hij(" ",i.userInfo.first_name+" "+i.userInfo.last_name," "),t.xp6(2),t.Q6J("ngIf",i&&i.items&&i.items.services),t.xp6(2),t.Q6J("ngIf",i&&i.items&&i.items.packages),t.xp6(2),t.Q6J("ngIf","left"==r.util.cside),t.xp6(1),t.Q6J("ngIf","right"==r.util.cside),t.xp6(2),t.hij(" ",r.paymentName[i.pay_method]," "),t.xp6(2),t.hij(" ",r.orderStatusNames[i.status]," "),t.xp6(4),t.hij(" ",r.util.translate("View")," ")}}function D(n,p){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",22),t.NdJ("pageChange",function(f){t.CHM(i);const C=t.oxw();return t.KtG(C.page=f)}),t.qZA()()}}const O=function(n){return{id:"pagin1",itemsPerPage:10,currentPage:n}},U=[{path:"",component:(()=>{class n{constructor(i,r,f){this.util=i,this.api=r,this.router=f,this.dummy=Array(5),this.list=[],this.dummyList=[],this.page=1,this.orderStatusNames=[this.util.translate("Created"),this.util.translate("Accepted"),this.util.translate("Rejected"),this.util.translate("Ongoing"),this.util.translate("Completed"),this.util.translate("Cancelled by user"),this.util.translate("Refund"),this.util.translate("Delayed"),this.util.translate("Pending Payments")],this.paymentName=[this.util.translate("NA"),this.util.translate("COD"),this.util.translate("Stripe"),this.util.translate("PayPal"),this.util.translate("Paytm"),this.util.translate("Razorpay"),this.util.translate("Instamojo"),this.util.translate("Paystack"),this.util.translate("Flutterwave")],this.getAll()}getAll(){this.list=[],this.dummy=Array(5),this.api.get_private("v1/appointments/getAllSalonAppointments").then(i=>{console.log(">>>>>",i),this.dummy=[],i&&i.status&&200==i.status&&i.success&&i.data.length>0&&(i.data.forEach(r=>{(f=>{try{return JSON.parse(f),!0}catch{return!1}})(r.items)&&(r.items=JSON.parse(r.items))}),this.list=i.data,this.dummyList=i.data,console.log("====",this.list))},i=>{this.dummy=[],console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.dummy=[],console.log("Err",i),this.util.apiErrorHandler(i)})}ngOnInit(){}viewData(i){console.log(i),this.router.navigate(["appointments-details"],{queryParams:{id:i}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(Z.f),t.Y36(x.s),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appointments"]],decls:37,vars:19,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-body"],["class","error_div",4,"ngIf"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"error_div"],["count","1","appearance","line"],["scope","row"],["onError","this.src='assets/img/dummy.jpeg'",1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],["class","cate_info",4,"ngIf"],[1,"d-flex","align-items-center"],["color","info",1,"me-1","badge","bg-info",3,"click"],[1,"cate_info"],[2,"font-size","10px","margin","0px"],["id","pagin1",3,"pageChange"]],template:function(i,r){1&i&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,y,3,1,"div",7),t.TgZ(9,"table",8)(10,"thead",9)(11,"tr")(12,"th",10),t._uU(13),t.qZA(),t._UZ(14,"th",10),t.TgZ(15,"th",10),t._uU(16),t.qZA(),t._UZ(17,"th",10),t.TgZ(18,"th",10),t._uU(19),t.qZA(),t.TgZ(20,"th",10),t._uU(21),t.qZA(),t.TgZ(22,"th",10),t._uU(23),t.qZA(),t.TgZ(24,"th",10),t._uU(25),t.qZA(),t.TgZ(26,"th",10),t._uU(27),t.qZA(),t.TgZ(28,"th",10),t._uU(29),t.qZA(),t.TgZ(30,"th",10),t._uU(31),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,w,2,2,"tr",11),t.YNc(34,q,26,12,"tr",11),t.ALo(35,"paginate"),t.qZA()(),t.YNc(36,D,2,0,"div",12),t.qZA()()()()()),2&i&&(t.xp6(6),t.hij(" ",r.util.translate("All Appointments")," "),t.xp6(2),t.Q6J("ngIf",(null==r.list?null:r.list.length)<=0&&(null==r.dummy?null:r.dummy.length)<=0),t.xp6(5),t.Oqu(r.util.translate("Id")),t.xp6(3),t.Oqu(r.util.translate("Freelancer")),t.xp6(3),t.Oqu(r.util.translate("User")),t.xp6(2),t.Oqu(r.util.translate("Services")),t.xp6(2),t.Oqu(r.util.translate("Packages")),t.xp6(2),t.Oqu(r.util.translate("Grand Total")),t.xp6(2),t.Oqu(r.util.translate("Payment Method")),t.xp6(2),t.Oqu(r.util.translate("Status")),t.xp6(2),t.Oqu(r.util.translate("Action")),t.xp6(2),t.Q6J("ngForOf",r.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(35,14,r.list,t.VKq(17,O,r.page))),t.xp6(2),t.Q6J("ngIf",(null==r.list?null:r.list.length)>0))},dependencies:[s.sg,s.O5,b.Ro,_.LS,T.xr,_._s],styles:['@charset "UTF-8";']}),n})()}];let I=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(U),g.Bz]}),n})();var N=m(4006),j=m(388),J=m(9241);let E=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,I,N.u5,b.ef,_.JX,T.hx.forRoot({animation:"progress-dark"}),J.P4,j.zk]}),n})()},9241:(M,v,m)=>{m.d(v,{AH:()=>y,P4:()=>w,wW:()=>A,y3:()=>k});var s=m(4650),g=m(6895);function t(a,u){if(1&a){const e=s.EpF();s.TgZ(0,"span",7),s.NdJ("click",function(l){s.CHM(e);const c=s.oxw().$implicit,d=s.oxw();return l.preventDefault(),s.KtG(d.removeTab(c))}),s._uU(1," \u274c"),s.qZA()}}const Z=function(a){return["nav-item",a]};function x(a,u){if(1&a){const e=s.EpF();s.TgZ(0,"li",3),s.NdJ("keydown",function(l){const d=s.CHM(e).index,h=s.oxw();return s.KtG(h.keyNavActions(l,d))}),s.TgZ(1,"a",4),s.NdJ("click",function(){const c=s.CHM(e).$implicit;return s.KtG(c.active=!0)}),s.TgZ(2,"span",5),s._uU(3),s.qZA(),s.YNc(4,t,2,0,"span",6),s.qZA()()}if(2&a){const e=u.$implicit;s.ekj("active",e.active)("disabled",e.disabled),s.Q6J("ngClass",s.VKq(15,Z,e.customClass||"")),s.xp6(1),s.ekj("active",e.active)("disabled",e.disabled),s.uIk("aria-controls",e.id?e.id:"")("aria-selected",!!e.active)("id",e.id?e.id+"-link":""),s.xp6(1),s.Q6J("ngTransclude",e.headingRef),s.xp6(1),s.Oqu(e.heading),s.xp6(1),s.Q6J("ngIf",e.removable)}}const b=["*"];let _=(()=>{class a{constructor(e){this.viewRef=e}set ngTransclude(e){this._ngTransclude=e,e&&this.viewRef.createEmbeddedView(e)}get ngTransclude(){return this._ngTransclude}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(s.s_b))},a.\u0275dir=s.lG2({type:a,selectors:[["","ngTransclude",""]],inputs:{ngTransclude:"ngTransclude"}}),a})(),T=(()=>{class a{constructor(){this.type="tabs",this.isKeysAllowed=!0,this.ariaLabel="Tabs"}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),y=(()=>{class a{constructor(e,o,l){this.renderer=o,this.elementRef=l,this.clazz=!0,this.tabs=[],this.classMap={},this.ariaLabel="Tabs",this.isDestroyed=!1,this._vertical=!1,this._justified=!1,this._type="tabs",this._isKeysAllowed=!0,Object.assign(this,e)}get vertical(){return this._vertical}set vertical(e){this._vertical=e,this.setClassMap()}get justified(){return this._justified}set justified(e){this._justified=e,this.setClassMap()}get type(){return this._type}set type(e){this._type=e,this.setClassMap()}get isKeysAllowed(){return this._isKeysAllowed}set isKeysAllowed(e){this._isKeysAllowed=e}ngOnDestroy(){this.isDestroyed=!0}addTab(e){this.tabs.push(e),e.active=1===this.tabs.length&&!e.active}removeTab(e,o={reselect:!0,emit:!0}){const l=this.tabs.indexOf(e);if(-1!==l&&!this.isDestroyed){if(o.reselect&&e.active&&this.hasAvailableTabs(l)){const c=this.getClosestTabIndex(l);this.tabs[c].active=!0}o.emit&&e.removed.emit(e),this.tabs.splice(l,1),e.elementRef.nativeElement.parentNode&&this.renderer.removeChild(e.elementRef.nativeElement.parentNode,e.elementRef.nativeElement)}}keyNavActions(e,o){if(!this.isKeysAllowed)return;const l=Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return e.preventDefault(),void l[o%l.length].click();if(39!==e.keyCode&&"RightArrow"!==e.key)if(37!==e.keyCode&&"LeftArrow"!==e.key)if(36!==e.keyCode&&"Home"!==e.key)if(35!==e.keyCode&&"End"!==e.key){if((46===e.keyCode||"Delete"===e.key)&&this.tabs[o].removable){if(this.removeTab(this.tabs[o]),l[o+1])return void l[(o+1)%l.length].focus();l[l.length-1]&&l[0].focus()}}else{e.preventDefault();let c,d=1,h=o;do{h-d<0?(h=l.length-1,c=l[h],d=0):c=l[h-d],d++}while(c.classList.contains("disabled"));c.focus()}else{e.preventDefault();let c,d=0;do{c=l[d%l.length],d++}while(c.classList.contains("disabled"));c.focus()}else{let c,d=1,h=o;do{h-d<0?(h=l.length-1,c=l[h],d=0):c=l[h-d],d++}while(c.classList.contains("disabled"));c.focus()}else{let c,d=1;do{c=l[(o+d)%l.length],d++}while(c.classList.contains("disabled"));c.focus()}}getClosestTabIndex(e){const o=this.tabs.length;if(!o)return-1;for(let l=1;l<=o;l+=1){const c=e-l,d=e+l;if(this.tabs[c]&&!this.tabs[c].disabled)return c;if(this.tabs[d]&&!this.tabs[d].disabled)return d}return-1}hasAvailableTabs(e){const o=this.tabs.length;if(!o)return!1;for(let l=0;l<o;l+=1)if(!this.tabs[l].disabled&&l!==e)return!0;return!1}setClassMap(){this.classMap={"nav-stacked":this.vertical,"flex-column":this.vertical,"nav-justified":this.justified,[`nav-${this.type}`]:!0}}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(T),s.Y36(s.Qsj),s.Y36(s.SBq))},a.\u0275cmp=s.Xpm({type:a,selectors:[["tabset"]],hostVars:2,hostBindings:function(e,o){2&e&&s.ekj("tab-container",o.clazz)},inputs:{vertical:"vertical",justified:"justified",type:"type"},ngContentSelectors:b,decls:4,vars:3,consts:[["role","tablist",1,"nav",3,"ngClass","click"],[3,"ngClass","active","disabled","keydown",4,"ngFor","ngForOf"],[1,"tab-content"],[3,"ngClass","keydown"],["href","javascript:void(0);","role","tab",1,"nav-link",3,"click"],[3,"ngTransclude"],["class","bs-remove-tab",3,"click",4,"ngIf"],[1,"bs-remove-tab",3,"click"]],template:function(e,o){1&e&&(s.F$t(),s.TgZ(0,"ul",0),s.NdJ("click",function(c){return c.preventDefault()}),s.YNc(1,x,5,17,"li",1),s.qZA(),s.TgZ(2,"div",2),s.Hsn(3),s.qZA()),2&e&&(s.Q6J("ngClass",o.classMap),s.uIk("aria-label",o.ariaLabel),s.xp6(1),s.Q6J("ngForOf",o.tabs))},dependencies:[g.mk,g.sg,g.O5,_],styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]}),a})(),A=(()=>{class a{constructor(e,o,l){this.elementRef=o,this.renderer=l,this.disabled=!1,this.removable=!1,this.selectTab=new s.vpe,this.deselect=new s.vpe,this.removed=new s.vpe,this.addClass=!0,this.role="tabpanel",this._active=!1,this._customClass="",this.tabset=e,this.tabset.addTab(this)}get customClass(){return this._customClass}set customClass(e){this.customClass&&this.customClass.split(" ").forEach(o=>{this.renderer.removeClass(this.elementRef.nativeElement,o)}),this._customClass=e?e.trim():"",this.customClass&&this.customClass.split(" ").forEach(o=>{this.renderer.addClass(this.elementRef.nativeElement,o)})}get active(){return this._active}set active(e){if(this._active!==e){if(this.disabled&&e||!e)return void(this._active&&!e&&(this.deselect.emit(this),this._active=e));this._active=e,this.selectTab.emit(this),this.tabset.tabs.forEach(o=>{o!==this&&(o.active=!1)})}}get ariaLabelledby(){return this.id?`${this.id}-link`:""}ngOnInit(){this.removable=!!this.removable}ngOnDestroy(){this.tabset.removeTab(this,{reselect:!1,emit:!1})}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(y),s.Y36(s.SBq),s.Y36(s.Qsj))},a.\u0275dir=s.lG2({type:a,selectors:[["tab"],["","tab",""]],hostVars:7,hostBindings:function(e,o){2&e&&(s.uIk("id",o.id)("role",o.role)("aria-labelledby",o.ariaLabelledby),s.ekj("active",o.active)("tab-pane",o.addClass))},inputs:{heading:"heading",id:"id",disabled:"disabled",removable:"removable",customClass:"customClass",active:"active"},outputs:{selectTab:"selectTab",deselect:"deselect",removed:"removed"},exportAs:["tab"]}),a})(),k=(()=>{class a{constructor(e,o){o.headingRef=e}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(s.Rgc),s.Y36(A))},a.\u0275dir=s.lG2({type:a,selectors:[["","tabHeading",""]]}),a})(),w=(()=>{class a{static forRoot(){return{ngModule:a,providers:[]}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[g.ez]}),a})()}}]);