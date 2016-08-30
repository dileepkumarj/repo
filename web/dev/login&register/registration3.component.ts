import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router'
import {RouteConfig} from 'angular2/router'
@Component({
    selector: 'register3',
    templateUrl:"views/login&register/Registration3.html",
    directives:[ROUTER_DIRECTIVES]
})
export class Registration3Component{
    register;
     constructor(private router: Router){
           this.register = JSON.parse(localStorage.getItem('registration'));
           this.add();
     }  
     accredations=[];        
add(){
    this.accredations.push({description:''});
}
next(){
this.register.accrediationawards=this.accredations;
 localStorage.setItem('registration', JSON.stringify(this.register));
        alert(JSON.stringify(this.register));
        this.router.navigate(['Register4']);
}
}