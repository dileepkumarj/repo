import {Injectable} from 'angular2/core';
import {Http,Headers,Response} from 'angular2/http';
import 'rxjs/add/operator/map'
import myGlobals = require('../globals');
@Injectable()
export class ProfileService{
    
    constructor(private _http:Http){}
    //start testimonials
Request(data){
     
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/testmonial-request',request,{headers:headers})
        .map(res => res.json());
}
PostTestim(data){
     
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/confirm-testmonials',request,{headers:headers})
        .map(res => res.json());
}
getTestim(data){
      var body={"organisationid":data};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-testmonials',request,{headers:headers})
        .map(res => res.json());
}
delTestim(id,pid){
      var body={"organisationid":id,"testmonialid":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/delete-testmonial',request,{headers:headers})
        .map(res => res.json());
}
//end testimonials
//start clients
getClients(data){
      var body={"organisationid":data};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-clients',request,{headers:headers})
        .map(res => res.json());
}
postClients(data){
      var body={"organisationid":data.organisationid,"clientname":data.clientname,"clientlogo":data.clientlogo};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-clients',request,{headers:headers})
        .map(res => res.json());
}
deleteClients(id,sno){
      var body={"organisationid":id,"clientid":sno};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/delete-clients',request,{headers:headers})
        .map(res => res.json());
}
//end clients
//start portofolio services
addPortofolio(data){
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-portfolio',request,{headers:headers})
        .map(res => res.json());
}
getportofolio(id){
      var body={"organisationid":id};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-portfolio',request,{headers:headers})
        .map(res => res.json());
}
deleteportofolio(id,pid){
      var body={"organisationid":id,"portfolioid":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/delete-portfolio',request,{headers:headers})
        .map(res => res.json());
}
//End portofolio services
//start awards services
addawards(data){
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-accrediationawards',request,{headers:headers})
        .map(res => res.json());
}
getawards(id){
       var body={"organisationid":id};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-awards',request,{headers:headers})
        .map(res => res.json());
}
deleteawards(id,pid){
 var body={"organisationid":id,"awardid":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/delete-awards',request,{headers:headers})
        .map(res => res.json());
}
//end awards services
//address starts here
 countrieslist() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/getcountries', '', { headers: headers })
      .map(res => res.json());
  }
  statelist(id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    var body = { "country_code": id };
    let request = JSON.stringify(body);
    return this._http.post(myGlobals.Url + '/config/getstates', request, { headers: headers })
      .map(res => res.json());
  }
  citylist(id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    var body = { "state_code": id };
    let request = JSON.stringify(body);
    return this._http.post(myGlobals.Url + '/config/getcities', request, { headers: headers })
      .map(res => res.json());
  }
  addaddress(data){
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-address',request,{headers:headers})
        .map(res => res.json());
}
getaddress(id){
 var body={"organisationid":id};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-address',request,{headers:headers})
        .map(res => res.json());
}
deleteaddress(id,pid){
       var body={"organisationid":id,"addressid":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/delete-address',request,{headers:headers})
        .map(res => res.json());
}
//address ends here
//add organizationlogo start
addLogo(data){
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-organisation-logo',request,{headers:headers})
        .map(res => res.json());
}
//add organizationlogo ends
//add/edit coverpage start
addorgLogo(data){
      let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-organisation-coverpic',request,{headers:headers})
        .map(res => res.json());
}
//add/edit coverpage ends
//website url start here
updateurl(id,url){
      var body={"organisationid":id,"websiteurl":url};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-website-url',request,{headers:headers})
        .map(res => res.json());
}
//website url end here
//year of incorp start
yearofinco(id,url){
      var body={"organisationid":id,"year":url};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/established-year',request,{headers:headers})
        .map(res => res.json());
}
//year of incorp start
//organization description start
orgdesc(id,pid){
      var body={"organisationid":id,"orgdescription":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/organisation-description',request,{headers:headers})
        .map(res => res.json());
}
//organization description ends
//turnover apis start
turnover(id,pid){
      var body={"organisationid":id,"turnovervalue":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-turnover-value',request,{headers:headers})
        .map(res => res.json());
}
//turnover api end
//headcount apis start
headcount(id,pid){
      var body={"organisationid":id,"headcountvalue":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-headcount-value',request,{headers:headers})
        .map(res => res.json());
}
//headcount api end
//category apis start
category(id,pid){
      var body={"organisationid":id,"og_category":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-category',request,{headers:headers})
        .map(res => res.json());
}
//category api end
//subcate apis start
subcat(id,pid){
      var body={"organisationid":id,"og_subcategory":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-subcategory',request,{headers:headers})
        .map(res => res.json());
}
//subcate api end
//service sector apis start
servicesec(id,pid){
      var body={"organisationid":id,"og_servicesector":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-service-sector',request,{headers:headers})
        .map(res => res.json());
}
//service category api end
//target market apis start
targmark(id,pid){
      var body={"organisationid":id,"og_targetmarket":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-target-market',request,{headers:headers})
        .map(res => res.json());
}
//target market api end
//org name apis start
orgname(id,pid){
      var body={"organisationid":id,"organisationname":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-organisationname',request,{headers:headers})
        .map(res => res.json());
}
//orgname api end
//orgtyupe apis start
orgtype(id,pid){
      var body={"organisationid":id,"og_types":pid};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-organisation-type',request,{headers:headers})
        .map(res => res.json());
}
//org type api end
//getorgdata start
getorgdata(id){
      var body={"organisationid":id};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-org-data',request,{headers:headers})
        .map(res => res.json());
}
//getorgdata ends
social(data){
        let request= JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/post-social-urls',request,{headers:headers})
        .map(res => res.json());
}
//ORGANIZATION API END
//YOUR INFORMATION APIS--Start
//profilepic start
addPersonalpic(id){
      var body={"organisationid":'',"coverpic":'',"coverstatus":''};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/add-personal-image',request,{headers:headers})
        .map(res => res.json());
}
orgAdminname(id){
        var body={"organisationid":'',"ad_firstname":''};
              let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/organisation-admin-name',request,{headers:headers})
        .map(res => res.json());
}
updateofbth(id){
           var body={"organisationid":'',"dateofbirth":''};
              let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-dateofbirth',request,{headers:headers})
        .map(res => res.json()); 
}
updateadmsts(id){
         var body={"organisationid":'',"ad_firstname":''};
              let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-admin-status',request,{headers:headers})
        .map(res => res.json()); 
}
updategensts(){
      var body={"organisationid":'',"gender":''};
              let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-gender-status',request,{headers:headers})
        .map(res => res.json());    
}
updateadmcno(id,cno){
        var body={"organisationid":id,"contactno":cno};
              let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-admin-contact-no',request,{headers:headers})
        .map(res => res.json());    
}
changepwd(id){
var body={"organisationid":'',"email":'',"oldpassword":'',"newpassword":''};
 let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-admin-password',request,{headers:headers})
        .map(res => res.json());
}
updatedesig(){
        var body={"organisationid":'',"designation":''};
 let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-admin-designation',request,{headers:headers})
        .map(res => res.json());
}
updatedescrip(id,des){
                var body={"organisationid":id,"admindescription":des};
 let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-admin-description',request,{headers:headers})
        .map(res => res.json());
}
updatealtemail(id,eid){
         var body={"organisationid":id,"alternateemail":eid};
 let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/update-admin-alternate-email',request,{headers:headers})
        .map(res => res.json());
}
getdatayouinfo(eid,id){
       var body={"organisationid":id,"email":eid};
 let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/get-admin-data',request,{headers:headers})
        .map(res => res.json());
}
//profilepic ends
//YOUR INFORMATION APIS--End
}