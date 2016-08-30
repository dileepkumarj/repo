import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {Control, ControlGroup, FormBuilder, Validators, NgFormModel} from 'angular2/common'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
import {RegisterService} from '../Services/register.Service'
@Component({
    selector: 'linkedinform',
    directives: [ROUTER_DIRECTIVES, ErrorMessages],
    templateUrl: "views/login&register/LinkedinFrom.html",
    providers: [RegisterService]
})
export class LinkedinRegComponent implements OnInit {
    registerform: ControlGroup;
    serviceCategorylist;
    servicesubCategorylist;
    businessDomainlist;
    localdata1;
    localdata;
    typeoforganization='';
    constructor(private _formBuilder: FormBuilder, private router: Router, private _httpservice: RegisterService) {
        this.getServiceCategory();
        this.getbusinessDomain();
        this.localdata1 = localStorage.getItem('ProfileDetails');
        this.localdata1 = JSON.parse(this.localdata1);
        this.localdata = localStorage.getItem('CompanyDetails');
        this.localdata = JSON.parse(this.localdata);
        if (this.localdata1 == null || undefined) {
            this.router.navigate(['login']);
        }
    }

    ngOnInit() {
        if (this.localdata == null || undefined) {
            this.registerform = this._formBuilder.group({
                'orgtype':['',Validators.required],
                'orgdescrip': ['', Validators.nullValidator],
                'serviceCategory': ['', Validators.required],
                'servicesubCategory': ['', Validators.required],
                'businessDomain': ['', Validators.required],
                'websiteurl': ['', FormsValidationService.url],
            });
        } else {
            this.registerform = this._formBuilder.group({
                'orgtype':['',Validators.required],
                'orgdescrip': [this.localdata.description, Validators.required],
                'serviceCategory': ['', Validators.required],
                'servicesubCategory': ['', Validators.required],
                'businessDomain': ['', Validators.required],
                'websiteurl': [this.localdata.websiteUrl, FormsValidationService.url],
            });
        }
    }
    getServiceCategory() {
        this._httpservice.serviceCategory()
            .subscribe(
            data => {
                this.serviceCategorylist = data.response.servicecategories;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
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
    Fields = {};
    submit(form) {
        this.Fields.og_name = this.localdata1.positions.values[0].company.name;
        this.Fields.og_subcategory = this.registerform.value.servicesubCategory;
        this.Fields.og_category = this.registerform.value.serviceCategory;
        this.Fields.og_url = this.registerform.value.websiteurl;
        this.Fields.og_servicesector = this.registerform.value.businessDomain;
        this.Fields.og_description = this.registerform.value.orgdescrip;
        this.Fields.ad_firstname = this.localdata1.firstName;
        this.Fields.ad_lastname = this.localdata1.lastName;
        this.Fields.ad_designation = this.localdata1.headline;
        this.Fields.ad_email = this.localdata1.emailAddress;
        this.Fields.linkedinuserid = this.localdata1.id;
        this.Fields.og_type=this.typeoforganization;
        this.Fields.og_headcoount=this.localdata1.positions.values[0].company.size
        this._httpservice.linkedinsignup(this.Fields)
            .subscribe(
            data => {
                localStorage.removeItem('ProfileDetails');
                localStorage.removeItem('CompanyDetails');
                if(data.response.status==1){
                    
                    localStorage.setItem('orgid',data.response.organisation.organisationid);
                     localStorage.setItem('authemail',data.response.organisation.email);
                    this.router.navigate(['Connections']);
                }else if(data.response.status==-1){
                    alert(data.response.message+'Please Login');
                  // this.router.navigate(['login']);
                  this.router.navigateByUrl('/');
                }
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
}
