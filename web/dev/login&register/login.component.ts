import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {Control, ControlGroup, FormBuilder, Validators, NgFormModel} from 'angular2/common'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
import {RegisterService} from '../Services/register.Service'


@Component({
    selector: 'login',
    directives: [ErrorMessages],
    templateUrl: "views/login&register/Signup.html",
    providers: [RegisterService]
})
export class LoginComponent implements OnInit {
    loginform: ControlGroup;
    signupform: ControlGroup;
    public loginsignup = false;
    typeoforganization = "";
    serviceCategorylist;
    servicesubCategorylist;
    businessDomainlist;
    termsaccepted = false;
    register;
    Signup=0;
    constructor(private _formBuilder: FormBuilder, private router: Router, private _service: RegisterService) {
        this.getServiceCategory();
        this.getbusinessDomain();
    }

    loginSubmit(form) {
        this._service.login(this.loginform.value.username,this.loginform.value.password)
        .subscribe(
            data=>{
                if(data.response.status==1){
                    localStorage.setItem('authemail',this.loginform.value.username);
                    localStorage.setItem('orgid',data.response.og_id);
                    localStorage.setItem('usertype',data.response.logintype);
                    this.router.navigate(['Connections']);
                }else{
                    alert('invalid credentials');
                }
            },
            error=>console.log(error),
            ()=>console.log('everythin')
        );
    }
    signupSubmit() {
        this.signupform.value.serviceprovider = this.typeoforganization;
        this._service.signup(this.signupform.value)
            .subscribe(
            data => {
                //this.register={organisationid:data.organisationid}
                if (data.response.status == -1) {
                    alert("Email Already registerd..!")
                    // this.router.navigate(['login']);
                } else if (data.response.status == 1) {
                this.Signup=data.response.status;
                   // alert("You have Sucessfully Registered Please check your mail and proceed Thank You..!")
                } else {
                    alert("Registration Failed Try after some time");
                }
            },
            error => alert(error),
            () => console.log("everything going good")
            );

    }
    ngOnInit() {
        this.signupform = this._formBuilder.group({
            'serviceprovider': ['', Validators.required],
            'firstname': ['', Validators.required],
            'lastname': ['', Validators.required],
            'designation': ['', Validators.required],
            'organisationname': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, FormsValidationService.emailValidator])],
            'serviceCategory': ['', Validators.required],
            'servicesubCategory': ['', Validators.required],
            'businessDomain': ['', Validators.required],
            'terms': ['', Validators.required],
        });


        this.loginform = this._formBuilder.group({
            'username': ['', Validators.compose([
                Validators.required,
                FormsValidationService.emailValidator
            ])],
            'password': ['', Validators.required],
        });
    }
    getServiceCategory() {
        this._service.serviceCategory()
            .subscribe(
            data => {
                this.serviceCategorylist = data.response.servicecategories;
                console.log(data)
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
    getserviceSub(id) {
        this._service.serviceSubCategory(id)
            .subscribe(
            data => {
                this.servicesubCategorylist = data.response.servicesubcategories;
                console.log(data)
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
    getbusinessDomain() {
        this._service.servicesetor()
            .subscribe(
            data => {
                this.businessDomainlist = data.response.servicesectors; console.log(data);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
}