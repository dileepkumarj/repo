import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteConfig, RouteParams} from 'angular2/router'
import {Control, ControlGroup, FORM_DIRECTIVES, Validators, FORM_BINDINGS} from 'angular2/common'
import {RegisterService} from '../Services/register.Service'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
@Component({
  selector: 'password',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, ErrorMessages],
  templateUrl: "views/login&register/password.html",
  providers: [RegisterService]
})

export class PasswordComponent {
  public passwordForm: ControlGroup;
  matched;
  organisationid;
  constructor(private router: Router, private _httpservice: RegisterService, params: RouteParams) {
    this.organisationid = params.get('organisationid');
    this.organisationid = atob(this.organisationid);
    this.passwordForm = new ControlGroup({
      password1: new Control('', Validators.required),
      password2: new Control('', Validators.required)
    });
    //this.customValidator = this.customValidator.bind(this); 
  }

  customValidator(val1, val2) {
    // check if control is equal to the password1 control
    if (val1.value == val2.value) {
      this.matched = true;
    } else {
      this.matched = false;
      return { 'equal': true };
    }
  }
  data = [];

  submit(orgid, val) {
    this.data.organisationid = orgid;
    this.data.password = val.password1;
    this._httpservice.setpassword(this.data)
      .subscribe(
      data => {
        if (data.response.status == 1) {
          this.router.navigate(['Connections']);
        }
      },
      error => alert(error),
      () => console.log("everything going good")
      );

  }
}
