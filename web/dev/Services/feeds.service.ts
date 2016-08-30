import {Injectable} from 'angular2/core';
import {Http,Headers,Response} from 'angular2/http';
import 'rxjs/add/operator/map'
import myGlobals = require('../globals');
@Injectable()
export class feedsService{
    
    constructor(private _http:Http){}
getmyfeeds(data){
     var body={"organisationid":data};
      let request= JSON.stringify(body);
      var headers = new Headers();
      headers.append('Content-Type','application/json; charset=utf-8');
return this._http.post(myGlobals.Url+'/api/myfeeds',request,{headers:headers})
        .map(res => res.json());
}
}