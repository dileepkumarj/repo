import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router,RouteConfig} from 'angular2/router';
import {RequirementService} from '../Services/requirements.service';
import {HeaderComponent} from '../Common/header.component';

@Component({
    selector: 'connections',
    directives:[ROUTER_DIRECTIVES,HeaderComponent],
    templateUrl:"views/Home/home.html",
    providers:[RequirementService],
   // styleUrls:['html/build/css/style.css']
})
export class HomeComponent{
    Orgid;
    connectionList;
    requirementList
     constructor(private router:Router,private _service:RequirementService) {
          this.Orgid='00147';
          this.getRequirements(this.Orgid);
     }
     getRequirements(id){
       this._service.getMyconReq(id)
       .subscribe(
            data => {
            this.requirementList = data.response.connection;
            console.log(this.connectionList);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
   }
}