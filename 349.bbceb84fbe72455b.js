"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[349],{7349:(I,p,a)=>{a.r(p),a.d(p,{SalonRequestModule:()=>E});var d=a(6895),g=a(9455),Z=a(5226),m=a.n(Z),e=a(4650),q=a(7241),y=a(5830),c=a(4006),_=a(8423),h=a(4333),f=a(502),v=a(388);const C=["largeModal"];function T(i,r){1&i&&(e.TgZ(0,"td"),e._UZ(1,"ngx-skeleton-loader",36),e.qZA())}const A=function(){return[1,2,3,4,1,2,3,4,5,5,6]};function b(i,r){1&i&&(e.TgZ(0,"tr"),e.YNc(1,T,2,0,"td",10),e.qZA()),2&i&&(e.xp6(1),e.Q6J("ngForOf",e.DdM(1,A)))}function x(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1,","),e.qZA())}function S(i,r){if(1&i&&(e.TgZ(0,"span")(1,"p",43),e._uU(2),e.YNc(3,x,2,0,"span",12),e.qZA()()),2&i){const t=r.$implicit,n=r.index,o=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",n!=o.web_cates_data.length-1)}}function M(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"th",37),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",38),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",39),e.YNc(11,S,4,2,"span",10),e.qZA()(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td")(15,"div",40)(16,"c-badge",41),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.accept(s))}),e._uU(17),e.qZA(),e.TgZ(18,"c-badge",42),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.reject(s))}),e._uU(19),e.qZA()()()()}if(2&i){const t=r.$implicit,n=e.oxw();e.xp6(2),e.hij(" ",t.id," "),e.xp6(2),e.Q6J("src",n.api.imageUrl+t.cover,e.LSH),e.xp6(2),e.hij(" ",t.first_name+" "+t.last_name," "),e.xp6(2),e.hij(" ",t&&t.city_data&&t.city_data.name&&null!=t.city_data.name?t.city_data.name:""," "),e.xp6(3),e.Q6J("ngForOf",t.web_cates_data),e.xp6(2),e.hij("\u20b9 ",t.fee_start,""),e.xp6(4),e.hij(" ",n.util.translate("Accept")," "),e.xp6(2),e.hij(" ",n.util.translate("Reject")," ")}}function w(i,r){if(1&i&&(e.TgZ(0,"div",44)(1,"label"),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.util.translate("No Data Found.."))}}function R(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"pagination-controls",45),e.NdJ("pageChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.page=o)}),e.qZA()()}}const U=function(i){return{id:"pagin1",itemsPerPage:10,currentPage:i}},F=[{path:"",component:(()=>{class i{constructor(t,n){this.util=t,this.api=n,this.freelancers=[],this.dummyFreelacer=[],this.page=1,this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.gender="1",this.cover="",this.categories=[],this.selectedItems=[],this.UserType=[],this.cities=[],this.fee_start="",this.lat="",this.lng="",this.descriptions="",this.cityID="",this.zipcode="",this.experience="",this.freelancerId="",this.rate="",this.name="",this.address="",this.getFreelancer()}ngOnInit(){}getFreelancer(){this.dummyFreelacer=Array(5),this.freelancers=[],this.api.get_private("v1/request/getSalonRequest").then(t=>{this.dummyFreelacer=[],console.log(t),t&&t.status&&200==t.status&&t.success&&(console.log(">>>>>",t),t.data.length>0&&(this.freelancers=t.data))},t=>{this.dummyFreelacer=[],console.log("Error",t),this.util.apiErrorHandler(t)}).catch(t=>{this.dummyFreelacer=[],console.log("Err",t),this.util.apiErrorHandler(t)})}reject(t){m().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(n=>{n&&n.value&&(console.log("update it"),console.log(t),console.log(t),this.util.show(),this.api.post_private("v1/request/delete",{id:t.id,uid:t.uid}).then(o=>{console.log(o),this.util.hide(),o&&o.status&&200==o.status&&this.getFreelancer()}).catch(o=>{console.log(o),this.util.hide(),this.util.apiErrorHandler(o)}))})}accept(t){m().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To accept this request?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(n=>{n&&n.value&&(console.log("update it"),console.log(t),console.log(t),this.freelancerId=t.id,this.firstName=t.first_name,this.lastName=t.last_name,this.country_code=t.country_code,this.mobile=t.mobile,this.cityID=t.cid,this.cover=t.cover,this.descriptions=t.descriptions,this.gender=t.gender,this.selectedItems=t.web_cates_data,this.UserType=t.salon_type_data,this.fee_start=t.hourly_price,this.experience=t.total_experience,this.zipcode=t.zipcode,this.address=t.address,this.name=t.name,this.largeModal.show())})}acceptRequest(){if(""==this.email||null==this.email||""==this.password||null==this.password||""==this.country_code||null==this.country_code||""==this.lat||null==this.lat||""==this.lng||null==this.lng)return this.util.error(this.util.translate("All fields are required")),!1;this.country_code.toString().includes("+")||(this.country_code="+"+this.country_code);const n={first_name:this.firstName,last_name:this.lastName,gender:this.gender,cover:this.cover,mobile:this.mobile,email:this.email,country_code:this.country_code,password:this.password};this.util.show(),this.api.post_private("v1/auth/createSalonAccount",n).then(o=>{if(this.util.hide(),console.log(o),500==o.status&&this.util.error(o.message),o&&o.status&&200==o.status&&o.user&&o.user.id)console.log(o),this.saveSalonProfile(o.user.id);else if(o&&o.error&&o.error.msg)this.util.error(o.error.msg);else if(o&&o.error&&"Validation Error."==o.error.message)for(let s in o.error[0])console.log(o.error[0][s][0]),this.util.error(o.error[0][s][0]);else this.util.error(this.util.translate("Something went wrong"))},o=>{if(console.log(o),this.util.hide(),o&&o.error&&500==o.error.status&&o.error.message)this.util.error(o.error.message);else if(o&&o.error&&o.error.error&&422==o.error.status)for(let s in o.error.error)console.log(o.error.error[s][0]),this.util.error(o.error.error[s][0]);else this.util.error(this.util.translate("Something went wrong"))}).catch(o=>{if(console.log(o),this.util.hide(),o&&o.error&&500==o.error.status&&o.error.message)this.util.error(o.error.message);else if(o&&o.error&&o.error.error&&422==o.error.status)for(let s in o.error.error)console.log(o.error.error[s][0]),this.util.error(o.error.error[s][0]);else this.util.error(this.util.translate("Something went wrong"))})}saveSalonProfile(t){console.log("uid",t);const n=this.selectedItems.map(l=>l.id),o=this.UserType.map(l=>l.id);console.log(n);const s={uid:t,name:this.name,status:1,lat:this.lat,lng:this.lng,cover:this.cover,categories:n.join(),UserType:o.join(),address:this.address,about:this.descriptions,images:"NA",cid:this.cityID,zipcode:this.zipcode,rating:0,total_rating:0,website:"NA",timing:"NA",verified:1,available:1,have_shop:0,service_at_home:0,have_stylist:0,popular:0,in_home:1,extra_field:"NA",rate:this.rate};this.util.show(),this.api.post_private("v1/salon/create",s).then(l=>{console.log("+++++++++++++++",l),this.util.hide(),l&&l.status&&200==l.status&&l.success&&(this.largeModal.hide(),this.util.success(this.util.translate("Salon added !")),this.util.show(),this.api.post_private("v1/request/delete",{id:this.freelancerId}).then(u=>{console.log(u),this.util.hide(),u&&u.status&&200==u.status&&this.getFreelancer()}).catch(u=>{console.log(u),this.util.hide(),this.util.apiErrorHandler(u)}))},l=>{this.util.hide(),console.log("Error",l),this.util.apiErrorHandler(l)}).catch(l=>{this.util.hide(),console.log("Err",l),this.util.apiErrorHandler(l)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(q.f),e.Y36(y.s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-salon-request"]],viewQuery:function(t,n){if(1&t&&e.Gf(C,5),2&t){let o;e.iGM(o=e.CRH())&&(n.largeModal=o.first)}},decls:81,vars:34,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table","table-responsive-sm","table-hover","mb-0"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],["class","error_div",4,"ngIf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["largeModal","bs-modal"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",2,"overflow","scroll","height","330px"],[1,"col-lg-6"],[1,"form-group"],["for","input-email",1,"form-control-label"],["type","email","id","input-email","placeholder","Email",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["type","password","id","input-email","placeholder","Password",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["type","text","id","input-email","placeholder","Country Code",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],[1,"center-data-helper"],[1,"text-heler"],["width","700","height","100","loading","lazy","allowfullscreen","","referrerpolicy","no-referrer-when-downgrade","src","https://www.google.com/maps/embed/v1/place?key=AIzaSyBl9JDRCDTtjJp4EyarFtocFEgooa1FhmY\n                              &q=Space+Needle,Seattle+WA",2,"border","0"],["type","text","id","input-email","placeholder","Latitude",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["type","text","id","input-email","placeholder","Longitude",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["count","1","appearance","line"],["scope","row"],["onError","this.src='assets/img/dummy.jpeg'",1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],[1,"cate_info"],[1,"d-flex","align-items-center"],["color","success",1,"me-1","badge","bg-success",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],[2,"font-size","10px","margin","0px"],[1,"error_div"],["id","pagin1",3,"pageChange"]],template:function(t,n){if(1&t){const o=e.EpF();e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._uU(6),e.qZA(),e.TgZ(7,"div",6)(8,"table",7)(9,"thead",8)(10,"tr")(11,"th",9),e._uU(12),e.qZA(),e.TgZ(13,"th",9),e._uU(14),e.qZA(),e.TgZ(15,"th",9),e._uU(16),e.qZA(),e.TgZ(17,"th",9),e._uU(18),e.qZA(),e.TgZ(19,"th",9),e._uU(20),e.qZA(),e.TgZ(21,"th",9),e._uU(22),e.qZA(),e.TgZ(23,"th",9),e._uU(24),e.qZA()()(),e.TgZ(25,"tbody"),e.YNc(26,b,2,2,"tr",10),e.YNc(27,M,20,8,"tr",10),e.ALo(28,"paginate"),e.qZA()(),e.YNc(29,w,3,1,"div",11),e.YNc(30,R,2,0,"div",12),e.qZA()()()()(),e.TgZ(31,"div",13,14)(33,"div",15)(34,"div",16)(35,"div",17)(36,"h4",18),e._uU(37),e.qZA(),e.TgZ(38,"button",19),e.NdJ("click",function(){e.CHM(o);const l=e.MAs(32);return e.KtG(l.hide())}),e.TgZ(39,"span",20),e._uU(40,"\xd7"),e.qZA()()(),e.TgZ(41,"div",21)(42,"div",2)(43,"div",22)(44,"div",23)(45,"label",24),e._uU(46),e.qZA(),e.TgZ(47,"input",25),e.NdJ("ngModelChange",function(l){return n.email=l}),e.qZA()()(),e.TgZ(48,"div",22)(49,"div",23)(50,"label",24),e._uU(51),e.qZA(),e.TgZ(52,"input",26),e.NdJ("ngModelChange",function(l){return n.password=l}),e.qZA()()()(),e.TgZ(53,"div",2)(54,"div",22)(55,"div",23)(56,"label",24),e._uU(57),e.qZA(),e.TgZ(58,"input",27),e.NdJ("ngModelChange",function(l){return n.country_code=l}),e.qZA()()()(),e.TgZ(59,"div",28)(60,"p",29),e._uU(61),e._UZ(62,"iframe",30),e.qZA(),e.TgZ(63,"p",29),e._uU(64),e.qZA()(),e.TgZ(65,"div",2)(66,"div",22)(67,"div",23)(68,"label",24),e._uU(69),e.qZA(),e.TgZ(70,"input",31),e.NdJ("ngModelChange",function(l){return n.lat=l}),e.qZA()()(),e.TgZ(71,"div",22)(72,"div",23)(73,"label",24),e._uU(74),e.qZA(),e.TgZ(75,"input",32),e.NdJ("ngModelChange",function(l){return n.lng=l}),e.qZA()()()()(),e.TgZ(76,"div",33)(77,"button",34),e.NdJ("click",function(){e.CHM(o);const l=e.MAs(32);return e.KtG(l.hide())}),e._uU(78),e.qZA(),e.TgZ(79,"button",35),e.NdJ("click",function(){return n.acceptRequest()}),e._uU(80),e.qZA()()()()()}2&t&&(e.xp6(6),e.hij(" ",n.util.translate("All Request")," "),e.xp6(6),e.Oqu(n.util.translate("Id")),e.xp6(2),e.Oqu(n.util.translate("Cover")),e.xp6(2),e.Oqu(n.util.translate("Name")),e.xp6(2),e.Oqu(n.util.translate("City")),e.xp6(2),e.Oqu(n.util.translate("Categories")),e.xp6(2),e.Oqu(n.util.translate("Fee start")),e.xp6(2),e.Oqu(n.util.translate("Action")),e.xp6(2),e.Q6J("ngForOf",n.dummyFreelacer),e.xp6(1),e.Q6J("ngForOf",e.xi3(28,29,n.freelancers,e.VKq(32,U,n.page))),e.xp6(2),e.Q6J("ngIf",(null==n.freelancers?null:n.freelancers.length)<=0&&(null==n.dummyFreelacer?null:n.dummyFreelacer.length)<=0),e.xp6(1),e.Q6J("ngIf",(null==n.freelancers?null:n.freelancers.length)>0),e.xp6(7),e.Oqu(n.util.translate("Add Details")),e.xp6(9),e.hij(" ",n.util.translate("Email"),""),e.xp6(1),e.Q6J("ngModel",n.email),e.xp6(4),e.hij(" ",n.util.translate("Password"),""),e.xp6(1),e.Q6J("ngModel",n.password),e.xp6(5),e.hij(" ",n.util.translate("Country Code"),""),e.xp6(1),e.Q6J("ngModel",n.country_code),e.xp6(3),e.AsE("",n.util.translate("Select Latitude")," & ",n.util.translate("Longitude From here"),": "),e.xp6(3),e.AsE(" ",n.util.translate("Please enter valid Latitude")," & ",n.util.translate("Longitude otherwise app may not work properly.")," "),e.xp6(5),e.hij(" ",n.util.translate("Latitude"),""),e.xp6(1),e.Q6J("ngModel",n.lat),e.xp6(4),e.hij(" ",n.util.translate("Longitude"),""),e.xp6(1),e.Q6J("ngModel",n.lng),e.xp6(3),e.Oqu(n.util.translate("Close")),e.xp6(2),e.hij(" ",n.util.translate("Save Changes"),""))},dependencies:[d.sg,d.O5,c.Fj,c.JJ,c.On,_.Ro,h.LS,f.xr,v.oB,h._s],styles:['@charset "UTF-8";']}),i})()}];let J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(F),g.Bz]}),i})();var N=a(9241),j=a(324);let E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,J,c.u5,_.ef,h.JX,f.hx.forRoot({animation:"progress-dark"}),N.P4,v.zk,j.Z.forRoot()]}),i})()}}]);