System.register(['angular2/core', 'angular2/common', '../Validations/error.messages', '../validations/required.validator', '../Services/profile.Service', '../validations/numberOnly.Directive', '../Services/register.Service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, error_messages_1, required_validator_1, profile_Service_1, numberOnly_Directive_1, register_Service_1;
    var OrganisationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (error_messages_1_1) {
                error_messages_1 = error_messages_1_1;
            },
            function (required_validator_1_1) {
                required_validator_1 = required_validator_1_1;
            },
            function (profile_Service_1_1) {
                profile_Service_1 = profile_Service_1_1;
            },
            function (numberOnly_Directive_1_1) {
                numberOnly_Directive_1 = numberOnly_Directive_1_1;
            },
            function (register_Service_1_1) {
                register_Service_1 = register_Service_1_1;
            }],
        execute: function() {
            OrganisationComponent = (function () {
                function OrganisationComponent(_formBuilder, _service, numonly, _httpservice, myElement) {
                    var _this = this;
                    this._formBuilder = _formBuilder;
                    this._service = _service;
                    this.numonly = numonly;
                    this._httpservice = _httpservice;
                    this.myElement = myElement;
                    this.selectedpof = { pf_title: '', pf_description: '', pf_image: '', pf_domain: '' };
                    this.viewpof = false;
                    this.getfile = function (evt, cont) {
                        var files = evt.target.files;
                        var file = files[0];
                        if (files && file) {
                            var reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = (function () {
                                //var binaryString = readerEvt.target.result;
                                if (cont == 'client') {
                                    _this.clientForm.value.clientlogo = reader.result;
                                    _this.climgSrc = reader.result;
                                }
                                else if (cont == 'port') {
                                    _this.portForm.value.portfolioimage = reader.result;
                                    _this.poimgSrc = reader.result;
                                }
                            });
                        }
                    };
                    this.updateurl = 0;
                    //updateurl ends
                    //busindess Category start
                    this.businessCategory = '';
                    this.buscat = 0;
                    this.sercat = 0;
                    this.serviceCagtegory = '';
                    this.servicesubCategory = '';
                    //service caterogery ends
                    //headcount start
                    this.heade = 0;
                    this.headCount = '';
                    //headcount ends
                    //target marketsstart
                    this.tarmkt = 0;
                    this.query = '';
                    this.countries = [];
                    this.filteredList = [];
                    this.selected = [];
                    this.showsel = 'India,Australia';
                    //target markets ends
                    //year of incorp start
                    this.yearofincorp = '';
                    this.yrcop = 0;
                    this.turnvalue = '';
                    this.tovr = 0;
                    this.tovnum = '';
                    //turn over ends
                    //org description start
                    this.desc = 0;
                    this.orgdescrip = '';
                    //getorgdata ends
                    this.linke = -1;
                    this.google = "";
                    this.linkedin = '';
                    this.twitter = '';
                    this.faceb = '';
                    this.yout = '';
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
                OrganisationComponent.prototype.ngOnInit = function () {
                    this.testimForm = this._formBuilder.group({
                        'clientname': ['', common_1.Validators.required],
                        'clientemail': ['', common_1.Validators.compose([common_1.Validators.required, required_validator_1.FormsValidationService.emailValidator])],
                        'organisationid': [this.orgid, common_1.Validators.nullValidator]
                    });
                    this.clientForm = this._formBuilder.group({
                        'clientname': ['', common_1.Validators.required],
                        'clientlogo': ['', common_1.Validators.nullValidator],
                        'organisationid': [this.orgid, common_1.Validators.nullValidator]
                    });
                    this.portForm = this._formBuilder.group({
                        'portfoliotitle': ['', common_1.Validators.required],
                        'portfoliodescription': ['', common_1.Validators.required],
                        'portfolioimage': ['', common_1.Validators.nullValidator],
                        'portfoliodomain': ['', common_1.Validators.required],
                        'organisationid': [this.orgid, common_1.Validators.nullValidator]
                    });
                    this.awardsForm = this._formBuilder.group({
                        'awardtitle': ['', common_1.Validators.required],
                        'awardyear': ['', common_1.Validators.compose([common_1.Validators.required, required_validator_1.FormsValidationService.numberonly])],
                        'aw_description': ['', common_1.Validators.required],
                        'organisationid': [this.orgid, common_1.Validators.nullValidator]
                    });
                    this.addrsForm = this._formBuilder.group({
                        'addressdescription': ['', common_1.Validators.required],
                        'address1': ['', common_1.Validators.required],
                        'address2': ['', common_1.Validators.nullValidator],
                        'city': ['', common_1.Validators.required],
                        'state': ['', common_1.Validators.required],
                        'zip': ['', common_1.Validators.required],
                        'country': ['', common_1.Validators.required],
                        'phone1': ['', common_1.Validators.nullValidator],
                        'phone2': ['', common_1.Validators.nullValidator],
                        'fax': ['', common_1.Validators.nullValidator],
                        'branchtype': ['', common_1.Validators.nullValidator],
                        'organisationid': [this.orgid, common_1.Validators.nullValidator]
                    });
                };
                OrganisationComponent.prototype.requestTestim = function () {
                    this._service.Request(this.testimForm.value)
                        .subscribe(function (data) {
                        console.log(data);
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.getTestimonials = function (id) {
                    var _this = this;
                    this._service.getTestim(id)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.testimonials = data.response.testmonials;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.deeltestim = function (pid) {
                    var _this = this;
                    this._service.delTestim(this.orgid, pid)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.getTestimonials(_this.orgid);
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.addclient = function () {
                    var _this = this;
                    this._service.postClients(this.clientForm.value)
                        .subscribe(function (data) {
                        _this.getclient(_this.orgid);
                        _this.climgSrc = '';
                        _this.ngOnInit();
                    }, function (error) { return console.log(error); }, function () { return console.log('sucess'); });
                };
                OrganisationComponent.prototype.getclient = function (id) {
                    var _this = this;
                    this._service.getClients(id)
                        .subscribe(function (data) {
                        _this.clientsList = data.response.clients;
                        console.log(_this.clientsList);
                    }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.deleteclient = function (sno) {
                    var _this = this;
                    this._service.deleteClients(this.orgid, sno)
                        .subscribe(function (data) { return _this.getclient(_this.orgid); }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.getPortofolio = function (sno) {
                    var _this = this;
                    this._service.getportofolio(this.orgid)
                        .subscribe(function (data) {
                        _this.portfolioList = data.response.portfolios;
                        console.log(_this.portfolioList);
                    }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.postPortofolio = function () {
                    var _this = this;
                    this.portForm.value.portfolioimage = this.poimgSrc;
                    this._service.addPortofolio(this.portForm.value)
                        .subscribe(function (data) { return _this.getPortofolio(_this.orgid); }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.deletePortofolio = function (sno) {
                    var _this = this;
                    this._service.deleteportofolio(this.orgid, sno)
                        .subscribe(function (data) { return _this.getPortofolio(_this.orgid); }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.editPort = function () {
                    this.viewpof = false;
                    this.portForm.value.portfoliotitle = this.selectedpof.pf_title;
                    this.portForm.value.portfoliodescription = this.selectedpof.pf_description;
                    this.portForm.value.portfolioimage = this.selectedpof.pf_image;
                    this.portForm.value.portfoliodomain = this.selectedpof.pf_domain;
                    this.poimgSrc = this.portForm.value.portfolioimage;
                };
                //year only
                OrganisationComponent.prototype.eventHandler = function (evt, val) {
                    this.numonly.year(evt, val);
                };
                //year only//
                //awards start here
                OrganisationComponent.prototype.addaward = function () {
                    var _this = this;
                    this._service.addawards(this.awardsForm.value)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.ngOnInit();
                        _this.getawards();
                    }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.getawards = function () {
                    var _this = this;
                    this._service.getawards(this.orgid)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.awardsList = data.response.awards;
                    }, function (error) { return console.log(error); }, function () { return console.log('success'); });
                };
                OrganisationComponent.prototype.delaward = function (pid) {
                    var _this = this;
                    this._service.deleteawards(this.orgid, pid)
                        .subscribe(function (data) {
                        _this.getawards();
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.editawds = function (i, val) {
                    this.awardsForm.value.awardtitle = val.aw_title;
                    this.awardsForm.value.awardyear = val.aw_year;
                    this.awardsForm.value.aw_description = val.aw_description;
                    this.awardsForm.value.organisationid = this.orgid;
                    this.editawd = i;
                };
                OrganisationComponent.prototype.pheventHandler = function (evt, val) {
                    this.numonly.phonenumber(evt, val);
                };
                OrganisationComponent.prototype.pineventHandler = function (evt, val) {
                    this.numonly.pincode(evt, val);
                };
                OrganisationComponent.prototype.getcountrylist = function () {
                    var _this = this;
                    this._service.countrieslist()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.countrylist = data.response.countries;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.getstatelist = function (id) {
                    var _this = this;
                    this._service.statelist(id)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.stateList = data.response.states;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.getcities = function (id, cid) {
                    var _this = this;
                    this._service.citylist(id)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.citylist = data.response.cities;
                        if (cid !== undefined) {
                            _this.addrsForm.controls['city'].updateValueAndValidity(cid);
                        }
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.addaddress = function () {
                    var _this = this;
                    if (this.addressList !== undefined && this.addressList.length > 0) {
                        this.addrsForm.value.branchtype = 0;
                    }
                    else {
                        this.addrsForm.value.branchtype = 1;
                    }
                    this._service.addaddress(this.addrsForm.value)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.ngOnInit();
                        _this.getaddress();
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.getaddress = function () {
                    var _this = this;
                    this._service.getaddress(this.orgid)
                        .subscribe(function (data) {
                        _this.addressList = data.response.address;
                        console.log(_this.addressList);
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.editaddrs = function (data, i) {
                    this.adrsev = i;
                    this.getstatelist(data.ad_country);
                    this.addrsForm = this._formBuilder.group({
                        'addressdescription': [data.ad_addressdescription, common_1.Validators.required],
                        'address1': [data.ad_name1, common_1.Validators.required],
                        'address2': [data.ad_name2, common_1.Validators.nullValidator],
                        'city': [data.ad_city, common_1.Validators.required],
                        'state': [data.ad_state, common_1.Validators.required],
                        'zip': [data.ad_zip, common_1.Validators.required],
                        'country': [data.ad_country, common_1.Validators.required],
                        'phone1': [data.ad_phone1, common_1.Validators.nullValidator],
                        'phone2': [data.ad_phone2, common_1.Validators.nullValidator],
                        'fax': [data.ad_fax, common_1.Validators.nullValidator],
                        'branchtype': [data.ad_branch_type, common_1.Validators.nullValidator],
                        'organisationid': [this.orgid, common_1.Validators.nullValidator],
                        'slno': [data.ad_sno, common_1.Validators.nullValidator]
                    });
                    this.getcities(data.ad_state, data.ad_city);
                };
                OrganisationComponent.prototype.deleteaddress = function (pid) {
                    this._service.deleteaddress(this.orgid, pid)
                        .subscribe(function (data) {
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.urlupdate = function () {
                    var _this = this;
                    this._service.updateurl(this.orgid, this.url)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.updateurl = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.getbusinessDomain = function () {
                    var _this = this;
                    this._httpservice.servicesetor()
                        .subscribe(function (data) {
                        _this.businessDomainlist = data.response.servicesectors;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.updatebusidom = function () {
                    var _this = this;
                    this._service.servicesec(this.orgid, this.businessCategory)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.buscat = 0;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.getServiceCategory = function () {
                    var _this = this;
                    this._httpservice.serviceCategory()
                        .subscribe(function (data) {
                        _this.serviceCategorylist = data.response.servicecategories;
                        console.log(data);
                        _this.getserviceSub(_this.serviceCagtegory);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.getserviceSub = function (id) {
                    var _this = this;
                    this._httpservice.serviceSubCategory(id)
                        .subscribe(function (data) {
                        _this.servicesubCategorylist = data.response.servicesubcategories;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.updatecat = function () {
                    var _this = this;
                    this._service.category(this.orgid, this.serviceCagtegory)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.sercat = 0;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                    this._service.subcat(this.orgid, this.servicesubCategory)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.sercat = 0;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.getGetHeadCount = function () {
                    var _this = this;
                    this._httpservice.getheadCount()
                        .subscribe(function (data) {
                        _this.headCountlist = data.response.headcounts;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.updatehead = function () {
                    var _this = this;
                    this._service.headcount(this.orgid, this.headCount)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.heade = 0;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                OrganisationComponent.prototype.filter = function (event) {
                    var _this = this;
                    if (this.query !== "") {
                        this.countries.forEach(function (element) {
                            _this.selected.forEach(function (el) {
                                if (element == el) {
                                    _this.countries.splice(_this.countries.indexOf(el), 1);
                                }
                            });
                        });
                        this.filteredList = this.countries.filter(function (el) {
                            return (el.toLowerCase().substr(0, this.query.length) === this.query.toLowerCase()) == true;
                        }.bind(this));
                        if (event.keyCode == "40" && this.selectedIdx < this.filteredList.length) {
                            this.selectedIdx++;
                        }
                        else if (event.keyCode == "38" && this.selectedIdx > 0) {
                            this.selectedIdx--;
                        }
                    }
                    else {
                        this.filteredList = [];
                    }
                };
                OrganisationComponent.prototype.select = function (item) {
                    this.selected.push(item);
                    this.query = '';
                    this.filteredList = [];
                };
                OrganisationComponent.prototype.remove = function (item) {
                    this.selected.splice(this.selected.indexOf(item), 1);
                    this.countries.push(item);
                };
                OrganisationComponent.prototype.handleBlur = function () {
                    if (this.selectedIdx > -1) {
                        this.query = this.filteredList[this.selectedIdx];
                    }
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                OrganisationComponent.prototype.handleClick = function (event) {
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
                };
                OrganisationComponent.prototype.gettargemarket = function () {
                    var _this = this;
                    this._httpservice.targetmarkets()
                        .subscribe(function (data) {
                        console.log(data);
                        var filterd = data.response.targetmaketresults;
                        filterd.forEach(function (element) {
                            _this.countries.push(element.value);
                        });
                    }, function (error) { return alert(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.edittarmkt = function () {
                    this.tarmkt = 1;
                    this.selected = this.showsel.split(',');
                };
                OrganisationComponent.prototype.updatetarget = function () {
                    var _this = this;
                    this.showsel = this.selected.join();
                    this._service.targmark(this.orgid, this.showsel)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.tarmkt = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.updateyearofinco = function () {
                    var _this = this;
                    this._service.yearofinco(this.orgid, this.yearofincorp)
                        .subscribe(function (data) {
                        _this.yrcop = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('good'); });
                };
                OrganisationComponent.prototype.getTurnOver = function () {
                    var _this = this;
                    this.tovrdum = this.turnvalue.split(' ');
                    this.tovnum = this.tovrdum[0];
                    this.tovren = this.tovrdum[1];
                    this._httpservice.turnovervalue()
                        .subscribe(function (data) {
                        _this.turnOverlist = data.response.turnoverresults;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.updatetov = function () {
                    var _this = this;
                    this.turnvalue = this.tovnum + ' ' + this.tovren;
                    this._service.turnover(this.orgid, this.turnvalue)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.tovr = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.updatedesc = function () {
                    var _this = this;
                    this._service.orgdesc(this.orgid, this.orgdescrip)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.desc = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                //org description ends
                //getorgdata start
                OrganisationComponent.prototype.getorgdata = function () {
                    var _this = this;
                    this._service.getorgdata(this.orgid)
                        .subscribe(function (data) {
                        console.log(data);
                        var test = data.response.orgdata;
                        _this.faceb = test.facebookurl;
                        _this.google = test.googleplusurl;
                        _this.linkedin = test.linkedinurl;
                        _this.twitter = test.twitterurl;
                        _this.yout = test.youtubeurl;
                        _this.serviceCagtegory = test.og_category;
                        _this.servicesubCategory = test.og_subcategory;
                        _this.orgdescrip = test.og_description;
                        _this.yearofincorp = test.og_established_year;
                        _this.headCount = test.og_headcount;
                        _this.businessCategory = test.og_servicesector;
                        _this.showsel = test.og_target_market;
                        _this.turnvalue = test.og_turnover_value;
                        _this.url = test.og_url;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent.prototype.social = function (i) {
                    var _this = this;
                    var req = {};
                    if (i == 0) {
                        req = { "organisationid": this.orgid, "linkedinurl": this.linkedin };
                    }
                    else if (i == 1) {
                        req = { "organisationid": this.orgid, "googleplusurl": this.google };
                    }
                    else if (i == 2) {
                        req = { "organisationid": this.orgid, "twitterurl": this.twitter };
                    }
                    else if (i == 3) {
                        req = { "organisationid": this.orgid, "facebookurl": this.faceb };
                    }
                    else if (i == 4) {
                        req = { "organisationid": this.orgid, "youtubeurl": this.yout };
                    }
                    this._service.social(req)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.desc = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                OrganisationComponent = __decorate([
                    core_1.Component({
                        selector: 'orgprofile',
                        templateUrl: 'views/Profile/organisation.html',
                        directives: [error_messages_1.ErrorMessages],
                        providers: [profile_Service_1.ProfileService, numberOnly_Directive_1.NumbersOnlyDirective, register_Service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, profile_Service_1.ProfileService, numberOnly_Directive_1.NumbersOnlyDirective, register_Service_1.RegisterService, core_1.ElementRef])
                ], OrganisationComponent);
                return OrganisationComponent;
            }());
            exports_1("OrganisationComponent", OrganisationComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2ZpbGUvb3JnYW5pemF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQWNJLCtCQUFvQixZQUF5QixFQUFVLFFBQXdCLEVBQVMsT0FBNEIsRUFBUyxZQUE0QixFQUFTLFNBQXFCO29CQWQzTCxpQkFtckJDO29CQXJxQnVCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLGFBQVEsR0FBUixRQUFRLENBQWdCO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQXFCO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFZO29CQUZ2TCxnQkFBVyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO29CQUNoRixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQXVKaEIsWUFBTyxHQUFHLFVBQUMsR0FBRyxFQUFFLElBQUk7d0JBQ2hCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUM3QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXBCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUVoQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDOzRCQUM5QixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0NBQ2IsNkNBQTZDO2dDQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztvQ0FDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0s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QUMsS0FBSyxFQUFDLENBQUM7b0JBQ3hELENBQUM7b0JBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNsQixHQUFHLEdBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUM7b0JBQ3RELENBQUM7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUN2QixTQUFTLENBQ0gsVUFBQSxJQUFJO3dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDO29CQUNoQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUV6QyxDQUFDO2dCQUNkLENBQUM7Z0JBeHJCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsaUNBQWlDO3dCQUM5QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3dCQUMzQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFDLDJDQUFvQixFQUFDLGtDQUFlLENBQUM7cUJBQ25FLENBQUM7O3lDQUFBO2dCQW9yQkYsNEJBQUM7WUFBRCxDQW5yQkEsQUFtckJDLElBQUE7WUFuckJELHlEQW1yQkMsQ0FBQSIsImZpbGUiOiJQcm9maWxlL29yZ2FuaXphdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgTmdGb3JtTW9kZWx9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtFcnJvck1lc3NhZ2VzfSBmcm9tICcuLi9WYWxpZGF0aW9ucy9lcnJvci5tZXNzYWdlcydcclxuaW1wb3J0IHtGb3Jtc1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi92YWxpZGF0aW9ucy9yZXF1aXJlZC52YWxpZGF0b3InXHJcbmltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL3Byb2ZpbGUuU2VydmljZSdcclxuaW1wb3J0IHtOdW1iZXJzT25seURpcmVjdGl2ZX0gZnJvbSAnLi4vdmFsaWRhdGlvbnMvbnVtYmVyT25seS5EaXJlY3RpdmUnXHJcbmltcG9ydCB7UmVnaXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9yZWdpc3Rlci5TZXJ2aWNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb3JncHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL1Byb2ZpbGUvb3JnYW5pc2F0aW9uLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW0Vycm9yTWVzc2FnZXNdLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2UsTnVtYmVyc09ubHlEaXJlY3RpdmUsUmVnaXN0ZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JnYW5pc2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG9yZ2lkO1xyXG4gICAgdGVzdGltb25pYWxzO1xyXG4gICAgY2xpbWdTcmM7XHJcbiAgICBjbGllbnRzTGlzdDtcclxuICAgIGNsaWVudG5hbWU7XHJcbiAgICBjbGllbnRsb2dvO1xyXG4gICAgcG9pbWdTcmM7XHJcbiAgICBwb3J0Zm9saW9MaXN0O1xyXG4gICAgYXdhcmRzTGlzdDtcclxuICAgIGVkaXRhd2Q7XHJcbiAgICBhZGRyZXNzTGlzdDtcclxuICAgIHNlbGVjdGVkcG9mID0geyBwZl90aXRsZTogJycsIHBmX2Rlc2NyaXB0aW9uOiAnJywgcGZfaW1hZ2U6ICcnLCBwZl9kb21haW46ICcnIH07XHJcbiAgICB2aWV3cG9mID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX3NlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLHByaXZhdGUgbnVtb25seTpOdW1iZXJzT25seURpcmVjdGl2ZSxwcml2YXRlIF9odHRwc2VydmljZTpSZWdpc3RlclNlcnZpY2UscHJpdmF0ZSBteUVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLm9yZ2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZ2lkJyk7XHJcbiAgICAgICAgdGhpcy5nZXRUZXN0aW1vbmlhbHModGhpcy5vcmdpZCk7XHJcbiAgICAgICAgdGhpcy5nZXRjbGllbnQodGhpcy5vcmdpZCk7XHJcbiAgICAgICAgdGhpcy5nZXRQb3J0b2ZvbGlvKHRoaXMub3JnaWQpO1xyXG4gICAgICAgIHRoaXMuZ2V0YXdhcmRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRjb3VudHJ5bGlzdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0YWRkcmVzcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXR0YXJnZW1hcmtldCgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IG15RWxlbWVudDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICAgICB0aGlzLmdldG9yZ2RhdGEoKTtcclxuICAgIH1cclxuICAgIHRlc3RpbUZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIGNsaWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIHBvcnRGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBhd2FyZHNGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBhZGRyc0Zvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0aW1Gb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnY2xpZW50bmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdjbGllbnRlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBGb3Jtc1ZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXSldLFxyXG4gICAgICAgICAgICAnb3JnYW5pc2F0aW9uaWQnOiBbdGhpcy5vcmdpZCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xpZW50Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2NsaWVudG5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnY2xpZW50bG9nbyc6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgJ29yZ2FuaXNhdGlvbmlkJzogW3RoaXMub3JnaWQsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvcnRGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAncG9ydGZvbGlvdGl0bGUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAncG9ydGZvbGlvZGVzY3JpcHRpb24nOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAncG9ydGZvbGlvaW1hZ2UnOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICdwb3J0Zm9saW9kb21haW4nOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnb3JnYW5pc2F0aW9uaWQnOiBbdGhpcy5vcmdpZCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXdhcmRzRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2F3YXJkdGl0bGUnOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdhd2FyZHllYXInOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLEZvcm1zVmFsaWRhdGlvblNlcnZpY2UubnVtYmVyb25seV0pXSxcclxuICAgICAgICAgICAgJ2F3X2Rlc2NyaXB0aW9uJzogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnb3JnYW5pc2F0aW9uaWQnOiBbdGhpcy5vcmdpZCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkcnNGb3JtPXRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2FkZHJlc3NkZXNjcmlwdGlvbic6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgJ2FkZHJlc3MxJzogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnYWRkcmVzczInOiBbJycsVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgJ2NpdHknOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdzdGF0ZSc6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ3ppcCc6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ2NvdW50cnknOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdwaG9uZTEnOiBbJycsVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgJ3Bob25lMic6IFsnJyxWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAnZmF4JzogWycnLFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICdicmFuY2h0eXBlJzogWycnLFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICdvcmdhbmlzYXRpb25pZCc6IFt0aGlzLm9yZ2lkLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlcXVlc3RUZXN0aW0oKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5SZXF1ZXN0KHRoaXMudGVzdGltRm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBnZXRUZXN0aW1vbmlhbHMoaWQpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmdldFRlc3RpbShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdGltb25pYWxzID0gZGF0YS5yZXNwb25zZS50ZXN0bW9uaWFscztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBkZWVsdGVzdGltKHBpZCkge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuZGVsVGVzdGltKHRoaXMub3JnaWQsIHBpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGVzdGltb25pYWxzKHRoaXMub3JnaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnb29kJylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFkZGNsaWVudCgpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnBvc3RDbGllbnRzKHRoaXMuY2xpZW50Rm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGNsaWVudCh0aGlzLm9yZ2lkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpbWdTcmMgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2VzcycpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBnZXRjbGllbnQoaWQpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmdldENsaWVudHMoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRzTGlzdCA9IGRhdGEucmVzcG9uc2UuY2xpZW50cztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpZW50c0xpc3QpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVjbGllbnQoc25vKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5kZWxldGVDbGllbnRzKHRoaXMub3JnaWQsIHNubylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmdldGNsaWVudCh0aGlzLm9yZ2lkKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIGdldFBvcnRvZm9saW8oc25vKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5nZXRwb3J0b2ZvbGlvKHRoaXMub3JnaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0Zm9saW9MaXN0ID0gZGF0YS5yZXNwb25zZS5wb3J0Zm9saW9zO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3J0Zm9saW9MaXN0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIHBvc3RQb3J0b2ZvbGlvKCkge1xyXG4gICAgICAgIHRoaXMucG9ydEZvcm0udmFsdWUucG9ydGZvbGlvaW1hZ2UgPSB0aGlzLnBvaW1nU3JjO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuYWRkUG9ydG9mb2xpbyh0aGlzLnBvcnRGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuZ2V0UG9ydG9mb2xpbyh0aGlzLm9yZ2lkKSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIGRlbGV0ZVBvcnRvZm9saW8oc25vKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5kZWxldGVwb3J0b2ZvbGlvKHRoaXMub3JnaWQsIHNubylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmdldFBvcnRvZm9saW8odGhpcy5vcmdpZCksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICBnZXRmaWxlID0gKGV2dCwgY29udCkgPT4ge1xyXG4gICAgICAgIHZhciBmaWxlcyA9IGV2dC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGVzICYmIGZpbGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdmFyIGJpbmFyeVN0cmluZyA9IHJlYWRlckV2dC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnQgPT0gJ2NsaWVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudEZvcm0udmFsdWUuY2xpZW50bG9nbyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGltZ1NyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnQgPT0gJ3BvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0Rm9ybS52YWx1ZS5wb3J0Zm9saW9pbWFnZSA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ltZ1NyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVkaXRQb3J0KCkge1xyXG4gICAgICAgIHRoaXMudmlld3BvZiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9ydEZvcm0udmFsdWUucG9ydGZvbGlvdGl0bGUgPSB0aGlzLnNlbGVjdGVkcG9mLnBmX3RpdGxlO1xyXG4gICAgICAgIHRoaXMucG9ydEZvcm0udmFsdWUucG9ydGZvbGlvZGVzY3JpcHRpb24gPSB0aGlzLnNlbGVjdGVkcG9mLnBmX2Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucG9ydEZvcm0udmFsdWUucG9ydGZvbGlvaW1hZ2UgPSB0aGlzLnNlbGVjdGVkcG9mLnBmX2ltYWdlO1xyXG4gICAgICAgIHRoaXMucG9ydEZvcm0udmFsdWUucG9ydGZvbGlvZG9tYWluID0gdGhpcy5zZWxlY3RlZHBvZi5wZl9kb21haW47XHJcbiAgICAgICAgdGhpcy5wb2ltZ1NyYyA9IHRoaXMucG9ydEZvcm0udmFsdWUucG9ydGZvbGlvaW1hZ2U7XHJcbiAgICB9XHJcbiAgICAvL3llYXIgb25seVxyXG4gICAgIGV2ZW50SGFuZGxlcihldnQsdmFsKSB7XHJcbnRoaXMubnVtb25seS55ZWFyKGV2dCx2YWwpO1xyXG4gfVxyXG4gLy95ZWFyIG9ubHkvL1xyXG4gLy9hd2FyZHMgc3RhcnQgaGVyZVxyXG4gYWRkYXdhcmQoKXtcclxuICAgICAgdGhpcy5fc2VydmljZS5hZGRhd2FyZHModGhpcy5hd2FyZHNGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGF3YXJkcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgKTtcclxuIH1cclxuIGdldGF3YXJkcygpe1xyXG4gICAgIHRoaXMuX3NlcnZpY2UuZ2V0YXdhcmRzKHRoaXMub3JnaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hd2FyZHNMaXN0PWRhdGEucmVzcG9uc2UuYXdhcmRzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICk7XHJcbiB9XHJcbiBkZWxhd2FyZChwaWQpe1xyXG4gICAgIHRoaXMuX3NlcnZpY2UuZGVsZXRlYXdhcmRzKHRoaXMub3JnaWQscGlkKVxyXG4gICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgIGRhdGE9PntcclxuICAgICAgICAgICAgIHRoaXMuZ2V0YXdhcmRzKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGVycm9yPT5jb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICgpPT5jb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgKTtcclxuIH1cclxuIGVkaXRhd2RzKGksdmFsKXtcclxuICAgICB0aGlzLmF3YXJkc0Zvcm0udmFsdWUuYXdhcmR0aXRsZT12YWwuYXdfdGl0bGU7XHJcbiAgICAgIHRoaXMuYXdhcmRzRm9ybS52YWx1ZS5hd2FyZHllYXI9dmFsLmF3X3llYXI7XHJcbiAgICAgICB0aGlzLmF3YXJkc0Zvcm0udmFsdWUuYXdfZGVzY3JpcHRpb249dmFsLmF3X2Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuYXdhcmRzRm9ybS52YWx1ZS5vcmdhbmlzYXRpb25pZD10aGlzLm9yZ2lkO1xyXG4gICAgIHRoaXMuZWRpdGF3ZD1pO1xyXG4gICAgICAgIFxyXG4gfVxyXG4gLy9hd2FyZHMgZW5kIGhlcmVcclxuIC8vYWRkcmVzcyBzdGFydCBoZXJlXHJcbiBjb3VudHJ5bGlzdDtcclxuIHN0YXRlTGlzdDtcclxuIGNpdHlsaXN0O1xyXG4gYWRyc2V2O1xyXG4gICAgICBwaGV2ZW50SGFuZGxlcihldnQsdmFsKSB7XHJcbnRoaXMubnVtb25seS5waG9uZW51bWJlcihldnQsdmFsKVxyXG4gfVxyXG4gICAgICBwaW5ldmVudEhhbmRsZXIoZXZ0LHZhbCkge1xyXG50aGlzLm51bW9ubHkucGluY29kZShldnQsdmFsKVxyXG4gfVxyXG4gZ2V0Y291bnRyeWxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5jb3VudHJpZXNsaXN0KClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRyeWxpc3QgPSBkYXRhLnJlc3BvbnNlLmNvdW50cmllc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdldmVyeXRoaW5nIGdvaW5nIGdvb2QnKVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldHN0YXRlbGlzdChpZCkge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uuc3RhdGVsaXN0KGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUxpc3QgPSBkYXRhLnJlc3BvbnNlLnN0YXRlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdldmVyeXRoaW5nIGdvaW5nIGdvb2QnKVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldGNpdGllcyhpZCxjaWQpIHtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2l0eWxpc3QoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNpdHlsaXN0ID0gZGF0YS5yZXNwb25zZS5jaXRpZXM7XHJcbiAgICAgICAgICAgICAgICBpZihjaWQhPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyc0Zvcm0uY29udHJvbHNbJ2NpdHknXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGNpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYWRkYWRkcmVzcygpe1xyXG4gICAgICAgIGlmKHRoaXMuYWRkcmVzc0xpc3QhPT11bmRlZmluZWQgJiYgdGhpcy5hZGRyZXNzTGlzdC5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkcnNGb3JtLnZhbHVlLmJyYW5jaHR5cGU9MDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmFkZHJzRm9ybS52YWx1ZS5icmFuY2h0eXBlPTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuYWRkYWRkcmVzcyh0aGlzLmFkZHJzRm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0YWRkcmVzcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdldmVyeXRoaW5nIGdvaW5nIGdvb2QnKVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgICAgICBnZXRhZGRyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5nZXRhZGRyZXNzKHRoaXMub3JnaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzTGlzdD1kYXRhLnJlc3BvbnNlLmFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFkZHJlc3NMaXN0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlZGl0YWRkcnMoZGF0YSxpKXtcclxuICAgICAgICB0aGlzLmFkcnNldj1pO1xyXG4gICAgICAgIHRoaXMuZ2V0c3RhdGVsaXN0KGRhdGEuYWRfY291bnRyeSk7XHJcbnRoaXMuYWRkcnNGb3JtPXRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2FkZHJlc3NkZXNjcmlwdGlvbic6W2RhdGEuYWRfYWRkcmVzc2Rlc2NyaXB0aW9uLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgJ2FkZHJlc3MxJzogW2RhdGEuYWRfbmFtZTEsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdhZGRyZXNzMic6IFtkYXRhLmFkX25hbWUyLFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICdjaXR5JzogW2RhdGEuYWRfY2l0eSxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ3N0YXRlJzogW2RhdGEuYWRfc3RhdGUsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICd6aXAnOiBbZGF0YS5hZF96aXAsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdjb3VudHJ5JzogW2RhdGEuYWRfY291bnRyeSxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ3Bob25lMSc6IFtkYXRhLmFkX3Bob25lMSxWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAncGhvbmUyJzogW2RhdGEuYWRfcGhvbmUyLFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICdmYXgnOiBbZGF0YS5hZF9mYXgsVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgJ2JyYW5jaHR5cGUnOiBbZGF0YS5hZF9icmFuY2hfdHlwZSxWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAnb3JnYW5pc2F0aW9uaWQnOiBbdGhpcy5vcmdpZCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgJ3Nsbm8nOltkYXRhLmFkX3NubyxWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXRjaXRpZXMoZGF0YS5hZF9zdGF0ZSxkYXRhLmFkX2NpdHkpO1xyXG5cclxuICAgIH1cclxuICAgIGRlbGV0ZWFkZHJlc3MocGlkKXtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmRlbGV0ZWFkZHJlc3ModGhpcy5vcmdpZCxwaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gLy9hZGRyZXNzIGVuZCBoZXJlXHJcbiAvL3VwZGF0ZXVybCBzdGFydFxyXG4gdXJsO1xyXG4gdXBkYXRldXJsPTA7XHJcbiB1cmx1cGRhdGUoKXtcclxuICAgICB0aGlzLl9zZXJ2aWNlLnVwZGF0ZXVybCh0aGlzLm9yZ2lkLHRoaXMudXJsKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZXVybD0wO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdldmVyeXRoaW5nIGdvaW5nIGdvb2QnKVxyXG5cclxuICAgICAgICAgICAgKTtcclxuIH1cclxuLy91cGRhdGV1cmwgZW5kc1xyXG4vL2J1c2luZGVzcyBDYXRlZ29yeSBzdGFydFxyXG5idXNpbmVzc0NhdGVnb3J5PScnO1xyXG5idXNjYXQ9MDtcclxuYnVzaW5lc3NEb21haW5saXN0O1xyXG5nZXRidXNpbmVzc0RvbWFpbigpIHtcclxuICAgICAgICB0aGlzLl9odHRwc2VydmljZS5zZXJ2aWNlc2V0b3IoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idXNpbmVzc0RvbWFpbmxpc3QgPSBkYXRhLnJlc3BvbnNlLnNlcnZpY2VzZWN0b3JzOyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlYnVzaWRvbSgpe1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uuc2VydmljZXNlYyh0aGlzLm9yZ2lkLHRoaXMuYnVzaW5lc3NDYXRlZ29yeSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXNjYXQ9MDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICBcclxuLy9idXNpbmRlc3MgY2F0ZWdvcnkgZW5kc1xyXG4vL3NlcnZpY2UgQ2F0ZWdvcnkgc3RhcnRcclxuc2VydmljZUNhdGVnb3J5bGlzdDtcclxuc2VydmljZXN1YkNhdGVnb3J5bGlzdDtcclxuc2VyY2F0PTA7XHJcbnNlcnZpY2VDYWd0ZWdvcnk9Jyc7XHJcbnNlcnZpY2VzdWJDYXRlZ29yeT0nJztcclxuIGdldFNlcnZpY2VDYXRlZ29yeSgpIHtcclxuICAgICAgICB0aGlzLl9odHRwc2VydmljZS5zZXJ2aWNlQ2F0ZWdvcnkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZUNhdGVnb3J5bGlzdCA9IGRhdGEucmVzcG9uc2Uuc2VydmljZWNhdGVnb3JpZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRzZXJ2aWNlU3ViKHRoaXMuc2VydmljZUNhZ3RlZ29yeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldHNlcnZpY2VTdWIoaWQpIHtcclxuICAgICAgICB0aGlzLl9odHRwc2VydmljZS5zZXJ2aWNlU3ViQ2F0ZWdvcnkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc3ViQ2F0ZWdvcnlsaXN0ID0gZGF0YS5yZXNwb25zZS5zZXJ2aWNlc3ViY2F0ZWdvcmllcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZWNhdCgpe1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2F0ZWdvcnkodGhpcy5vcmdpZCx0aGlzLnNlcnZpY2VDYWd0ZWdvcnkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VyY2F0PTA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgdGhpcy5fc2VydmljZS5zdWJjYXQodGhpcy5vcmdpZCx0aGlzLnNlcnZpY2VzdWJDYXRlZ29yeSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJjYXQ9MDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuLy9zZXJ2aWNlIGNhdGVyb2dlcnkgZW5kc1xyXG4vL2hlYWRjb3VudCBzdGFydFxyXG5oZWFkZT0wO1xyXG5oZWFkQ291bnQ9Jyc7XHJcbmhlYWRDb3VudGxpc3Q7XHJcbiBnZXRHZXRIZWFkQ291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2UuZ2V0aGVhZENvdW50KClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRDb3VudGxpc3QgPSBkYXRhLnJlc3BvbnNlLmhlYWRjb3VudHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZWhlYWQoKXtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmhlYWRjb3VudCh0aGlzLm9yZ2lkLHRoaXMuaGVhZENvdW50KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlPTA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuLy9oZWFkY291bnQgZW5kc1xyXG4vL3RhcmdldCBtYXJrZXRzc3RhcnRcclxudGFybWt0PTA7XHJcbnB1YmxpYyBxdWVyeSA9ICcnO1xyXG4gICAgcHVibGljIGNvdW50cmllcyA9IFtdO1xyXG4gICAgcHVibGljIGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgcHVibGljIGVsZW1lbnRSZWY7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWQgPSBbXTtcclxuICAgIHNlbGVjdGVkSWR4OiBudW1iZXI7XHJcbiAgICBzaG93c2VsPSdJbmRpYSxBdXN0cmFsaWEnO1xyXG4gICAgZmlsdGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnkgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQ9PWVsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMuc3BsaWNlKHRoaXMuY291bnRyaWVzLmluZGV4T2YoZWwpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGVsLnRvTG93ZXJDYXNlKCkuc3Vic3RyKDAsIHRoaXMucXVlcnkubGVuZ3RoKSA9PT0gdGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA9PSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gXCI0MFwiICYmIHRoaXMuc2VsZWN0ZWRJZHggPCB0aGlzLmZpbHRlcmVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZHgrKztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IFwiMzhcIiAmJiB0aGlzLnNlbGVjdGVkSWR4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkeC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIHJlbW92ZShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgICB0aGlzLmNvdW50cmllcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQmx1cigpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZElkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmZpbHRlcmVkTGlzdFt0aGlzLnNlbGVjdGVkSWR4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICB2YXIgY2xpY2tlZENvbXBvbmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB2YXIgaW5zaWRlID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tlZENvbXBvbmVudCA9PT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudCA9IGNsaWNrZWRDb21wb25lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9IHdoaWxlIChjbGlja2VkQ29tcG9uZW50KTtcclxuICAgICAgICBpZiAoIWluc2lkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB9XHJcbmdldHRhcmdlbWFya2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBzZXJ2aWNlLnRhcmdldG1hcmtldHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlcmQgPSBkYXRhLnJlc3BvbnNlLnRhcmdldG1ha2V0cmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzLnB1c2goZWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlZGl0dGFybWt0KCl7XHJcbiAgICAgICAgdGhpcy50YXJta3Q9MTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkPSB0aGlzLnNob3dzZWwuc3BsaXQoJywnKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZXRhcmdldCgpe1xyXG4gICAgICAgIHRoaXMuc2hvd3NlbD10aGlzLnNlbGVjdGVkLmpvaW4oKTsgIFxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UudGFyZ21hcmsodGhpcy5vcmdpZCx0aGlzLnNob3dzZWwpXHJcbi5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMudGFybWt0PTA7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4vL3RhcmdldCBtYXJrZXRzIGVuZHNcclxuLy95ZWFyIG9mIGluY29ycCBzdGFydFxyXG55ZWFyb2ZpbmNvcnA9Jyc7XHJcbnlyY29wPTA7XHJcbnVwZGF0ZXllYXJvZmluY28oKXtcclxuICAgIHRoaXMuX3NlcnZpY2UueWVhcm9maW5jbyh0aGlzLm9yZ2lkLHRoaXMueWVhcm9maW5jb3JwKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueXJjb3A9MDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4vL3llYXJvZiBpbmNvcnAgZW5kc1xyXG4vL3R1cm5vdmVyIHN0YXJ0XHJcbnR1cm5PdmVybGlzdDtcclxudG92cmR1bTtcclxudHVybnZhbHVlPScnO1xyXG50b3ZyPTA7XHJcbnRvdm51bT0nJztcclxudG92cmVuO1xyXG5cclxuZ2V0VHVybk92ZXIoKSB7XHJcbiAgICB0aGlzLnRvdnJkdW09IHRoaXMudHVybnZhbHVlLnNwbGl0KCcgJyk7XHJcbiAgICB0aGlzLnRvdm51bT10aGlzLnRvdnJkdW1bMF07XHJcbiAgICB0aGlzLnRvdnJlbj10aGlzLnRvdnJkdW1bMV07XHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2UudHVybm92ZXJ2YWx1ZSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuT3Zlcmxpc3QgPSBkYXRhLnJlc3BvbnNlLnR1cm5vdmVycmVzdWx0cztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGV0b3YoKXtcclxuICAgICAgICB0aGlzLnR1cm52YWx1ZT10aGlzLnRvdm51bSsnICcrdGhpcy50b3ZyZW47XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS50dXJub3Zlcih0aGlzLm9yZ2lkLHRoaXMudHVybnZhbHVlKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdnI9MDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbi8vdHVybiBvdmVyIGVuZHNcclxuLy9vcmcgZGVzY3JpcHRpb24gc3RhcnRcclxuZGVzYz0wO1xyXG5vcmdkZXNjcmlwPScnO1xyXG51cGRhdGVkZXNjKCl7XHJcbnRoaXMuX3NlcnZpY2Uub3JnZGVzYyh0aGlzLm9yZ2lkLHRoaXMub3JnZGVzY3JpcClcclxuIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2M9MDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbn1cclxuLy9vcmcgZGVzY3JpcHRpb24gZW5kc1xyXG4vL2dldG9yZ2RhdGEgc3RhcnRcclxuZ2V0b3JnZGF0YSgpe1xyXG4gICAgdGhpcy5fc2VydmljZS5nZXRvcmdkYXRhKHRoaXMub3JnaWQpXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3Q9ZGF0YS5yZXNwb25zZS5vcmdkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWNlYj10ZXN0LmZhY2Vib29rdXJsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb29nbGU9dGVzdC5nb29nbGVwbHVzdXJsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtlZGluPXRlc3QubGlua2VkaW51cmxcclxuICAgICAgICAgICAgICAgIHRoaXMudHdpdHRlcj10ZXN0LnR3aXR0ZXJ1cmxcclxuICAgICAgICAgICAgICAgIHRoaXMueW91dD10ZXN0LnlvdXR1YmV1cmxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZUNhZ3RlZ29yeT10ZXN0Lm9nX2NhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc3ViQ2F0ZWdvcnk9dGVzdC5vZ19zdWJjYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JnZGVzY3JpcD10ZXN0Lm9nX2Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyb2ZpbmNvcnA9dGVzdC5vZ19lc3RhYmxpc2hlZF95ZWFyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkQ291bnQ9dGVzdC5vZ19oZWFkY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1c2luZXNzQ2F0ZWdvcnk9dGVzdC5vZ19zZXJ2aWNlc2VjdG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93c2VsPXRlc3Qub2dfdGFyZ2V0X21hcmtldDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVybnZhbHVlPXRlc3Qub2dfdHVybm92ZXJfdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybD10ZXN0Lm9nX3VybDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbn1cclxuLy9nZXRvcmdkYXRhIGVuZHNcclxubGlua2U9LTE7XHJcbmdvb2dsZT1cIlwiO1xyXG5saW5rZWRpbj0nJztcclxudHdpdHRlcj0nJztcclxuZmFjZWI9Jyc7XHJcbnlvdXQ9Jyc7XHJcbnNvY2lhbChpKXtcclxuICAgIHZhciByZXE9e307XHJcbiAgICBpZihpPT0wKXtcclxuICAgICAgICByZXE9e1wib3JnYW5pc2F0aW9uaWRcIjp0aGlzLm9yZ2lkLFwibGlua2VkaW51cmxcIjp0aGlzLmxpbmtlZGlufTtcclxuICAgIH1lbHNlIGlmKGk9PTEpe1xyXG4gcmVxPXtcIm9yZ2FuaXNhdGlvbmlkXCI6dGhpcy5vcmdpZCxcImdvb2dsZXBsdXN1cmxcIjp0aGlzLmdvb2dsZX07XHJcbiAgICB9ZWxzZSBpZihpPT0yKXtcclxuIHJlcT17XCJvcmdhbmlzYXRpb25pZFwiOnRoaXMub3JnaWQsXCJ0d2l0dGVydXJsXCI6dGhpcy50d2l0dGVyfTtcclxuICAgIH1lbHNlIGlmKGk9PTMpe1xyXG4gcmVxPXtcIm9yZ2FuaXNhdGlvbmlkXCI6dGhpcy5vcmdpZCxcImZhY2Vib29rdXJsXCI6dGhpcy5mYWNlYn07XHJcbiAgICB9ZWxzZSBpZihpPT00KXtcclxuIHJlcT17XCJvcmdhbmlzYXRpb25pZFwiOnRoaXMub3JnaWQsXCJ5b3V0dWJldXJsXCI6dGhpcy55b3V0fTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlcnZpY2Uuc29jaWFsKHJlcSlcclxuICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjPTA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG59XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
