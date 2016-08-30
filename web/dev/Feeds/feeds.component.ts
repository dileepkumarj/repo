import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router,RouteConfig} from 'angular2/router';
import {feedsService} from '../Services/feeds.service';
import {HeaderComponent} from '../Common/header.component';

@Component({
    selector: 'feeds',
    templateUrl: 'views/Feeds/feeds.html',
    directives:[HeaderComponent,ROUTER_DIRECTIVES],
    providers:[feedsService]
})
export class FeedsComponent  {
    Orgid='00147';
    feedsList;
    constructor(private router:Router,private _service:feedsService) { 
this.getmyfeeds();
    }
getmyfeeds(){
this._service.getmyfeeds(this.Orgid)
.subscribe(
    data=>{
this.feedsList=data.response.feeds;
console.log(data);
    },
    error=>{
alert(error);
    },
    ()=>console.log('everything going good')
)
}
 Anotherdate;
 setDate(date) {
    this.Anotherdate =new Date(date);
    return this.Anotherdate;
  }

}