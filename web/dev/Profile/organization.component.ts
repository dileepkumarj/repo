import { Component, OnInit ,ElementRef} from 'angular2/core';
import {Control, ControlGroup, FormBuilder, Validators, NgFormModel} from 'angular2/common'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
import {ProfileService} from '../Services/profile.Service'
import {NumbersOnlyDirective} from '../validations/numberOnly.Directive'
import {RegisterService} from '../Services/register.Service'
@Component({
    selector: 'orgprofile',
    templateUrl: 'views/Profile/organisation.html',
    directives: [ErrorMessages],
    providers: [ProfileService,NumbersOnlyDirective,RegisterService]
})
export class OrganisationComponent implements OnInit {
    orgid;
    testimonials;
    climgSrc;
    clientsList;
    clientname;
    clientlogo;
    poimgSrc;
    portfolioList;
    awardsList;
    editawd;
    addressList;
    selectedpof = { pf_title: '', pf_description: '', pf_image: '', pf_domain: '' };
    viewpof = false;
    constructor(private _formBuilder: FormBuilder, private _service: ProfileService,private numonly:NumbersOnlyDirective,private _httpservice:RegisterService,private myElement: ElementRef) {
        this.orgid = localStorage.getItem('orgid');
        this.getTestimonials(this.orgid);
        this.getclient(this.orgid);
        this.getPortofolio(this.orgid);
        this.getawards();
        this.getcountrylist();
        this.getaddress();
                this.gettargemarket();
        this.elementRef = myElement;
        this.selectedIdx = -1;
       this.getorgdata();
    }
    testimForm: ControlGroup;
    clientForm: ControlGroup;
    portForm: ControlGroup;
    awardsForm: ControlGroup;
    addrsForm:ControlGroup;
    ngOnInit() {
        this.testimForm = this._formBuilder.group({
            'clientname': ['', Validators.required],
            'clientemail': ['', Validators.compose([Validators.required, FormsValidationService.emailValidator])],
            'organisationid': [this.orgid, Validators.nullValidator]
        });
        this.clientForm = this._formBuilder.group({
            'clientname': ['', Validators.required],
            'clientlogo': ['', Validators.nullValidator],
            'organisationid': [this.orgid, Validators.nullValidator]
        });
        this.portForm = this._formBuilder.group({
            'portfoliotitle': ['', Validators.required],
            'portfoliodescription': ['', Validators.required],
            'portfolioimage': ['', Validators.nullValidator],
            'portfoliodomain': ['', Validators.required],
            'organisationid': [this.orgid, Validators.nullValidator]
        });
        this.awardsForm = this._formBuilder.group({
            'awardtitle': ['',Validators.required],
            'awardyear': ['',Validators.compose([Validators.required,FormsValidationService.numberonly])],
            'aw_description': ['',Validators.required],
            'organisationid': [this.orgid, Validators.nullValidator]
        });
        this.addrsForm=this._formBuilder.group({
            'addressdescription':['',Validators.required],
             'address1': ['',Validators.required],
            'address2': ['',Validators.nullValidator],
            'city': ['',Validators.required],
            'state': ['',Validators.required],
            'zip': ['',Validators.required],
            'country': ['',Validators.required],
            'phone1': ['',Validators.nullValidator],
            'phone2': ['',Validators.nullValidator],
            'fax': ['',Validators.nullValidator],
            'branchtype': ['',Validators.nullValidator],
            'organisationid': [this.orgid, Validators.nullValidator]
        })
    }
    requestTestim() {
        this._service.Request(this.testimForm.value)
            .subscribe(
            data => {
                console.log(data);
            },
            error => console.log(error),
            () => console.log('good')
            );
    }
    getTestimonials(id) {
        this._service.getTestim(id)
            .subscribe(
            data => {
                console.log(data);
                this.testimonials = data.response.testmonials;
            },
            error => console.log(error),
            () => console.log('good')
            );
    }
    deeltestim(pid) {
        this._service.delTestim(this.orgid, pid)
            .subscribe(
            data => {
                console.log(data);
                this.getTestimonials(this.orgid);
            },
            error => console.log(error),
            () => console.log('good')
            );
    }
    addclient() {
        this._service.postClients(this.clientForm.value)
            .subscribe(
            data => {
                this.getclient(this.orgid);
                this.climgSrc = '';
                this.ngOnInit();

            },
            error => console.log(error),
            () => console.log('sucess')
            );
    }
    getclient(id) {
        this._service.getClients(id)
            .subscribe(
            data => {
                this.clientsList = data.response.clients;
                console.log(this.clientsList);

            },
            error => console.log(error),
            () => console.log('success')
            );
    }
    deleteclient(sno) {
        this._service.deleteClients(this.orgid, sno)
            .subscribe(
            data => this.getclient(this.orgid),
            error => console.log(error),
            () => console.log('success')
            )
    }
    getPortofolio(sno) {
        this._service.getportofolio(this.orgid)
            .subscribe(
            data => {
                this.portfolioList = data.response.portfolios;
                console.log(this.portfolioList);
            },
            error => console.log(error),
            () => console.log('success')
            )
    }
    postPortofolio() {
        this.portForm.value.portfolioimage = this.poimgSrc;
        this._service.addPortofolio(this.portForm.value)
            .subscribe(
            data => this.getPortofolio(this.orgid),
            error => console.log(error),
            () => console.log('success')
            )
    }
    deletePortofolio(sno) {
        this._service.deleteportofolio(this.orgid, sno)
            .subscribe(
            data => this.getPortofolio(this.orgid),
            error => console.log(error),
            () => console.log('success')
            )
    }
    getfile = (evt, cont) => {
        var files = evt.target.files;
        var file = files[0];

        if (files && file) {

            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (() => {
                //var binaryString = readerEvt.target.result;
                if (cont == 'client') {
                    this.clientForm.value.clientlogo = reader.result;
                    this.climgSrc = reader.result;
                } else if (cont == 'port') {
                    this.portForm.value.portfolioimage = reader.result;
                    this.poimgSrc = reader.result;
                }
            });
            // reader.readAsBinaryString(file);
        }
    }
    editPort() {
        this.viewpof = false;
        this.portForm.value.portfoliotitle = this.selectedpof.pf_title;
        this.portForm.value.portfoliodescription = this.selectedpof.pf_description;
        this.portForm.value.portfolioimage = this.selectedpof.pf_image;
        this.portForm.value.portfoliodomain = this.selectedpof.pf_domain;
        this.poimgSrc = this.portForm.value.portfolioimage;
    }
    //year only
     eventHandler(evt,val) {
this.numonly.year(evt,val);
 }
 //year only//
 //awards start here
 addaward(){
      this._service.addawards(this.awardsForm.value)
            .subscribe(
            data => {console.log(data);
                 this.ngOnInit();
                this.getawards();
            },
            error => console.log(error),
            () => console.log('success')
            );
 }
 getawards(){
     this._service.getawards(this.orgid)
            .subscribe(
            data => {console.log(data);
                this.awardsList=data.response.awards;
                },
            error => console.log(error),
            () => console.log('success')
            );
 }
 delaward(pid){
     this._service.deleteawards(this.orgid,pid)
     .subscribe(
         data=>{
             this.getawards();
         },
         error=>console.log(error),
         ()=>console.log('good')
     );
 }
 editawds(i,val){
     this.awardsForm.value.awardtitle=val.aw_title;
      this.awardsForm.value.awardyear=val.aw_year;
       this.awardsForm.value.aw_description=val.aw_description;
        this.awardsForm.value.organisationid=this.orgid;
     this.editawd=i;
        
 }
 //awards end here
 //address start here
 countrylist;
 stateList;
 citylist;
 adrsev;
      pheventHandler(evt,val) {
this.numonly.phonenumber(evt,val)
 }
      pineventHandler(evt,val) {
this.numonly.pincode(evt,val)
 }
 getcountrylist() {
        this._service.countrieslist()
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
        this._service.statelist(id)
            .subscribe(
            data => {
                console.log(data);
                this.stateList = data.response.states
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    getcities(id,cid) {
       
        this._service.citylist(id)
            .subscribe(
            data => {
                console.log(data);
                this.citylist = data.response.cities;
                if(cid!==undefined){
                this.addrsForm.controls['city'].updateValueAndValidity(cid);
                }
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    addaddress(){
        if(this.addressList!==undefined && this.addressList.length>0){
            this.addrsForm.value.branchtype=0;
        }else{
        this.addrsForm.value.branchtype=1;
        }
        this._service.addaddress(this.addrsForm.value)
            .subscribe(
            data => {
                console.log(data);
                this.ngOnInit();
                this.getaddress();
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
        getaddress(){
        this._service.getaddress(this.orgid)
            .subscribe(
            data => {
                this.addressList=data.response.address;
                console.log(this.addressList);
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    editaddrs(data,i){
        this.adrsev=i;
        this.getstatelist(data.ad_country);
this.addrsForm=this._formBuilder.group({
            'addressdescription':[data.ad_addressdescription,Validators.required],
             'address1': [data.ad_name1,Validators.required],
            'address2': [data.ad_name2,Validators.nullValidator],
            'city': [data.ad_city,Validators.required],
            'state': [data.ad_state,Validators.required],
            'zip': [data.ad_zip,Validators.required],
            'country': [data.ad_country,Validators.required],
            'phone1': [data.ad_phone1,Validators.nullValidator],
            'phone2': [data.ad_phone2,Validators.nullValidator],
            'fax': [data.ad_fax,Validators.nullValidator],
            'branchtype': [data.ad_branch_type,Validators.nullValidator],
            'organisationid': [this.orgid, Validators.nullValidator],
            'slno':[data.ad_sno,Validators.nullValidator]
        });
        this.getcities(data.ad_state,data.ad_city);

    }
    deleteaddress(pid){
        this._service.deleteaddress(this.orgid,pid)
            .subscribe(
            data => {
                console.log(data);
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
 //address end here
 //updateurl start
 url;
 updateurl=0;
 urlupdate(){
     this._service.updateurl(this.orgid,this.url)
        .subscribe(
            data => {
                console.log(data);
                this.updateurl=0;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
 }
//updateurl ends
//busindess Category start
businessCategory='';
buscat=0;
businessDomainlist;
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
    updatebusidom(){
        this._service.servicesec(this.orgid,this.businessCategory)
        .subscribe(
            data => {
                console.log(data);
                this.buscat=0;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
   
//busindess category ends
//service Category start
serviceCategorylist;
servicesubCategorylist;
sercat=0;
serviceCagtegory='';
servicesubCategory='';
 getServiceCategory() {
        this._httpservice.serviceCategory()
            .subscribe(
            data => {
                this.serviceCategorylist = data.response.servicecategories;
                console.log(data)
                this.getserviceSub(this.serviceCagtegory);
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
                console.log(data)
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
    updatecat(){
        this._service.category(this.orgid,this.serviceCagtegory)
        .subscribe(
            data => {
                console.log(data);
                this.sercat=0;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    
    this._service.subcat(this.orgid,this.servicesubCategory)
        .subscribe(
            data => {
                console.log(data);
                this.sercat=0;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
        }
//service caterogery ends
//headcount start
heade=0;
headCount='';
headCountlist;
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
    updatehead(){
        this._service.headcount(this.orgid,this.headCount)
        .subscribe(
            data => {
                console.log(data);
                this.heade=0;
            },
            error => alert(error),
            () => console.log("everything going good")
            );
    }
//headcount ends
//target marketsstart
tarmkt=0;
public query = '';
    public countries = [];
    public filteredList = [];
    public elementRef;
    public selected = [];
    selectedIdx: number;
    showsel='India,Australia';
    filter(event) {
        if (this.query !== "") {
            this.countries.forEach(element => {
                this.selected.forEach(el=>{
                    if(element==el){
                        this.countries.splice(this.countries.indexOf(el), 1);
                    }
                })
                })
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
        this.countries.push(item);
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
    edittarmkt(){
        this.tarmkt=1;
        this.selected= this.showsel.split(',');
    }
    updatetarget(){
        this.showsel=this.selected.join();  
        this._service.targmark(this.orgid,this.showsel)
.subscribe(
            data => {
                console.log(data);
               this.tarmkt=0;
       
            },
            error => alert(error),
            () => console.log('good')
            );
        }
//target markets ends
//year of incorp start
yearofincorp='';
yrcop=0;
updateyearofinco(){
    this._service.yearofinco(this.orgid,this.yearofincorp)
    .subscribe(
            data => {
            this.yrcop=0;
            },
            error => alert(error),
            () => console.log('good')
            );
        }
//yearof incorp ends
//turnover start
turnOverlist;
tovrdum;
turnvalue='';
tovr=0;
tovnum='';
tovren;

getTurnOver() {
    this.tovrdum= this.turnvalue.split(' ');
    this.tovnum=this.tovrdum[0];
    this.tovren=this.tovrdum[1];
        this._httpservice.turnovervalue()
            .subscribe(
            data => {
                this.turnOverlist = data.response.turnoverresults;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    updatetov(){
        this.turnvalue=this.tovnum+' '+this.tovren;
        this._service.turnover(this.orgid,this.turnvalue)
        .subscribe(
            data => {
                console.log(data);
                this.tovr=0;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
//turn over ends
//org description start
desc=0;
orgdescrip='';
updatedesc(){
this._service.orgdesc(this.orgid,this.orgdescrip)
 .subscribe(
            data => {
                console.log(data);
                this.desc=0;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
}
//org description ends
//getorgdata start
getorgdata(){
    this._service.getorgdata(this.orgid)
    .subscribe(
            data => {
                console.log(data);
                var test=data.response.orgdata;
                this.faceb=test.facebookurl;
                this.google=test.googleplusurl
                this.linkedin=test.linkedinurl
                this.twitter=test.twitterurl
                this.yout=test.youtubeurl
                this.serviceCagtegory=test.og_category;
                this.servicesubCategory=test.og_subcategory;
                this.orgdescrip=test.og_description;
                this.yearofincorp=test.og_established_year;
                this.headCount=test.og_headcount;
                this.businessCategory=test.og_servicesector;
                this.showsel=test.og_target_market;
                this.turnvalue=test.og_turnover_value;
                this.url=test.og_url;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
}
//getorgdata ends
linke=-1;
google="";
linkedin='';
twitter='';
faceb='';
yout='';
social(i){
    var req={};
    if(i==0){
        req={"organisationid":this.orgid,"linkedinurl":this.linkedin};
    }else if(i==1){
 req={"organisationid":this.orgid,"googleplusurl":this.google};
    }else if(i==2){
 req={"organisationid":this.orgid,"twitterurl":this.twitter};
    }else if(i==3){
 req={"organisationid":this.orgid,"facebookurl":this.faceb};
    }else if(i==4){
 req={"organisationid":this.orgid,"youtubeurl":this.yout};
    }
    this._service.social(req)
     .subscribe(
            data => {
                console.log(data);
                this.desc=0;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
}
}