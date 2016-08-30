import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {RegisterService} from '../Services/register.Service'
@Component({
  selector: 'Validating',
  directives: [ROUTER_DIRECTIVES],
 template:`Validating please wait`,
  providers: [RegisterService]
})
export class ValidateLinkedin{
  localdata1;
  constructor(private router: Router, private _httpservice: RegisterService) {
    this.localdata1=localStorage.getItem('ProfileDetails');
        this.localdata1=JSON.parse(this.localdata1);
        if(this.localdata1!==undefined){
var email=this.localdata1.emailAddress;
var id=this.localdata1.id;
this.validate(email,id);
        }
  }
  validate(email,id){
this._httpservice.validate(email,id)
.subscribe(
  data=>{
    if(data.response.status==1){
      this.router.navigate(['LinkedinReg']);
    }else if(data.response.status==0){
      localStorage.removeItem('ProfileDetails');
      localStorage.removeItem('CompanyDetails');
      localStorage.setItem('authemail',data.response.results[0].ad_email);
      localStorage.setItem('orgid',data.response.results[0].ad_organisation_id);
      this.router.navigateByUrl('/connections');
    }
  },
  error=>console.log(error),
()=>console.log('going well')
);
  }

}