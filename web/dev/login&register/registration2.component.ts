import {Component, OnInit, ElementRef} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {RouteConfig} from 'angular2/router'
import {Control, ControlGroup, FormBuilder, Validators, NgFormModel} from 'angular2/common'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
import {NumbersOnlyDirective} from '../validations/numberOnly.Directive'
import {RegisterService} from '../Services/register.Service'
@Component({
    selector: 'register2',
    templateUrl: "views/login&register/Registration2.html",
    directives: [ROUTER_DIRECTIVES, ErrorMessages],
    providers: [RegisterService,NumbersOnlyDirective]
})
export class Registration2Component implements OnInit {
    registerform: ControlGroup;
    headCountlist;
    turnOverlist;
    sublocations = [];
    countrylist;
    stateList;
    citylist;
    localdata;
    register;
    constructor(private _formBuilder: FormBuilder, private router: Router, private _httpservice: RegisterService, private myElement: ElementRef,private numberonly:NumbersOnlyDirective) {
        this.register = JSON.parse(localStorage.getItem('registration'));
        //alert(register);
        this.getGetHeadCount();
        this.getTurnOver();
        // this.addheadquarters();
        this.getcountrylist();
        this.gettargemarket();
        this.elementRef = myElement;
        this.selectedIdx = -1;
        this.localdata = JSON.parse(localStorage.getItem('registration'));
        if (this.localdata !== null) {
            if (this.localdata.sublocations) {
                this.sublocations = this.localdata.sublocations;
                this.getstatelist(this.localdata.headquarters.Country);
                this.getcities(this.localdata.headquarters.City);
                this.selected=this.localdata.targetmark
            }
            
        }
    }
     pheventHandler(evt,val) {
this.numberonly.phonenumber(evt,val)
 }
      pineventHandler(evt,val) {
this.numberonly.pincode(evt,val)
 }
    ngOnInit() {
        if (this.localdata.headcount == null || undefined) {
            this.registerform = this._formBuilder.group({
                'headcount': ['', Validators.nullValidator],
                'turnover': ['', Validators.nullValidator],
                'hqdescription': ['', Validators.required],
                'hqaddress1': ['', Validators.required],
                'hqaddress2': ['', Validators.nullValidator],
                'hqcountry': ['', Validators.required],
                'hqstate': ['', Validators.required],
                'hqcity': ['', Validators.required],
                'hqzip': ['', Validators.nullValidator],
                'hqphone1': ['', Validators.nullValidator],
                'hqphone2': ['', Validators.nullValidator],
                'hqfax': ['', Validators.nullValidator],
                'targetmark': ['', Validators.nullValidator],
            });
        }
        else {
            this.registerform = this._formBuilder.group({
                'headcount': [this.localdata.headcount, Validators.nullValidator],
                'turnover': [this.localdata.turnover, Validators.nullValidator],
                'hqdescription': [this.localdata.headquarters.Description, Validators.required],
                'hqaddress1': [this.localdata.headquarters.Address1, Validators.required],
                'hqaddress2': [this.localdata.headquarters.Address2, Validators.nullValidator],
                'hqcountry': [this.localdata.headquarters.Country, Validators.required],
                'hqstate': [this.localdata.headquarters.State, Validators.required],
                'hqcity': [this.localdata.headquarters.City, Validators.required],
                'hqzip': [this.localdata.headquarters.Zip, Validators.nullValidator],
                'hqphone1': [this.localdata.headquarters.Phone1, Validators.nullValidator],
                'hqphone2': [this.localdata.headquarters.Phone2, Validators.nullValidator],
                'hqfax': [this.localdata.headquarters.Fax, Validators.nullValidator],
                'targetmark': ['', Validators.nullValidator],
            });
        }
    }
    getGetHeadCount() {
        this._httpservice.getheadCount()
            .subscribe(
            data => {
                this.headCountlist = data.response.headcounts;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
    getTurnOver() {
        this._httpservice.turnovervalue()
            .subscribe(
            data => {
                this.turnOverlist = data.response.turnoverresults
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    addheadquarters() {
        if(this.sublocations.length<=2){
        this.sublocations.push({ description: '', address1: '', address2: '', country: '', state: '', city: '', zip: '', phone1: '', phone2: '', fax: '' });
        }else{
           var disableloca=true;
        }
    }
    gettargemarket() {
        this._httpservice.targetmarkets()
            .subscribe(
            data => {
                console.log(data);
                var filterd = data.response.targetmaketresults
                filterd.forEach(element => {
                    this.countries.push(element.value);
                });
            },
            error => alert(error),
            () => console.log('good')
            );
    }
    getcountrylist() {
        this._httpservice.countrieslist()
            .subscribe(
            data => {
                console.log(data);
                this.countrylist = data.response.countries
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    getstatelist(id) {
        this._httpservice.statelist(id)
            .subscribe(
            data => {
                console.log(data);
                this.stateList = data.response.states
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    getcities(id) {
        this._httpservice.citylist(id)
            .subscribe(
            data => {
                console.log(data);
                this.citylist = data.response.cities
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    public query = '';
    public countries = [];
    public filteredList = [];
    public elementRef;
    public selected = [];
    selectedIdx: number;
    filter(event) {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return (el.toLowerCase().substr(0, this.query.length) === this.query.toLowerCase()) == true;
            }.bind(this));
            if (event.keyCode == "40" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            } else if (event.keyCode == "38" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        } else {
            this.filteredList = [];
        }
    }
    select(item) {
        this.selected.push(item);
        this.query = '';
        this.filteredList = [];
    }
    remove(item) {
        this.selected.splice(this.selected.indexOf(item), 1);
    }
    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
        this.selectedIdx = -1;
    }
    submit() {
        this.localdata.headcount = this.registerform.value.headcount;
        this.localdata.turnover = this.registerform.value.turnover;
        this.localdata.headquarters = {
            Description:this.registerform.value.hqdescription,
            Address1:this.registerform.value.hqaddress1,
            Address2:this.registerform.value.hqaddress2,
            Country:this.registerform.value.hqcountry,
            State:this.registerform.value.hqstate,
            City:this.registerform.value.hqcity,
            Zip:this.registerform.value.hqzip,
           Phone1:this.registerform.value.hqphone1,
           Phone2:this.registerform.value.hqphone2,
           Fax:this.registerform.value.hqfax
            };
        this.localdata.targetmark = this.selected;
        this.localdata.sublocations = this.sublocations;
        localStorage.setItem('registration', JSON.stringify(this.localdata));
        alert(JSON.stringify(this.localdata));
        this.router.navigate(['Register3']);
    }
}