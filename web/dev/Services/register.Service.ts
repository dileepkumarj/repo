import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map'
import myGlobals = require('../globals');
@Injectable()
export class RegisterService {

  constructor(private _http: Http) { }
  signup(body) {
    let request = JSON.stringify(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8')
    return this._http.post(myGlobals.Url + '/api/manualregistration', request, { headers: headers })
      .map(res => res.json());
  }
  login(id,pwd) {
    var headers = new Headers();
     var body = { "loginemail": id, "password": pwd };
    let request = JSON.stringify(body);
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/api/login',request, { headers: headers })
      .map(res => res.json());
  }
  getheadCount() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/getheadcount', '', { headers: headers })
      .map(res => res.json());
  }
  servicesetor() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/servicesector', '', { headers: headers })
      .map(res => res.json());
  }

  serviceCategory() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/servicecategorieslist', '', { headers: headers })
      .map(res => res.json());
  }
  serviceSubCategory(data) {
    var body = { "servicecategory": data };
    let request = JSON.stringify(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/servicesubcategory', request, { headers: headers })
      .map(res => res.json());
  }
  turnovervalue() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/turnovervalue', '', { headers: headers })
      .map(res => res.json());
  }

  targetmarkets() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(myGlobals.Url + '/config/gettargetmarkets', '', { headers: headers })
      .map(res => res.json());
  }
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
  setpassword(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    var body = { "organisationid": data.organisationid, "password": data.password };
    let request = JSON.stringify(body);
    return this._http.post(myGlobals.Url + '/api/setpassword', request, { headers: headers })
      .map(res => res.json());
  }
  linkedinsignup(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let request = JSON.stringify(data);
    return this._http.post(myGlobals.Url + '/api/completelinkedinregistration/', request, { headers: headers })
      .map(res => res.json());
  }
  validate(email, id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    var body = { "linkedinmail": email, "linkedinuserid": id };
    let request = JSON.stringify(body);
    return this._http.post(myGlobals.Url + '/api/linkedinValidation', request, { headers: headers })
      .map(res => res.json());
  }
}