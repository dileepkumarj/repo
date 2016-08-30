import {Injectable} from 'angular2/core';
import {Http,Headers,Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import myGlobals = require('../globals');
@Injectable()
export class ConnectionsService{
    constructor(private _http:Http){}
    getConnection(data){
        var body={"organisationid":data};
      let request= JSON.stringify(body);
      var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8');
        return this._http.post(myGlobals.Url+'/api/myconnections',request,{headers:headers})
     .map(res => res.json());
    }
    getfollowers(data){
        var body={organisationid:data};
      let request= JSON.stringify(body);
      var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8');
        return this._http.post(myGlobals.Url+'/api/myfollowers',request,{headers:headers})
     .map(res => res.json());
    }
    getfollowing(data){
        var body={"organisationid":data};
      let request= JSON.stringify(body);
      var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8');
        return this._http.post(myGlobals.Url+'/api/me/following',request,{headers:headers})
     .map(res => res.json());
    }
        confirmconnection(orgid,conid){
        var body={"connection_req_id":orgid,"partner_id":conid};
      let request= JSON.stringify(body);
      var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8');
        return this._http.post(myGlobals.Url+'/api/confirmconnection',request,{headers:headers})
     .map(res => res.json());
    }
        deleteconnection(orgid,conid){
        var body={"connection_req_id":orgid,"partner_id":conid};
      let request= JSON.stringify(body);
      var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8');
        return this._http.post(myGlobals.Url+'/api/deleteconnection',request,{headers:headers})
     .map(res => res.json());
    }
          addconnection(orgid,conid,mes){
        var body={"connection_req_id":orgid,"partner_id":conid,"message":mes};
      let request= JSON.stringify(body);
      var headers = new Headers();
  headers.append('Content-Type','application/json; charset=utf-8');
        return this._http.post(myGlobals.Url+'/api/addconnection',request,{headers:headers})
     .map(res => res.json());
    }
}