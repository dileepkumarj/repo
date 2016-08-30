import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router'
import {RouteConfig} from 'angular2/router'
import {Control,ControlGroup,FormBuilder,Validators,NgFormModel} from 'angular2/common'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
@Component({
    selector: 'register4',
    templateUrl:"views/login&register/Registration4.html",
    directives:[ROUTER_DIRECTIVES]
})
export class Registration4Component {
    clients=[];
    testimoials=[];
    register;
constructor(private router:Router){
     this.register = JSON.parse(localStorage.getItem('registration'));
     if(this.register.clients) this.clients=this.register.clients;
     if (this.register.testimonials) this.testimoials=this.register.testimonials;
this.clientadd();
this.testimonialadd();
}
clientadd(){
this.clients.push({clientname:'',image:''});
}
testimonialadd(){
this.testimoials.push({email:'',comments:''});
}
submit(){
this.register.clients=this.clients;
this.register.testimonials=this.testimoials;
console.log(JSON.stringify(this.register) );
}
}