import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteConfig} from 'angular2/router';
import {RequirementService} from '../Services/requirements.service';
import {HeaderComponent} from '../Common/header.component';

@Component({
    selector: 'connections',
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    templateUrl: "views/Requirements/requirements.html",
    providers: [RequirementService],
    // styleUrls:['html/build/css/style.css']
})
export class RequirementsComponent {
    Orgid;
    requirementList;
    constructor(private router: Router, private _service: RequirementService) {
        this.Orgid = '00147';
        this.getrequirement(this.Orgid);
    }
    getrequirement(id) {
        this._service.getMyrequirements(id)
            .subscribe(
            data => {
                this.requirementList = data.response;
                console.log(data);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
    Anotherdate;
 setDate(date) {
    this.Anotherdate =new Date(date);
    return this.Anotherdate;
  }
}