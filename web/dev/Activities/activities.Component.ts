 import {Component} from 'angular2/core';
 import {ROUTER_DIRECTIVES,Router,RouteConfig} from 'angular2/router';
import {HeaderComponent} from '../Common/header.component';
 
 @Component({
   selector: 'Activities',
   templateUrl: 'Views/Activities/activity.html',
   directives:[ROUTER_DIRECTIVES,HeaderComponent],
 })
 
 export class ActivityComponent  {
 Show;
     constructor() { 
         this.Show=0;
     }
 }