"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[617],{1617:(B,p,r)=>{r.r(p),r.d(p,{SalonsModule:()=>Y});var u=r(6895),g=r(9455),Z=r(5226),_=r.n(Z),t=r(4650),T=r(5830),x=r(7241),h=r(4006),m=r(8423),d=r(4333),v=r(502),f=r(388),C=r(324),c=r(4980);const S=["myModal2"];function y(s,a){if(1&s&&(t.TgZ(0,"div",54)(1,"label"),t._uU(2),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.Oqu(e.util.translate("No Data Found.."))}}function A(s,a){1&s&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",55),t.qZA())}const M=function(){return[1,2,3,4,1,2,3,4,5,5,6,1]};function b(s,a){1&s&&(t.TgZ(0,"tr"),t.YNc(1,A,2,0,"td",13),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,M)))}function w(s,a){1&s&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function J(s,a){if(1&s&&(t.TgZ(0,"span")(1,"p",64),t._uU(2),t.YNc(3,w,2,0,"span",14),t.qZA()()),2&s){const e=a.$implicit,o=a.index,i=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name," "),t.xp6(1),t.Q6J("ngIf",o!=i.web_cates_data.length-1)}}function N(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"th",56),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",57),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",58),t.YNc(11,J,4,2,"span",13),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"c-form-check",49)(16,"input",59),t.NdJ("change",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeShop(n))}),t.qZA()()(),t.TgZ(17,"td")(18,"c-form-check",49)(19,"input",59),t.NdJ("change",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeStylist(n))}),t.qZA()()(),t.TgZ(20,"td")(21,"c-form-check",49)(22,"input",59),t.NdJ("change",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeServiceAtHome(n))}),t.qZA()()(),t.TgZ(23,"td")(24,"c-form-check",49)(25,"input",59),t.NdJ("change",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changeHome(n))}),t.qZA()()(),t.TgZ(26,"td")(27,"c-form-check",49)(28,"input",59),t.NdJ("change",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.changePopular(n))}),t.qZA()()(),t.TgZ(29,"td")(30,"div",60)(31,"c-badge",61),t.NdJ("click",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.statusUpdate(n))}),t._uU(32),t.qZA(),t.TgZ(33,"c-badge",62),t.NdJ("click",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.updateInfo(n.id,n.uid))}),t._uU(34),t.qZA(),t.TgZ(35,"c-badge",63),t.NdJ("click",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteItem(n))}),t._uU(36),t.qZA()()()()}if(2&s){const e=a.$implicit,o=t.oxw();t.xp6(2),t.hij(" ",e.id," "),t.xp6(2),t.Q6J("src",o.api.imageUrl+e.cover,t.LSH),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e&&e.city_data&&e.city_data.name&&null!=e.city_data.name?e.city_data.name:""," "),t.xp6(3),t.Q6J("ngForOf",e.web_cates_data),t.xp6(2),t.AsE(" ",e.rating," / ",e.total_rating," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.have_shop),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.have_stylist),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.service_at_home),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.in_home),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("checked",1==e.popular),t.xp6(3),t.Tol(1==e.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==e.status?"success":"dark"),t.xp6(1),t.hij(" ",o.util.translate(1==e.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",o.util.translate("Edit")," "),t.xp6(2),t.hij(" ",o.util.translate("Delete")," ")}}function E(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",65),t.NdJ("pageChange",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.page=i)}),t.qZA()()}}function U(s,a){if(1&s&&(t.TgZ(0,"div",32)(1,"div",33)(2,"h4"),t._uU(3),t.qZA()()()),2&s){const e=t.oxw();t.xp6(3),t.hij("",e.util.translate("Owner Details")," ")}}function q(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",39)(2,"div",34)(3,"div",36)(4,"input",68),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.email=i)}),t.qZA()()()(),t.TgZ(5,"div",39)(6,"div",34)(7,"div",36)(8,"input",69),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.password=i)}),t.qZA()()()()()}if(2&s){const e=t.oxw(2);t.xp6(4),t.Q6J("placeholder",e.util.translate("Email"))("ngModel",e.email),t.xp6(4),t.Q6J("placeholder",e.util.translate("Password"))("ngModel",e.password)}}function H(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",39)(2,"div",34)(3,"div",36)(4,"input",66),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.country_code=i)}),t.qZA()()()(),t.TgZ(5,"div",39)(6,"div",34)(7,"div",36)(8,"input",42),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.mobile=i)}),t.qZA()()()()()}if(2&s){const e=t.oxw(2);t.xp6(4),t.Q6J("placeholder",e.util.translate("Country Code"))("ngModel",e.country_code),t.xp6(4),t.Q6J("placeholder",e.util.translate("Mobile"))("ngModel",e.mobile)}}function I(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",39)(2,"div",34)(3,"select",40),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw(2);return t.KtG(n.gender=i)}),t.TgZ(4,"option",70),t._uU(5),t.qZA(),t.TgZ(6,"option",71),t._uU(7),t.qZA()()()()()}if(2&s){const e=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.gender),t.xp6(2),t.hij(" ",e.util.translate("Male")," "),t.xp6(2),t.hij(" ",e.util.translate("Female")," ")}}function Q(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",2)(2,"div",39)(3,"div",34)(4,"div",36)(5,"input",66),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.firstName=i)}),t.qZA()()()(),t.TgZ(6,"div",39)(7,"div",34)(8,"div",36)(9,"input",37),t.NdJ("ngModelChange",function(i){t.CHM(e);const n=t.oxw();return t.KtG(n.lastName=i)}),t.qZA()()()()(),t.YNc(10,q,9,4,"div",67),t.YNc(11,H,9,4,"div",67),t.YNc(12,I,8,3,"div",67),t.qZA()}if(2&s){const e=t.oxw();t.xp6(5),t.Q6J("placeholder",e.util.translate("First Name"))("ngModel",e.firstName),t.xp6(4),t.Q6J("placeholder",e.util.translate("Last Name"))("ngModel",e.lastName),t.xp6(1),t.Q6J("ngIf","create"==e.action),t.xp6(1),t.Q6J("ngIf","create"==e.action),t.xp6(1),t.Q6J("ngIf","create"==e.action)}}function k(s,a){if(1&s&&(t.TgZ(0,"option",72),t._uU(1),t.qZA()),2&s){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function j(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"button",73),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.createSalon())}),t._uU(1),t.qZA()}if(2&s){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save changes")," ")}}function F(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"button",73),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.updateSalon())}),t._uU(1),t.qZA()}if(2&s){const e=t.oxw();t.xp6(1),t.hij(" ",e.util.translate("Save changes")," ")}}const D=function(s){return{id:"pagin1",itemsPerPage:10,currentPage:s}},G=[{path:"",component:(()=>{class s{constructor(e,o){this.api=e,this.util=o,this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.gender="1",this.cover="",this.categories=[],this.usertype=[],this.selectedItems=[],this.cities=[],this.lat="",this.name="",this.address="",this.have_shop=!1,this.service_at_home=!1,this.have_stylist=!1,this.lng="",this.about="",this.website="",this.cityID="",this.zipcode="",this.dropdownSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0},this.salons=[],this.dummySalons=[],this.salonId="",this.salonUID="",this.action="create",this.page=1,this.rate="",this.getAllSalon(),this.getAllCates(),this.getAllCities()}ngOnInit(){}getAllSalon(){this.salons=[],this.dummySalons=Array(5),this.api.get_private("v1/salon/getAll").then(e=>{this.dummySalons=[],e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.salons=e.data,console.log("====",this.salons)))},e=>{this.dummySalons=[],console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.dummySalons=[],console.log("Err",e),this.util.apiErrorHandler(e)})}preview_banner(e){console.log("fle",e),0!=e.length&&null!=e[0].type.match(/image\/*/)&&(e?(console.log("ok"),this.util.show(),this.api.uploadFile(e).subscribe(i=>{console.log("==>>>>>>",i.data),this.util.hide(),i&&i.data&&(this.cover=i.data)},i=>{console.log(i),this.util.hide()})):console.log("no"))}getAllCates(){this.api.get_private("v1/category/getAll").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.categories=e.data,console.log("====",this.categories)))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}getAllCities(){this.api.get_private("v1/cities/getAll").then(e=>{e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e.data.length>0&&(this.cities=e.data))},e=>{console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{console.log("Err",e),this.util.apiErrorHandler(e)})}exportCSV(){}importCSV(){}createNew(){this.action="create",this.myModal2.show()}createSalon(){if(console.log("create salon"),console.log(this.firstName),console.log(this.lastName),console.log(this.email),console.log(this.password),console.log(this.country_code),console.log(this.mobile),console.log(this.selectedItems),console.log(this.cityID),console.log(this.zipcode),console.log(this.lat),console.log(this.lng),console.log(this.cover),console.log(this.have_shop),console.log(this.have_stylist),console.log(this.service_at_home),""==this.firstName||""==this.lastName||""==this.email||""==this.password||""==this.country_code||""==this.mobile||this.selectedItems.length<=0||""==this.cityID||""==this.rate||""==this.zipcode||""==this.lat||""==this.lng||""==this.about||""==this.address||null==this.mobile||""==this.cover||""==this.name)return this.util.error(this.util.translate("All Fields are required")),!1;if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email))return this.util.error(this.util.translate("Please enter valid Email ID")),!1;console.log(typeof this.country_code),this.country_code.toString().includes("+")||(this.country_code="+"+this.country_code);const i={first_name:this.firstName,last_name:this.lastName,gender:this.gender,cover:this.cover,mobile:this.mobile,email:this.email,country_code:this.country_code,password:this.password};this.util.show(),this.api.post_private("v1/auth/createSalonAccount",i).then(n=>{if(this.util.hide(),console.log(n),500==n.status&&this.util.error(n.message),n&&n.status&&200==n.status&&n.user&&n.user.id)console.log(n),this.saveSalonProfile(n.user.id);else if(n&&n.error&&n.error.msg)this.util.error(n.error.msg);else if(n&&n.error&&"Validation Error."==n.error.message)for(let l in n.error[0])console.log(n.error[0][l][0]),this.util.error(n.error[0][l][0]);else this.util.error(this.util.translate("Something went wrong"))},n=>{if(console.log(n),this.util.hide(),n&&n.error&&500==n.error.status&&n.error.message)this.util.error(n.error.message);else if(n&&n.error&&n.error.error&&422==n.error.status)for(let l in n.error.error)console.log(n.error.error[l][0]),this.util.error(n.error.error[l][0]);else this.util.error(this.util.translate("Something went wrong"))}).catch(n=>{if(console.log(n),this.util.hide(),n&&n.error&&500==n.error.status&&n.error.message)this.util.error(n.error.message);else if(n&&n.error&&n.error.error&&422==n.error.status)for(let l in n.error.error)console.log(n.error.error[l][0]),this.util.error(n.error.error[l][0]);else this.util.error(this.util.translate("Something went wrong"))})}saveSalonProfile(e){console.log("uid",e);const o=this.selectedItems.map(n=>n.id);console.log(o);const i={uid:e,name:this.name,status:1,lat:this.lat,lng:this.lng,cover:this.cover,categories:o.join(),address:this.address,about:this.about,images:"NA",cid:this.cityID,zipcode:this.zipcode,rating:0,total_rating:0,website:"NA",timing:"NA",verified:1,available:1,have_shop:1==this.have_shop?1:0,service_at_home:1==this.service_at_home?1:0,have_stylist:1==this.have_stylist?1:0,popular:0,in_home:1,extra_field:"NA",rate:this.rate};this.util.show(),this.api.post_private("v1/salon/create",i).then(n=>{console.log("+++++++++++++++",n),this.util.hide(),n&&n.status&&200==n.status&&n.success&&(this.myModal2.hide(),this.getAllSalon(),this.clearData(),this.util.success(this.util.translate("Salon added !")))},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}clearData(){this.firstName="",this.lastName="",this.email="",this.password="",this.country_code="",this.mobile="",this.selectedItems=[],this.name="",this.cityID="",this.zipcode="",this.lat="",this.lng="",this.about="",this.cover="",this.have_shop=!1,this.have_stylist=!1,this.service_at_home=!1,this.rate=""}changeShop(e){console.log(e);const o={id:e.id,have_shop:0==e.have_shop?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}changeHome(e){console.log(e);const o={id:e.id,in_home:0==e.in_home?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}changePopular(e){console.log(e);const o={id:e.id,popular:0==e.popular?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}changeStylist(e){console.log(e);const o={id:e.id,have_stylist:0==e.have_stylist?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}changeServiceAtHome(e){console.log(e);const o={id:e.id,service_at_home:0==e.service_at_home?1:0};console.log("======",o),this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{this.util.hide(),console.log("+++++++++++++++",i),i&&i.status&&200==i.status&&i.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}deleteItem(e){console.log(e),_().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To delete this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(o=>{if(o&&o.value){console.log("update it"),console.log(e),console.log(e);const i={id:e.id,uid:e.uid};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/destroy",i).then(n=>{this.util.hide(),console.log("+++++++++++++++",n),n&&n.status&&200==n.status&&n.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}})}updateInfo(e,o){console.log(e,o),this.salonId=e,this.salonUID=o,this.util.show(),this.api.post_private("v1/salon/getById",{id:o}).then(i=>{console.log(i),this.util.hide(),i&&i.status&&200==i.status&&(this.action="update",this.selectedItems=i.data.web_cates_data,this.cityID=i.data.cid,this.zipcode=i.data.zipcode,this.lat=i.data.lat,this.lng=i.data.lng,this.about=i.data.about,this.cover=i.data.cover,this.name=i.data.name,this.address=i.data.address,this.have_shop=i.data.have_shop,this.have_stylist=i.data.have_stylist,this.service_at_home=i.data.service_at_home,this.myModal2.show())}).catch(i=>{console.log(i),this.util.hide(),this.util.apiErrorHandler(i)})}statusUpdate(e){console.log(e),_().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To update this item?"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(o=>{if(o&&o.value){console.log("update it");const i={id:e.id,status:0==e.status?1:0};console.log("======",i),this.util.show(),this.api.post_private("v1/salon/update",i).then(n=>{this.util.hide(),console.log("+++++++++++++++",n),n&&n.status&&200==n.status&&n.success&&(this.util.success(this.util.translate("Status Updated !")),this.getAllSalon())},n=>{this.util.hide(),console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{this.util.hide(),console.log("Err",n),this.util.apiErrorHandler(n)})}})}updateSalon(){if(""==this.cover||""==this.name||""==this.address||""==this.rate||""==this.about||""==this.cityID||""==this.zipcode||""==this.lat||""==this.lng)return this.util.error(this.util.translate("All Fields are required")),!1;const e=this.selectedItems.map(i=>i.id);console.log(e);const o={id:this.salonId,name:this.name,lat:this.lat,lng:this.lng,cover:this.cover,categories:e.join(),address:this.address,about:this.about,cid:this.cityID,zipcode:this.zipcode,have_shop:1==this.have_shop?1:0,service_at_home:1==this.service_at_home?1:0,have_stylist:1==this.have_stylist?1:0,rate:this.rate};this.util.show(),this.api.post_private("v1/salon/update",o).then(i=>{console.log("+++++++++++++++",i),this.util.hide(),i&&i.status&&200==i.status&&i.success&&(this.myModal2.hide(),this.getAllSalon(),this.clearData(),this.util.success(this.util.translate("Salon updated !")))},i=>{this.util.hide(),console.log("Error",i),this.util.apiErrorHandler(i)}).catch(i=>{this.util.hide(),console.log("Err",i),this.util.apiErrorHandler(i)})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(T.s),t.Y36(x.f))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-salons"]],viewQuery:function(e,o){if(1&e&&t.Gf(S,5),2&e){let i;t.iGM(i=t.CRH())&&(o.myModal2=i.first)}},decls:145,vars:74,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["type","submit",1,"btn","btn-sm","btn-primary",2,"float","right","margin","0px 5px",3,"click"],[1,"card-body"],["class","error_div",4,"ngIf"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["myModal2","bs-modal"],["role","document",1,"modal-dialog","modal-primary","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"logoContainer"],["onError","this.src='assets/img/dummy.jpeg'",3,"src"],[1,"fileContainer","sprite"],["type","file","value","Choose File",3,"change"],[1,"center-data-helper","mb-5"],[1,"card","card-profile","shadow"],["class","card-header text-center border-0",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"card-header","text-center","border-0"],[1,"d-flex","justify-content-start"],[1,"form-group"],["maxHeight","100",3,"placeholder","data","ngModel","settings","ngModelChange"],[1,"input-group","input-group-alternative"],["type","text","id","input-last-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["rows","3",1,"form-control","form-control-alternative",3,"ngModel","placeholder","ngModelChange"],[1,"col-lg-6"],["id","select2","name","select2",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","number","id","input-last-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],[1,"center-data-helper"],[1,"text-heler"],["href","https://www.mapcoordinates.net/en","target","_blank","rel","noopener noreferrer",2,"color","blue !important"],["for","input-email",1,"form-control-label"],["type","text","id","input-email",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],[1,"col-lg-4"],[3,"switch"],["cFormCheckInput","","type","checkbox",3,"ngModel","checked","ngModelChange"],[1,"modal-footer"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"error_div"],["count","1","appearance","line"],["scope","row"],[1,"img-responsive",2,"height","40px","width","40px","object-fit","cover",3,"src"],[2,"width","100px","display","flex","flex-direction","column","overflow","scroll"],["cFormCheckInput","","type","checkbox",3,"checked","change"],[1,"d-flex","align-items-center"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],[2,"font-size","10px","margin","0px"],["id","pagin1",3,"pageChange"],["type","text","id","input-first-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["class","row",4,"ngIf"],["type","email","id","input-first-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["type","password","id","input-last-name",1,"form-control","form-control-alternative",3,"placeholder","ngModel","ngModelChange"],["value","1"],["value","0"],[3,"value"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,o){if(1&e){const i=t.EpF();t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return o.createNew()}),t._uU(9),t.qZA(),t._uU(10," \xa0 "),t.qZA()(),t.TgZ(11,"div",8),t.YNc(12,y,3,1,"div",9),t.TgZ(13,"table",10)(14,"thead",11)(15,"tr")(16,"th",12),t._uU(17),t.qZA(),t.TgZ(18,"th",12),t._uU(19),t.qZA(),t.TgZ(20,"th",12),t._uU(21),t.qZA(),t.TgZ(22,"th",12),t._uU(23),t.qZA(),t.TgZ(24,"th",12),t._uU(25),t.qZA(),t.TgZ(26,"th",12),t._uU(27),t.qZA(),t.TgZ(28,"th",12),t._uU(29),t.qZA(),t.TgZ(30,"th",12),t._uU(31),t.qZA(),t.TgZ(32,"th",12),t._uU(33),t.qZA(),t.TgZ(34,"th",12),t._uU(35),t.qZA(),t.TgZ(36,"th",12),t._uU(37),t.qZA(),t.TgZ(38,"th",12),t._uU(39),t.qZA()()(),t.TgZ(40,"tbody"),t.YNc(41,b,2,2,"tr",13),t.YNc(42,N,37,23,"tr",13),t.ALo(43,"paginate"),t.qZA()(),t.YNc(44,E,2,0,"div",14),t.qZA()()()()(),t.TgZ(45,"div",15,16)(47,"div",17)(48,"div",18)(49,"div",19)(50,"h5",20),t._uU(51),t.qZA(),t.TgZ(52,"button",21),t.NdJ("click",function(){t.CHM(i);const l=t.MAs(46);return t.KtG(l.hide())}),t.TgZ(53,"span",22),t._uU(54,"\xd7"),t.qZA()()(),t.TgZ(55,"div",23)(56,"div",24),t._UZ(57,"img",25),t.qZA(),t.TgZ(58,"div",26)(59,"span"),t._uU(60),t.qZA(),t.TgZ(61,"input",27),t.NdJ("change",function(l){return o.preview_banner(l.target.files)}),t.qZA()(),t._UZ(62,"div",28),t.TgZ(63,"div",29),t.YNc(64,U,4,1,"div",30),t.YNc(65,Q,13,7,"div",31),t.TgZ(66,"div",32)(67,"div",33)(68,"h4"),t._uU(69),t.qZA()()(),t.TgZ(70,"div",8)(71,"div",2)(72,"div",3)(73,"div",34)(74,"ng-multiselect-dropdown",35),t.NdJ("ngModelChange",function(l){return o.selectedItems=l}),t.qZA()()(),t.TgZ(75,"div",3)(76,"div",34)(77,"ng-multiselect-dropdown",35),t.NdJ("ngModelChange",function(l){return o.selectedItems=l}),t.qZA()()(),t.TgZ(78,"div",3)(79,"div",34)(80,"div",36)(81,"input",37),t.NdJ("ngModelChange",function(l){return o.name=l}),t.qZA()()()(),t.TgZ(82,"div",3)(83,"div",34)(84,"div",36)(85,"textarea",38),t.NdJ("ngModelChange",function(l){return o.about=l}),t.qZA()()()(),t.TgZ(86,"div",3)(87,"div",34)(88,"div",36)(89,"textarea",38),t.NdJ("ngModelChange",function(l){return o.address=l}),t.qZA()()()(),t.TgZ(90,"div",39)(91,"div",34)(92,"select",40),t.NdJ("ngModelChange",function(l){return o.cityID=l}),t.YNc(93,k,2,2,"option",41),t.qZA()()(),t.TgZ(94,"div",39)(95,"div",34)(96,"div",36)(97,"input",37),t.NdJ("ngModelChange",function(l){return o.zipcode=l}),t.qZA()()()(),t.TgZ(98,"div",39)(99,"div",34)(100,"div",36)(101,"input",42),t.NdJ("ngModelChange",function(l){return o.rate=l}),t.qZA()()()(),t.TgZ(102,"div",43)(103,"p",44),t._uU(104),t.TgZ(105,"a",45),t._uU(106,"https://www.mapcoordinates.net/en"),t.qZA()(),t.TgZ(107,"p",44),t._uU(108),t.qZA()(),t.TgZ(109,"div",39)(110,"div",34)(111,"label",46),t._uU(112),t.qZA(),t.TgZ(113,"input",47),t.NdJ("ngModelChange",function(l){return o.lat=l}),t.qZA()()(),t.TgZ(114,"div",39)(115,"div",34)(116,"label",46),t._uU(117),t.qZA(),t.TgZ(118,"input",47),t.NdJ("ngModelChange",function(l){return o.lng=l}),t.qZA()()(),t.TgZ(119,"div",48)(120,"div",34)(121,"label",46),t._uU(122),t.qZA(),t._UZ(123,"br"),t.TgZ(124,"c-form-check",49)(125,"input",50),t.NdJ("ngModelChange",function(l){return o.have_stylist=l}),t.qZA()()()(),t.TgZ(126,"div",48)(127,"div",34)(128,"label",46),t._uU(129),t.qZA(),t._UZ(130,"br"),t.TgZ(131,"c-form-check",49)(132,"input",50),t.NdJ("ngModelChange",function(l){return o.have_shop=l}),t.qZA()()()(),t.TgZ(133,"div",48)(134,"div",34)(135,"label",46),t._uU(136),t.qZA(),t._UZ(137,"br"),t.TgZ(138,"c-form-check",49)(139,"input",50),t.NdJ("ngModelChange",function(l){return o.service_at_home=l}),t.qZA()()()()()()()(),t.TgZ(140,"div",51),t.YNc(141,j,2,1,"button",52),t.YNc(142,F,2,1,"button",52),t.TgZ(143,"button",53),t.NdJ("click",function(){t.CHM(i);const l=t.MAs(46);return t.KtG(l.close())}),t._uU(144),t.qZA()()()()()}2&e&&(t.xp6(6),t.hij(" ",o.util.translate("All Salons")," "),t.xp6(3),t.hij(" ",o.util.translate("Add New")," "),t.xp6(3),t.Q6J("ngIf",(null==o.salons?null:o.salons.length)<=0&&(null==o.dummySalons?null:o.dummySalons.length)<=0),t.xp6(5),t.hij("",o.util.translate("Id")," "),t.xp6(2),t.hij("",o.util.translate("Cover")," "),t.xp6(2),t.hij("",o.util.translate("Name")," "),t.xp6(2),t.hij("",o.util.translate("City")," "),t.xp6(2),t.hij("",o.util.translate("Categories")," "),t.xp6(2),t.hij("",o.util.translate("Rating")," "),t.xp6(2),t.hij("",o.util.translate("Have Shop")," "),t.xp6(2),t.hij("",o.util.translate("Have Stylist")," "),t.xp6(2),t.hij("",o.util.translate("Service At Home")," "),t.xp6(2),t.hij("",o.util.translate("In Home")," "),t.xp6(2),t.hij("",o.util.translate("Is Popular")," "),t.xp6(2),t.hij("",o.util.translate("Action")," "),t.xp6(2),t.Q6J("ngForOf",o.dummySalons),t.xp6(1),t.Q6J("ngForOf",t.xi3(43,69,o.salons,t.VKq(72,D,o.page))),t.xp6(2),t.Q6J("ngIf",(null==o.salons?null:o.salons.length)>0),t.xp6(7),t.hij("",o.util.translate("Manage Salon")," "),t.xp6(6),t.Q6J("src",o.api.imageUrl+o.cover,t.LSH),t.xp6(3),t.hij(" ",o.util.translate("Add Cover")," "),t.xp6(4),t.Q6J("ngIf","create"==o.action),t.xp6(1),t.Q6J("ngIf","create"==o.action),t.xp6(4),t.hij("",o.util.translate("Salon Details")," "),t.xp6(5),t.Q6J("placeholder",o.util.translate("Top Category"))("data",o.categories)("ngModel",o.selectedItems)("settings",o.dropdownSettings),t.xp6(3),t.Q6J("placeholder",o.util.translate("User Type"))("data",o.categories)("ngModel",o.selectedItems)("settings",o.dropdownSettings),t.xp6(4),t.Q6J("placeholder",o.util.translate("Salon Name"))("ngModel",o.name),t.xp6(4),t.Q6J("ngModel",o.about)("placeholder",o.util.translate("Brief of salon")),t.xp6(4),t.Q6J("ngModel",o.address)("placeholder",o.util.translate("Salon Address")),t.xp6(3),t.Q6J("ngModel",o.cityID),t.xp6(1),t.Q6J("ngForOf",o.cities),t.xp6(4),t.Q6J("placeholder",o.util.translate("Zipcode"))("ngModel",o.zipcode),t.xp6(4),t.Q6J("placeholder",o.util.translate("Commission Rate"))("ngModel",o.rate),t.xp6(3),t.AsE("",o.util.translate("Select Latitude")," & ",o.util.translate("Longitude From here"),": "),t.xp6(4),t.AsE(" ",o.util.translate("Please enter valid Latitude")," & ",o.util.translate("Longitude otherwise app may not work properly.")," "),t.xp6(4),t.hij("",o.util.translate("Latitude")," "),t.xp6(1),t.Q6J("placeholder",o.util.translate("Latitude"))("ngModel",o.lat),t.xp6(4),t.hij("",o.util.translate("Longitude")," "),t.xp6(1),t.Q6J("placeholder",o.util.translate("Longitude"))("ngModel",o.lng),t.xp6(4),t.hij(" ",o.util.translate("Have Multiple Stylist?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",o.have_stylist)("checked",1==o.have_stylist),t.xp6(4),t.hij("",o.util.translate("Have Shop?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",o.have_shop)("checked",1==o.have_shop),t.xp6(4),t.hij(" ",o.util.translate("Do you provide service at home?")," "),t.xp6(2),t.Q6J("switch",!0),t.xp6(1),t.Q6J("ngModel",o.service_at_home)("checked",1==o.service_at_home),t.xp6(2),t.Q6J("ngIf","create"==o.action),t.xp6(1),t.Q6J("ngIf","update"==o.action),t.xp6(2),t.hij(" ",o.util.translate("Close")," "))},dependencies:[u.sg,u.O5,h.YN,h.Kr,h.Fj,h.wV,h.Wl,h.EJ,h.JJ,h.On,m.Ro,d.LS,v.xr,f.oB,C.O,c.FzQ,c.yfq,d._s],styles:['@charset "UTF-8";']}),s})()}];let K=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.Bz.forChild(G),g.Bz]}),s})();var z=r(9241);let Y=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,K,h.u5,m.ef,d.JX,v.hx.forRoot({animation:"progress-dark"}),z.P4,f.zk,C.Z.forRoot(),c.ejP,c.hJ1,c.ga2,c.kWm,c.m81,c.Xo8,c.dTQ,c.zE6]}),s})()}}]);