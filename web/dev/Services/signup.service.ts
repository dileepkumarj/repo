import {Injectable} from 'angular2/core';
import {Http,Headers,Response} from 'angular2/http';
import 'rxjs/add/operator/map'
import myGlobals = require('../globals');
@Injectable()
export class SignupService{
    constructor(private _http:Http){}
    signup(body){
        let request=JSON.stringify(body);
         var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8')
        return this._http.post(myGlobals.Url+'/api/manualregistration',request,{headers:headers})
     .map(res => res.json());
    }
    login(){
        return this._http.post(myGlobals.Url+'/api/myconnections','')
     .map(res => res.json());
    }
}