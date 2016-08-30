import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router,RouteConfig,Location,RouterLink} from 'angular2/router'
@Component({
    selector: 'headsec',
    directives:[ROUTER_DIRECTIVES],
    templateUrl:"views/Common/header.html",
})
export class HeaderComponent{
constructor(private router:Router){}
 isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }

}