"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[617],{1617:(L,p,r)=>{r.r(p),r.d(p,{SalonsModule:()=>z});var u=r(6895),g=r(9455),Z=r(5226),_=r.n(Z),t=r(4650),y=r(5830),S=r(7241),c=r(4006),m=r(8423),d=r(4333),v=r(502),f=r(388),C=r(324),h=r(4980);const T=["myModal2"];function A(n,a){if(1&n&&(t.TgZ(0,"div",56)(1,"label"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.util.translate("No Data Found.."))}}function b(n,a){1&n&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",57),t.qZA())}const M=function(){return[1,2,3,4,1,2,3,4,5,5,6,1]};function w(n,a){1&n&&(t.TgZ(0,"tr"),t.YNc(1,b,2,0,"td",15),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,M)))}function x(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function J(n,a){if(1&n&&(t.TgZ(0,"span")(1,"p",66),t._uU(2),t.YNc(3,x,2,0,"span",16),t.qZA()()),2&n){const e=a.$implicit,s=a.index,o=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name," "),t.xp6(1),t.Q6J("ngIf",s!=o.web_cates_data.length-1)}}function U(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",58),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",59),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",60),t.YNc(11,J,4,2,"span",15),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"c-form-check",51)(16,"input",61),t.NdJ("change",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeShop(i))}),t.qZA()()(),t.TgZ(17,"td")(18,"c-form-check",51)(19,"input",61),t.NdJ("change",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeStylist(i))}),t.qZA()()(),t.TgZ(20,"td")(21,"c-form-check",51)(22,"input",61),t.NdJ("change",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeServiceAtHome(i))}),t.qZA()()(),t.TgZ(23,"td")(24,"c-form-check",51)(25,"input",61),t.NdJ("change",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeHome(i))}),t.qZA()()(),t.TgZ(26,"td")(27,"c-form-check",51)(28,"input",61),t.NdJ("change",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changePopular(i))}),t.qZA()()(),t.TgZ(29,"td")(30,"div",62)(31,"c-badge",63),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.statusUpdate(i))}),t._uU(32),t.qZA(),t.TgZ(33,"c-badge",64),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.updateInfo(i.id,i.uid))}),t._uU(34),t.qZA(),t.TgZ(35,"c-badge",65),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteItem(i))}),t._uU(36),t.qZA()()()()}if(2&n){const e=a.$implicit,s=t.oxw();t.xp6(2),t.hij(" ",e.data_id," "),t.xp6(2),t.Q6J("src",s.api.imageUrl+e.cover,t.LSH),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e&&e.city_data&&e.city_data.name&&null!=e.city_data.name?e.city_data.name:""," "),t.xp6(3),t.Q6J("ngForOf",e.web_cates_data),t.xp6(2),t.AsE(" ",e.rating," / ",e.total_rating," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.have_shop),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.have_stylist),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.service_at_home),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.in_home),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.popular),t.xp6(3),t.Tol(1==e.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==e.status?"success":"dark"),t.xp6(1),t.hij(" ",s.util.translate(1==e.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",s.util.translate("Edit")," "),t.xp6(2),t.hij(" ",s.util.translate("Delete")," ")}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",67),t.NdJ("pageChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.page=o)}),t.qZA()()}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",34)(1,"div",35)(2,"div",36)(3,"input",37),t.NdJ("ngModelChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.country_code=o)}),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("placeholder",e.util.translate("Country Code"))("ngModel",e.country_code)}}function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",34)(2,"div",35)(3,"select",44),t.NdJ("ngModelChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.gender=o)}),t.TgZ(4,"option",68),t._uU(5),t.qZA(),t.TgZ(6,"option",69),t._uU(7),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.gender),t.xp6(2),t.hij(" ",e.util.translate("Male")," "),t.xp6(2),t.hij(" ",e.util.translate("Female")," ")}}function H(n,a){if(1&n&&(t.TgZ(0,"option",70),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",71),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.createSalon())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save changes")," ")}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",71),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateSalon())}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save changes")," ")}}const I=function(n){return{id:"pagin1",itemsPerPage:10,currentPage:n}},j=[{path:"",component:(()=>{class n{constructor(e,s){this.api=e,this.util=s,this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.gender="1",this.cover="",this.categories=[],this.usertype=[],this.selectedItems=[],this.selectedUsertypes=[],this.cities=[],this.lat="",this.name="",this.address="",this.have_shop=!1,this.service_at_home=!1,this.have_stylist=!1,this.lng="",this.about="",this.website="",this.cityID="",this.zipcode="",this.link=0,this.search="",this.dropdownSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0},this.dropdownSettings1={singleSelection:!1,idField:"id",textField:"type",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0},this.salons=[],this.dummySalons=[],this.salonId="",this.salonUID="",this.action="create",this.page=1,this.getAllSalon(),this.getAllCates(),this.getAllUserTypes(),this.getAllCities()}ngOnInit(){}getAllSalon(){this.salons=[],this.dummySalons=[],this.api.get_private("v1/salon/getAll").then(e=>{this.dummySalons=[],e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.salons=e.data,this.dummySalons=this.salons,console.log("====",this.salons)))},e=>{this.dummySalons=[],console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.dummySalons=[],console.log("Err",e),this.util.apiErrorHandler(e)})}selectSalon(e){this.link=e.uid,this.search=e.name,this.salons=[]}searchSal(e){console.log("hii",e),this.salons=e&&""!==e?this.salons.filter(s=>s.name.toLowerCase().indexOf(e.toLowerCase())>-1):this.salons}onSearchChange(e){console.log(e),this.salons=e&&""!==e?this.salons.filter(s=>s.name.toLowerCase().indexOf(e.toLowerCase())>-1):this.dummySalons}preview_banner(e){console.log("fle",e),0!=e.length&&null!=e[0].type.match(/image\/*/)&&(e?(console.log("ok"),this.util.show(),this.api.uploadFile(e).subscribe(o=>{console.log("==>>>>>>",o.data),this.util.hide(),o&&o.data&&(this.cover=o.data)},o=>{console.log(o),this.util.hide()})):console.log("no"))}getAllCates(){this.api.get_private("v1/category/getAll").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.categories=e.data,console.log("====",this.categories)))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}getAllUserTypes(){this.api.get_private("v1/salon/getAllUserTypes").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.usertype=e.data,console.log("====",this.usertype)))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}getAllCities(){this.api.get_private("v1/cities/getAll").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.cities=e.data))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}exportCSV(){}importCSV(){}createNew(){this.action="create",this.myModal2.show(),this.clearData()}createSalon(){if(console.log("create salon"),console.log(this.firstName),console.log(this.lastName),console.log(this.email),console.log(this.password),console.log(this.country_code),console.log(this.mobile),console.log(this.selectedItems),console.log(this.selectedUsertypes),console.log(this.cityID),console.log(this.zipcode),console.log(this.lat),console.log(this.lng),console.log(this.cover),console.log(this.have_shop),console.log(this.have_stylist),console.log(this.service_at_home),""==this.firstName||""==this.lastName||""==this.password||""==this.country_code||""==this.mobile||this.selectedItems.length<=0||this.selectedUsertypes.length<=0||""==this.cityID||""==this.zipcode||""==this.lat||""==this.lng||""==this.about||""==this.address||null==this.mobile||""==this.cover||""==this.name)return this.util.error(this.util.translate("All Fields are required")),!1;if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email))return this.util.error(this.util.translate("Please enter valid Email ID")),!1;console.log(typeof this.country_code),this.country_code.toString().includes("+")||(this.country_code="+"+this.country_code);const o={first_name:this.firstName,last_name:this.lastName,gender:this.gender,cover:this.cover,mobile:this.mobile,email:this.email,country_code:this.country_code,password:this.password};this.util.show(),this.api.post_private("v1/auth/createSalonAccount",o).then(i=>{if(this.util.hide(),console.log(i),500==i.status&&this.util.error(i.message),i&&i.status&&200==i.status&&i.user&&i.user.id)console.log(i),this.saveSalonProfile(i.user.id);else if(i&&i.error&&i.error.msg)this.util.error(i.error.msg);else if(i&&i.error&&"Validation Error."==i.error.message)for(let l in i.error[0])console.log(i.error[0][l][0]),this.util.error(i.error[0][l][0]);else this.util.error(this.util.translate("Something went wrong"))},i=>{if(console.log(i),this.util.hide(),i&&i.error&&500==i.error.status&&i.error.message)this.util.error(i.error.message);else if(i&&i.error&&i.error.error&&422==i.error.status)for(let l in i.error.error)console.log(i.error.error[l][0]),this.util.error(i.error.error[l][0]);else this.util.error(this.util.translate("Something went wrong"))}).catch(i=>{if(console.log(i),this.util.hide(),i&&i.error&&500==i.error.status&&i.error.message)this.util.error(i.error.message);else if(i&&i.error&&i.error.error&&422==i.error.status)for(let l in i.error.error)console.log(i.error.error[l][0]),this.util.error(i.error.error[l][0]);else this.util.error(this.util.translate("Something went wrong"))})}saveSalonProfile(e){console.log("uid",e);const s=this.selectedItems.map(l=>l.id),o=this.selectedUsertypes.map(l=>l.id);console.log(s),console.log(o);const i={uid:e,name:this.name,status:1,lat:this.lat,lng:this.lng,cover:this.cover,categories:s.join(),UserType:o.join(),address:this.address,about:this.about,images:"NA",cid:this.cityID,zipcode:this.zipcode,rating:0,total_rating:0,website:"NA",timing:"NA",verified:1,available:1,have_shop:1==this.have_shop?1:0,service_at_home:1==this.service_at_home?1:0,have_stylist:1==this.have_stylist?1:0,popular:0,in_home:1,extra_field:"NA"};this.util.show(),this.api.post_private("v1/salon/create",i).then(l=>{console.log("+++++++++++++++",l),this.util.hide(),l&&l.status&&200==l.status&&l.success&&(this.myModal2.hide(),this.getAllSalon(),this.clearData(),this.util.success(this.util.translate("Salon added !")))},l=>{this.util.hide(),console.log("Error",l),this.util.apiErrorHandler(l)}).catch(l=>{this.util.hide(),console.log("Err",l),this.util.apiErrorHandler(l)})}clearData(){this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.selectedItems=[],this.selectedUsertypes=[],this.name="",this.cityID="",this.address="",this.zipcode="",this.lat="",this.lng="",this.about="",this.cover="",this.have_shop=!1,this.have_stylist=!1,this.service_at_home=!1}changeShop(e){console.log(e);const s={id:e.id,have_shop:0==e.have_shop?1:0};console.log("======",s),this.util.show(),this.api.post_private("v1/salon/update",s).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changeHome(e){console.log(e);const s={id:e.id,in_home:0==e.in_home?1:0};console.log("======",s),this.util.show(),this.api.post_private("v1/salon/update",s).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changePopular(e){console.log(e);const s={id:e.id,popular:0==e.popular?1:0};console.log("======",s),this.util.show(),this.api.post_private("v1/salon/update",s).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changeStylist(e){console.log(e);const s={id:e.id,have_stylist:0==e.have_stylist?1:0};console.log("======",s),this.util.show(),this.api.post_private("v1/salon/update",s).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}changeServiceAtHome(e){console.log(e);const s={id:e.id,service_at_home:0==e.service_at_home?1:0};console.log("======",s),this.util.show(),this.api.post_private("v1/salon/update",s).then(o=>{this.util.hide(),console.log("+++++++++++++++",o),o&&o.status&&200==o.status&&o.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},o=>{this.util.hide(),console.log("Error",o),this.util.apiErrorHandler(o)}).catch(o=>{this.util.hide(),console.log("Err",o),this.util.apiErrorHandler(o)})}deleteItem(e){console.log(e),_().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(s=>{if(s&&s.value){console.log("update it"),console.log(e),console.log(e);const o={id:e.id,uid:e.uid};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/destroy",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}})}updateInfo(e,s){console.log(e,s),this.salonId=e,this.salonUID=s,this.util.show(),this.api.post_private("v1/salon/getById",{id:s}).then(o=>{console.log(o),this.util.hide(),o&&o.status&&200==o.status&&(this.action="update",this.firstName=o.data.userinfo.first_name,this.lastName=o.data.userinfo.last_name,this.selectedUsertypes=o.data.user_type_data,this.selectedItems=o.data.web_cates_data,this.cityID=o.data.cid,this.zipcode=o.data.zipcode,this.password=o.data.password,this.lat=o.data.lat,this.lng=o.data.lng,this.about=o.data.about,this.cover=o.data.cover,this.name=o.data.name,this.email=o.data.userinfo.email,this.mobile=o.data.userinfo.mobile,this.address=o.data.address,this.have_shop=o.data.have_shop,this.have_stylist=o.data.have_stylist,this.service_at_home=o.data.service_at_home,this.myModal2.show())}).catch(o=>{console.log(o),this.util.hide(),this.util.apiErrorHandler(o)})}statusUpdate(e){console.log(e),_().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(s=>{if(s&&s.value){console.log("update it");const o={id:e.id,status:0==e.status?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}})}updateSalon(){if(""==this.cover||""==this.name||""==this.address||""==this.about||""==this.cityID||this.selectedUsertypes.length<=0||""==this.zipcode||""==this.lat||""==this.lng)return this.util.error(this.util.translate("All Fields are required")),!1;const e=this.selectedItems.map(i=>i.id),s=this.selectedUsertypes.map(i=>i.id);console.log(e);const o={id:this.salonId,name:this.name,first_name:this.firstName,last_name:this.lastName,email:this.email,password:this.password,mobile:this.mobile,lat:this.lat,lng:this.lng,cover:this.cover,categories:e.join(),UserType:s.join(),address:this.address,about:this.about,cid:this.cityID,zipcode:this.zipcode,have_shop:1==this.have_shop?1:0,service_at_home:1==this.service_at_home?1:0,have_stylist:1==this.have_stylist?1:0};this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{console.log("+++++++++++++++",i),this.util.hide(),i&&i.status&&200==i.status&&i.success&&(this.myModal2.hide(),this.getAllSalon(),this.clearData(),this.util.success(this.util.translate("Salon updated !")))},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.s),t.Y36(S.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-salons"]],viewQuery:function(e,s){if(1&e&&t.Gf(T,5),2&e){let o;t.iGM(o=t.CRH())&&(s.myModal2=o.first)}},decls:171,vars:84,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["type","submit",1,"btn","btn-sm","btn-primary",2,"float","right","margin","0px 5px",3,"click"],[1,"card-body"],[1,"row","flex_row"],["type","text","id","name",1,"form-control",3,"placeholder","input"],["class","error_div",4,"ngIf"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["myModal2","bs-modal"],["role","document",1,"modal-dialog","modal-primary","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"logoContainer"],["onError","this.src='assets/img/dummy.jpeg'",3,"src"],[1,"fileContainer","sprite"],["type","file","value","Choose File",3,"change"],[1,"center-data-helper","mb-5"],[1,"card","card-profile","shadow"],[1,"card-header","text-center","border-0"],[1,"d-flex","justify-content-start"],[1,"col-lg-6"],[1,"form-group"],[1,"input-group","input-group-alternative"],["type","text",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["type","email",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["type","password",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["class","col-lg-6",4,"ngIf"],["class","row",4,"ngIf"],["maxHeight","100",3,"placeholder","data","ngModel","settings","ngModelChange"],["rows","3",1,"form-control","form-control-alternative",3,"ngModel","placeholder","ngModelChange"],["id","select2","name","select2",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"center-data-helper"],[1,"text-heler"],["width","700","height","100","loading","lazy","allowfullscreen","","referrerpolicy","no-referrer-when-downgrade","src","https://www.google.com/maps/embed/v1/place?key=AIzaSyBl9JDRCDTtjJp4EyarFtocFEgooa1FhmY\n                                          &q=Space+Needle,Seattle+WA",2,"border","0"],["for","input-email",1,"form-control-label"],[1,"col-lg-4"],[3,"switch"],["cFormCheckInput","","type","checkbox",3,"ngModel","checked","ngModelChange"],[1,"modal-footer"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"error_div"],["count","1","appearance","line"],["scope","row"],[1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],[2,"width","100px","display","flex","flex-direction","column","overflow","scroll"],["cFormCheckInput","","type","checkbox",3,"checked","change"],[1,"d-flex","align-items-center"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],[2,"font-size","10px","margin","0px"],["id","pagin1",3,"pageChange"],["value","1"],["value","0"],[3,"value"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,s){if(1&e){const o=t.EpF();t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return s.createNew()}),t._uU(9),t.qZA(),t._uU(10," \xa0 "),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",3)(14,"input",10),t.NdJ("input",function(l){return s.onSearchChange(l.target.value)}),t.qZA()()(),t.YNc(15,A,3,1,"div",11),t.TgZ(16,"table",12)(17,"thead",13)(18,"tr")(19,"th",14),t._uU(20),t.qZA(),t.TgZ(21,"th",14),t._uU(22),t.qZA(),t.TgZ(23,"th",14),t._uU(24),t.qZA(),t.TgZ(25,"th",14),t._uU(26),t.qZA(),t.TgZ(27,"th",14),t._uU(28),t.qZA(),t.TgZ(29,"th",14),t._uU(30),t.qZA(),t.TgZ(31,"th",14),t._uU(32),t.qZA(),t.TgZ(33,"th",14),t._uU(34),t.qZA(),t.TgZ(35,"th",14),t._uU(36),t.qZA(),t.TgZ(37,"th",14),t._uU(38),t.qZA(),t.TgZ(39,"th",14),t._uU(40),t.qZA(),t.TgZ(41,"th",14),t._uU(42),t.qZA()()(),t.TgZ(43,"tbody"),t.YNc(44,w,2,2,"tr",15),t.YNc(45,U,37,23,"tr",15),t.ALo(46,"paginate"),t.qZA()(),t.YNc(47,N,2,0,"div",16),t.qZA()()()()(),t.TgZ(48,"div",17,18)(50,"div",19)(51,"div",20)(52,"div",21)(53,"h5",22),t._uU(54),t.qZA(),t.TgZ(55,"button",23),t.NdJ("click",function(){t.CHM(o);const l=t.MAs(49);return t.KtG(l.hide())}),t.TgZ(56,"span",24),t._uU(57,"\xd7"),t.qZA()()(),t.TgZ(58,"div",25)(59,"div",26),t._UZ(60,"img",27),t.qZA(),t.TgZ(61,"div",28)(62,"span"),t._uU(63),t.qZA(),t.TgZ(64,"input",29),t.NdJ("change",function(l){return s.preview_banner(l.target.files)}),t.qZA()(),t._UZ(65,"div",30),t.TgZ(66,"div",31)(67,"div",32)(68,"div",33)(69,"h4"),t._uU(70),t.qZA()()(),t.TgZ(71,"div",8)(72,"div",2)(73,"div",34)(74,"div",35)(75,"div",36)(76,"input",37),t.NdJ("ngModelChange",function(l){return s.firstName=l}),t.qZA()()()(),t.TgZ(77,"div",34)(78,"div",35)(79,"div",36)(80,"input",37),t.NdJ("ngModelChange",function(l){return s.lastName=l}),t.qZA()()()()(),t.TgZ(81,"div",2)(82,"div",34)(83,"div",35)(84,"div",36)(85,"input",38),t.NdJ("ngModelChange",function(l){return s.email=l}),t.qZA()()()(),t.TgZ(86,"div",34)(87,"div",35)(88,"div",36)(89,"input",39),t.NdJ("ngModelChange",function(l){return s.password=l}),t.qZA()()()()(),t.TgZ(90,"div",2),t.YNc(91,E,4,2,"div",40),t.TgZ(92,"div",34)(93,"div",35)(94,"div",36)(95,"input",37),t.NdJ("ngModelChange",function(l){return s.mobile=l}),t.qZA()()()()(),t.YNc(96,q,8,3,"div",41),t.qZA(),t.TgZ(97,"div",32)(98,"div",33)(99,"h4"),t._uU(100),t.qZA()()(),t.TgZ(101,"div",8)(102,"div",2)(103,"div",3)(104,"div",35)(105,"ng-multiselect-dropdown",42),t.NdJ("ngModelChange",function(l){return s.selectedItems=l}),t.qZA()()(),t.TgZ(106,"div",3)(107,"div",35)(108,"ng-multiselect-dropdown",42),t.NdJ("ngModelChange",function(l){return s.selectedUsertypes=l}),t.qZA()()(),t.TgZ(109,"div",3)(110,"div",35)(111,"div",36)(112,"input",37),t.NdJ("ngModelChange",function(l){return s.name=l}),t.qZA()()()(),t.TgZ(113,"div",3)(114,"div",35)(115,"div",36)(116,"textarea",43),t.NdJ("ngModelChange",function(l){return s.about=l}),t.qZA()()()(),t.TgZ(117,"div",3)(118,"div",35)(119,"div",36)(120,"textarea",43),t.NdJ("ngModelChange",function(l){return s.address=l}),t.qZA()()()(),t.TgZ(121,"div",34)(122,"div",35)(123,"select",44),t.NdJ("ngModelChange",function(l){return s.cityID=l}),t.YNc(124,H,2,2,"option",45),t.qZA()()(),t.TgZ(125,"div",34)(126,"div",35)(127,"div",36)(128,"input",37),t.NdJ("ngModelChange",function(l){return s.zipcode=l}),t.qZA()()()(),t.TgZ(129,"div",46)(130,"p",47),t._uU(131),t._UZ(132,"iframe",48),t.qZA(),t.TgZ(133,"p",47),t._uU(134),t.qZA()(),t.TgZ(135,"div",34)(136,"div",35)(137,"label",49),t._uU(138),t.qZA(),t.TgZ(139,"input",37),t.NdJ("ngModelChange",function(l){return s.lat=l}),t.qZA()()(),t.TgZ(140,"div",34)(141,"div",35)(142,"label",49),t._uU(143),t.qZA(),t.TgZ(144,"input",37),t.NdJ("ngModelChange",function(l){return s.lng=l}),t.qZA()()(),t.TgZ(145,"div",50)(146,"div",35)(147,"label",49),t._uU(148),t.qZA(),t._UZ(149,"br"),t.TgZ(150,"c-form-check",51)(151,"input",52),t.NdJ("ngModelChange",function(l){return s.have_stylist=l}),t.qZA()()()(),t.TgZ(152,"div",50)(153,"div",35)(154,"label",49),t._uU(155),t.qZA(),t._UZ(156,"br"),t.TgZ(157,"c-form-check",51)(158,"input",52),t.NdJ("ngModelChange",function(l){return s.have_shop=l}),t.qZA()()()(),t.TgZ(159,"div",50)(160,"div",35)(161,"label",49),t._uU(162),t.qZA(),t._UZ(163,"br"),t.TgZ(164,"c-form-check",51)(165,"input",52),t.NdJ("ngModelChange",function(l){return s.service_at_home=l}),t.qZA()()()()()()()(),t.TgZ(166,"div",53),t.YNc(167,k,2,1,"button",54),t.YNc(168,Q,2,1,"button",54),t.TgZ(169,"button",55),t.NdJ("click",function(){t.CHM(o);const l=t.MAs(49);return t.KtG(l.close())}),t._uU(170),t.qZA()()()()()}2&e&&(t.xp6(6),t.hij(" ",s.util.translate("All Salons")," "),t.xp6(3),t.hij(" ",s.util.translate("Add New")," "),t.xp6(5),t.Q6J("placeholder",s.util.translate("Search salon")),t.xp6(1),t.Q6J("ngIf",(null==s.salons?null:s.salons.length)<=0&&(null==s.dummySalons?null:s.dummySalons.length)<=0),t.xp6(5),t.hij("",s.util.translate("Id")," "),t.xp6(2),t.hij("",s.util.translate("Cover")," "),t.xp6(2),t.hij("",s.util.translate("Name")," "),t.xp6(2),t.hij("",s.util.translate("City")," "),t.xp6(2),t.hij("",s.util.translate("Categories")," "),t.xp6(2),t.hij("",s.util.translate("Rating")," "),t.xp6(2),t.hij("",s.util.translate("Have Shop")," "),t.xp6(2),t.hij("",s.util.translate("Have Stylist")," "),t.xp6(2),t.hij("",s.util.translate("Service At Home")," "),t.xp6(2),t.hij("",s.util.translate("In Home")," "),t.xp6(2),t.hij("",s.util.translate("Is Popular")," "),t.xp6(2),t.hij("",s.util.translate("Action")," "),t.xp6(2),t.Q6J("ngForOf",s.dummySalons),t.xp6(1),t.Q6J("ngForOf",t.xi3(46,79,s.salons,t.VKq(82,I,s.page))),t.xp6(2),t.Q6J("ngIf",(null==s.salons?null:s.salons.length)>0),t.xp6(7),t.hij("",s.util.translate("Manage Salon")," "),t.xp6(6),t.Q6J("src",s.api.imageUrl+s.cover,t.LSH),t.xp6(3),t.hij(" ",s.util.translate("Add Cover")," "),t.xp6(7),t.hij("",s.util.translate("Owner Details")," "),t.xp6(6),t.Q6J("placeholder",s.util.translate("First Name"))("ngModel",s.firstName),t.xp6(4),t.Q6J("placeholder",s.util.translate("Last Name"))("ngModel",s.lastName),t.xp6(5),t.Q6J("placeholder",s.util.translate("Email"))("ngModel",s.email),t.xp6(4),t.Q6J("placeholder",s.util.translate("Password"))("ngModel",s.password),t.xp6(2),t.Q6J("ngIf","create"==s.action),t.xp6(4),t.Q6J("placeholder",s.util.translate("Mobile"))("ngModel",s.mobile),t.xp6(1),t.Q6J("ngIf","create"==s.action),t.xp6(4),t.hij("",s.util.translate("Salon Details")," "),t.xp6(5),t.Q6J("placeholder",s.util.translate("Top Category"))("data",s.categories)("ngModel",s.selectedItems)("settings",s.dropdownSettings),t.xp6(3),t.Q6J("placeholder",s.util.translate("Salon User Type"))("data",s.usertype)("ngModel",s.selectedUsertypes)("settings",s.dropdownSettings1),t.xp6(4),t.Q6J("placeholder",s.util.translate("Salon Name"))("ngModel",s.name),t.xp6(4),t.Q6J("ngModel",s.about)("placeholder",s.util.translate("Brief of salon")),t.xp6(4),t.Q6J("ngModel",s.address)("placeholder",s.util.translate("Salon Address")),t.xp6(3),t.Q6J("ngModel",s.cityID),t.xp6(1),t.Q6J("ngForOf",s.cities),t.xp6(4),t.Q6J("placeholder",s.util.translate("Zipcode"))("ngModel",s.zipcode),t.xp6(3),t.AsE("",s.util.translate("Select Latitude")," & ",s.util.translate("Longitude From here"),": "),t.xp6(3),t.AsE(" ",s.util.translate("Please enter valid Latitude")," & ",s.util.translate("Longitude otherwise app may not work properly.")," "),t.xp6(4),t.hij("",s.util.translate("Latitude")," "),t.xp6(1),t.Q6J("placeholder",s.util.translate("Latitude"))("ngModel",s.lat),t.xp6(4),t.hij("",s.util.translate("Longitude")," "),t.xp6(1),t.Q6J("placeholder",s.util.translate("Longitude"))("ngModel",s.lng),t.xp6(4),t.hij(" ",s.util.translate("Have Multiple Stylist?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",s.have_stylist)("checked",1==s.have_stylist),t.xp6(4),t.hij("",s.util.translate("Have Shop?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",s.have_shop)("checked",1==s.have_shop),t.xp6(4),t.hij(" ",s.util.translate("Do you provide service at home?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",s.service_at_home)("checked",1==s.service_at_home),t.xp6(2),t.Q6J("ngIf","create"==s.action),t.xp6(1),t.Q6J("ngIf","update"==s.action),t.xp6(2),t.hij(" ",s.util.translate("Close")," "))},dependencies:[u.sg,u.O5,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,m.Ro,d.LS,v.xr,f.oB,C.O,h.FzQ,h.yfq,d._s],styles:['@charset "UTF-8";']}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(j),g.Bz]}),n})();var D=r(9241);let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,F,c.u5,m.ef,d.JX,v.hx.forRoot({animation:"progress-dark"}),D.P4,f.zk,C.Z.forRoot(),h.ejP,h.hJ1,h.ga2,h.kWm,h.m81,h.Xo8,h.dTQ,h.zE6]}),n})()}}]);