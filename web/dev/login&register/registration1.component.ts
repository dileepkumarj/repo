import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {RouteConfig} from 'angular2/router'
import {Control, ControlGroup, FormBuilder, Validators, NgFormModel} from 'angular2/common'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
import {RegisterService} from '../Services/register.Service'
import {NumbersOnlyDirective} from '../validations/numberOnly.Directive'
@Component({
    selector: 'register1',
    directives: [ROUTER_DIRECTIVES, ErrorMessages],
    templateUrl: "views/login&register/Registration1.html",
    providers: [RegisterService,NumbersOnlyDirective]
})
export class Registration1Component implements OnInit {
    registerform: ControlGroup;
    serviceCategorylist;
    servicesubCategorylist;
    businessDomainlist;
    localdata;
    constructor(private _formBuilder: FormBuilder, private router: Router, private _httpservice: RegisterService,private numberonly:NumbersOnlyDirective) {
        this.getServiceCategory();
        this.getbusinessDomain();
        this.localdata=localStorage.getItem('registration');
        this.localdata=JSON.parse(this.localdata);
        if(this.localdata!==null||undefined){
            this.getserviceSub(this.localdata.serviceCategory);
        }
    }

    ngOnInit() {
if(this.localdata==null){
this.registerform = this._formBuilder.group({
            'yearofincorp': ['', Validators.compose([Validators.required,FormsValidationService.numberonly])],
            'orgdescrip': ['', Validators.required],
            'serviceCategory':['',Validators.required],
            'servicesubCategory':['',Validators.required],
            'businessDomain':['',Validators.required],
            'websiteurl':['',FormsValidationService.url],
        });
}
else{
    this.registerform = this._formBuilder.group({
            'yearofincorp': [this.localdata.yearofincorp, Validators.compose([Validators.required,FormsValidationService.numberonly])],
            'orgdescrip': [this.localdata.orgdescrip, Validators.required],
            'serviceCategory':[this.localdata.serviceCategory,Validators.required],
            'servicesubCategory':[this.localdata.servicesubCategory,Validators.required],
            'businessDomain':[this.localdata.businessDomain,Validators.required],
            'websiteurl':[this.localdata.websiteurl,FormsValidationService.url],
        });
}
        
    }
 getServiceCategory(){
this._httpservice.serviceCategory()
            .subscribe(
            data => {
            this.serviceCategorylist = data.response.servicecategories;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
 }
 eventHandler(evt,val) {
this.numberonly.year(evt,val);
 }
 
   getserviceSub(id) {
        this._httpservice.serviceSubCategory(id)
            .subscribe(
            data => {
            this.servicesubCategorylist = data.response.servicesubcategories;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
       getbusinessDomain() {
        this._httpservice.servicesetor()
            .subscribe(
            data => {
            this.businessDomainlist = data.response.servicesectors; console.log(data);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
    submit(form){
        alert(JSON.stringify(this.registerform.value));
        var register=JSON.stringify(this.registerform.value);
        localStorage.setItem('registration',register);
           this.router.navigate(['Register2']);
    }
 }
