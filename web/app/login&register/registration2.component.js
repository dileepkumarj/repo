System.register(['angular2/core', 'angular2/router', 'angular2/common', '../Validations/error.messages', '../validations/numberOnly.Directive', '../Services/register.Service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, error_messages_1, numberOnly_Directive_1, register_Service_1;
    var Registration2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (error_messages_1_1) {
                error_messages_1 = error_messages_1_1;
            },
            function (numberOnly_Directive_1_1) {
                numberOnly_Directive_1 = numberOnly_Directive_1_1;
            },
            function (register_Service_1_1) {
                register_Service_1 = register_Service_1_1;
            }],
        execute: function() {
            Registration2Component = (function () {
                function Registration2Component(_formBuilder, router, _httpservice, myElement, numberonly) {
                    this._formBuilder = _formBuilder;
                    this.router = router;
                    this._httpservice = _httpservice;
                    this.myElement = myElement;
                    this.numberonly = numberonly;
                    this.sublocations = [];
                    this.query = '';
                    this.countries = [];
                    this.filteredList = [];
                    this.selected = [];
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
                            this.selected = this.localdata.targetmark;
                        }
                    }
                }
                Registration2Component.prototype.pheventHandler = function (evt, val) {
                    this.numberonly.phonenumber(evt, val);
                };
                Registration2Component.prototype.pineventHandler = function (evt, val) {
                    this.numberonly.pincode(evt, val);
                };
                Registration2Component.prototype.ngOnInit = function () {
                    if (this.localdata.headcount == null || undefined) {
                        this.registerform = this._formBuilder.group({
                            'headcount': ['', common_1.Validators.nullValidator],
                            'turnover': ['', common_1.Validators.nullValidator],
                            'hqdescription': ['', common_1.Validators.required],
                            'hqaddress1': ['', common_1.Validators.required],
                            'hqaddress2': ['', common_1.Validators.nullValidator],
                            'hqcountry': ['', common_1.Validators.required],
                            'hqstate': ['', common_1.Validators.required],
                            'hqcity': ['', common_1.Validators.required],
                            'hqzip': ['', common_1.Validators.nullValidator],
                            'hqphone1': ['', common_1.Validators.nullValidator],
                            'hqphone2': ['', common_1.Validators.nullValidator],
                            'hqfax': ['', common_1.Validators.nullValidator],
                            'targetmark': ['', common_1.Validators.nullValidator],
                        });
                    }
                    else {
                        this.registerform = this._formBuilder.group({
                            'headcount': [this.localdata.headcount, common_1.Validators.nullValidator],
                            'turnover': [this.localdata.turnover, common_1.Validators.nullValidator],
                            'hqdescription': [this.localdata.headquarters.Description, common_1.Validators.required],
                            'hqaddress1': [this.localdata.headquarters.Address1, common_1.Validators.required],
                            'hqaddress2': [this.localdata.headquarters.Address2, common_1.Validators.nullValidator],
                            'hqcountry': [this.localdata.headquarters.Country, common_1.Validators.required],
                            'hqstate': [this.localdata.headquarters.State, common_1.Validators.required],
                            'hqcity': [this.localdata.headquarters.City, common_1.Validators.required],
                            'hqzip': [this.localdata.headquarters.Zip, common_1.Validators.nullValidator],
                            'hqphone1': [this.localdata.headquarters.Phone1, common_1.Validators.nullValidator],
                            'hqphone2': [this.localdata.headquarters.Phone2, common_1.Validators.nullValidator],
                            'hqfax': [this.localdata.headquarters.Fax, common_1.Validators.nullValidator],
                            'targetmark': ['', common_1.Validators.nullValidator],
                        });
                    }
                };
                Registration2Component.prototype.getGetHeadCount = function () {
                    var _this = this;
                    this._httpservice.getheadCount()
                        .subscribe(function (data) {
                        _this.headCountlist = data.response.headcounts;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                Registration2Component.prototype.getTurnOver = function () {
                    var _this = this;
                    this._httpservice.turnovervalue()
                        .subscribe(function (data) {
                        _this.turnOverlist = data.response.turnoverresults;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                Registration2Component.prototype.addheadquarters = function () {
                    if (this.sublocations.length <= 2) {
                        this.sublocations.push({ description: '', address1: '', address2: '', country: '', state: '', city: '', zip: '', phone1: '', phone2: '', fax: '' });
                    }
                    else {
                        var disableloca = true;
                    }
                };
                Registration2Component.prototype.gettargemarket = function () {
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
                Registration2Component.prototype.getcountrylist = function () {
                    var _this = this;
                    this._httpservice.countrieslist()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.countrylist = data.response.countries;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                Registration2Component.prototype.getstatelist = function (id) {
                    var _this = this;
                    this._httpservice.statelist(id)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.stateList = data.response.states;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                Registration2Component.prototype.getcities = function (id) {
                    var _this = this;
                    this._httpservice.citylist(id)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.citylist = data.response.cities;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                Registration2Component.prototype.filter = function (event) {
                    if (this.query !== "") {
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
                Registration2Component.prototype.select = function (item) {
                    this.selected.push(item);
                    this.query = '';
                    this.filteredList = [];
                };
                Registration2Component.prototype.remove = function (item) {
                    this.selected.splice(this.selected.indexOf(item), 1);
                };
                Registration2Component.prototype.handleBlur = function () {
                    if (this.selectedIdx > -1) {
                        this.query = this.filteredList[this.selectedIdx];
                    }
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                Registration2Component.prototype.handleClick = function (event) {
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
                Registration2Component.prototype.submit = function () {
                    this.localdata.headcount = this.registerform.value.headcount;
                    this.localdata.turnover = this.registerform.value.turnover;
                    this.localdata.headquarters = {
                        Description: this.registerform.value.hqdescription,
                        Address1: this.registerform.value.hqaddress1,
                        Address2: this.registerform.value.hqaddress2,
                        Country: this.registerform.value.hqcountry,
                        State: this.registerform.value.hqstate,
                        City: this.registerform.value.hqcity,
                        Zip: this.registerform.value.hqzip,
                        Phone1: this.registerform.value.hqphone1,
                        Phone2: this.registerform.value.hqphone2,
                        Fax: this.registerform.value.hqfax
                    };
                    this.localdata.targetmark = this.selected;
                    this.localdata.sublocations = this.sublocations;
                    localStorage.setItem('registration', JSON.stringify(this.localdata));
                    alert(JSON.stringify(this.localdata));
                    this.router.navigate(['Register3']);
                };
                Registration2Component = __decorate([
                    core_1.Component({
                        selector: 'register2',
                        templateUrl: "views/login&register/Registration2.html",
                        directives: [router_1.ROUTER_DIRECTIVES, error_messages_1.ErrorMessages],
                        providers: [register_Service_1.RegisterService, numberOnly_Directive_1.NumbersOnlyDirective]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, register_Service_1.RegisterService, core_1.ElementRef, numberOnly_Directive_1.NumbersOnlyDirective])
                ], Registration2Component);
                return Registration2Component;
            }());
            exports_1("Registration2Component", Registration2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL3JlZ2lzdHJhdGlvbjIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBVUksZ0NBQW9CLFlBQXlCLEVBQVUsTUFBYyxFQUFVLFlBQTZCLEVBQVUsU0FBcUIsRUFBUyxVQUErQjtvQkFBL0osaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBWTtvQkFBUyxlQUFVLEdBQVYsVUFBVSxDQUFxQjtvQkFObkwsaUJBQVksR0FBRyxFQUFFLENBQUM7b0JBbUpYLFVBQUssR0FBRyxFQUFFLENBQUM7b0JBQ1gsY0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDZixpQkFBWSxHQUFHLEVBQUUsQ0FBQztvQkFFbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFoSmpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLGtCQUFrQjtvQkFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLDBCQUEwQjtvQkFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO29CQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxFQUFFLENBQUMsQ0FBQyxJQUFJ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Q0FBQzt3QkFDOUMsU0FBUyxFQUFFLENBQUMsa0NBQWUsRUFBQywyQ0FBb0IsQ0FBQztxQkFDcEQsQ0FBQzs7MENBQUE7Z0JBK05GLDZCQUFDO1lBQUQsQ0E5TkEsQUE4TkMsSUFBQTtZQTlORCwyREE4TkMsQ0FBQSIsImZpbGUiOiJsb2dpbiZyZWdpc3Rlci9yZWdpc3RyYXRpb24yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIE5nRm9ybU1vZGVsfSBmcm9tICdhbmd1bGFyMi9jb21tb24nXHJcbmltcG9ydCB7RXJyb3JNZXNzYWdlc30gZnJvbSAnLi4vVmFsaWRhdGlvbnMvZXJyb3IubWVzc2FnZXMnXHJcbmltcG9ydCB7Rm9ybXNWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vdmFsaWRhdGlvbnMvcmVxdWlyZWQudmFsaWRhdG9yJ1xyXG5pbXBvcnQge051bWJlcnNPbmx5RGlyZWN0aXZlfSBmcm9tICcuLi92YWxpZGF0aW9ucy9udW1iZXJPbmx5LkRpcmVjdGl2ZSdcclxuaW1wb3J0IHtSZWdpc3RlclNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL3JlZ2lzdGVyLlNlcnZpY2UnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZWdpc3RlcjInLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbG9naW4mcmVnaXN0ZXIvUmVnaXN0cmF0aW9uMi5odG1sXCIsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEVycm9yTWVzc2FnZXNdLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVnaXN0ZXJTZXJ2aWNlLE51bWJlcnNPbmx5RGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICByZWdpc3RlcmZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIGhlYWRDb3VudGxpc3Q7XHJcbiAgICB0dXJuT3Zlcmxpc3Q7XHJcbiAgICBzdWJsb2NhdGlvbnMgPSBbXTtcclxuICAgIGNvdW50cnlsaXN0O1xyXG4gICAgc3RhdGVMaXN0O1xyXG4gICAgY2l0eWxpc3Q7XHJcbiAgICBsb2NhbGRhdGE7XHJcbiAgICByZWdpc3RlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfaHR0cHNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSwgcHJpdmF0ZSBteUVsZW1lbnQ6IEVsZW1lbnRSZWYscHJpdmF0ZSBudW1iZXJvbmx5Ok51bWJlcnNPbmx5RGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZ2lzdHJhdGlvbicpKTtcclxuICAgICAgICAvL2FsZXJ0KHJlZ2lzdGVyKTtcclxuICAgICAgICB0aGlzLmdldEdldEhlYWRDb3VudCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VHVybk92ZXIoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZGhlYWRxdWFydGVycygpO1xyXG4gICAgICAgIHRoaXMuZ2V0Y291bnRyeWxpc3QoKTtcclxuICAgICAgICB0aGlzLmdldHRhcmdlbWFya2V0KCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gbXlFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZHggPSAtMTtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZ2lzdHJhdGlvbicpKTtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxkYXRhLnN1YmxvY2F0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJsb2NhdGlvbnMgPSB0aGlzLmxvY2FsZGF0YS5zdWJsb2NhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldHN0YXRlbGlzdCh0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuQ291bnRyeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGNpdGllcyh0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuQ2l0eSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkPXRoaXMubG9jYWxkYXRhLnRhcmdldG1hcmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgcGhldmVudEhhbmRsZXIoZXZ0LHZhbCkge1xyXG50aGlzLm51bWJlcm9ubHkucGhvbmVudW1iZXIoZXZ0LHZhbClcclxuIH1cclxuICAgICAgcGluZXZlbnRIYW5kbGVyKGV2dCx2YWwpIHtcclxudGhpcy5udW1iZXJvbmx5LnBpbmNvZGUoZXZ0LHZhbClcclxuIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsZGF0YS5oZWFkY291bnQgPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICAnaGVhZGNvdW50JzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ3R1cm5vdmVyJzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ2hxZGVzY3JpcHRpb24nOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgJ2hxYWRkcmVzczEnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgJ2hxYWRkcmVzczInOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICAgICAnaHFjb3VudHJ5JzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICdocXN0YXRlJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICdocWNpdHknOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgJ2hxemlwJzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ2hxcGhvbmUxJzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ2hxcGhvbmUyJzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ2hxZmF4JzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ3RhcmdldG1hcmsnOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICAnaGVhZGNvdW50JzogW3RoaXMubG9jYWxkYXRhLmhlYWRjb3VudCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgICAgICd0dXJub3Zlcic6IFt0aGlzLmxvY2FsZGF0YS50dXJub3ZlciwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgICAgICdocWRlc2NyaXB0aW9uJzogW3RoaXMubG9jYWxkYXRhLmhlYWRxdWFydGVycy5EZXNjcmlwdGlvbiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnaHFhZGRyZXNzMSc6IFt0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuQWRkcmVzczEsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgJ2hxYWRkcmVzczInOiBbdGhpcy5sb2NhbGRhdGEuaGVhZHF1YXJ0ZXJzLkFkZHJlc3MyLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ2hxY291bnRyeSc6IFt0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuQ291bnRyeSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnaHFzdGF0ZSc6IFt0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuU3RhdGUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgJ2hxY2l0eSc6IFt0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuQ2l0eSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnaHF6aXAnOiBbdGhpcy5sb2NhbGRhdGEuaGVhZHF1YXJ0ZXJzLlppcCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgICAgICdocXBob25lMSc6IFt0aGlzLmxvY2FsZGF0YS5oZWFkcXVhcnRlcnMuUGhvbmUxLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ2hxcGhvbmUyJzogW3RoaXMubG9jYWxkYXRhLmhlYWRxdWFydGVycy5QaG9uZTIsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgICAgICAnaHFmYXgnOiBbdGhpcy5sb2NhbGRhdGEuaGVhZHF1YXJ0ZXJzLkZheCwgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgICAgICd0YXJnZXRtYXJrJzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRHZXRIZWFkQ291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2UuZ2V0aGVhZENvdW50KClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRDb3VudGxpc3QgPSBkYXRhLnJlc3BvbnNlLmhlYWRjb3VudHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldFR1cm5PdmVyKCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBzZXJ2aWNlLnR1cm5vdmVydmFsdWUoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVybk92ZXJsaXN0ID0gZGF0YS5yZXNwb25zZS50dXJub3ZlcnJlc3VsdHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhZGRoZWFkcXVhcnRlcnMoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdWJsb2NhdGlvbnMubGVuZ3RoPD0yKXtcclxuICAgICAgICB0aGlzLnN1YmxvY2F0aW9ucy5wdXNoKHsgZGVzY3JpcHRpb246ICcnLCBhZGRyZXNzMTogJycsIGFkZHJlc3MyOiAnJywgY291bnRyeTogJycsIHN0YXRlOiAnJywgY2l0eTogJycsIHppcDogJycsIHBob25lMTogJycsIHBob25lMjogJycsIGZheDogJycgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgdmFyIGRpc2FibGVsb2NhPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0dGFyZ2VtYXJrZXQoKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2UudGFyZ2V0bWFya2V0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZCA9IGRhdGEucmVzcG9uc2UudGFyZ2V0bWFrZXRyZXN1bHRzXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJkLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChlbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnb29kJylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldGNvdW50cnlsaXN0KCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBzZXJ2aWNlLmNvdW50cmllc2xpc3QoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5bGlzdCA9IGRhdGEucmVzcG9uc2UuY291bnRyaWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZ2V0c3RhdGVsaXN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2Uuc3RhdGVsaXN0KGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUxpc3QgPSBkYXRhLnJlc3BvbnNlLnN0YXRlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdldmVyeXRoaW5nIGdvaW5nIGdvb2QnKVxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldGNpdGllcyhpZCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBzZXJ2aWNlLmNpdHlsaXN0KGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5bGlzdCA9IGRhdGEucmVzcG9uc2UuY2l0aWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHF1ZXJ5ID0gJyc7XHJcbiAgICBwdWJsaWMgY291bnRyaWVzID0gW107XHJcbiAgICBwdWJsaWMgZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyBzZWxlY3RlZCA9IFtdO1xyXG4gICAgc2VsZWN0ZWRJZHg6IG51bWJlcjtcclxuICAgIGZpbHRlcihldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChlbC50b0xvd2VyQ2FzZSgpLnN1YnN0cigwLCB0aGlzLnF1ZXJ5Lmxlbmd0aCkgPT09IHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkgPT0gdHJ1ZTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gXCI0MFwiICYmIHRoaXMuc2VsZWN0ZWRJZHggPCB0aGlzLmZpbHRlcmVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZHgrKztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IFwiMzhcIiAmJiB0aGlzLnNlbGVjdGVkSWR4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkeC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIHJlbW92ZShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUJsdXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJZHggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5maWx0ZXJlZExpc3RbdGhpcy5zZWxlY3RlZElkeF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGNsaWNrZWRDb21wb25lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGluc2lkZSA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrZWRDb21wb25lbnQgPT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQgPSBjbGlja2VkQ29tcG9uZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfSB3aGlsZSAoY2xpY2tlZENvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKCFpbnNpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgfVxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxkYXRhLmhlYWRjb3VudCA9IHRoaXMucmVnaXN0ZXJmb3JtLnZhbHVlLmhlYWRjb3VudDtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YS50dXJub3ZlciA9IHRoaXMucmVnaXN0ZXJmb3JtLnZhbHVlLnR1cm5vdmVyO1xyXG4gICAgICAgIHRoaXMubG9jYWxkYXRhLmhlYWRxdWFydGVycyA9IHtcclxuICAgICAgICAgICAgRGVzY3JpcHRpb246dGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuaHFkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgQWRkcmVzczE6dGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuaHFhZGRyZXNzMSxcclxuICAgICAgICAgICAgQWRkcmVzczI6dGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuaHFhZGRyZXNzMixcclxuICAgICAgICAgICAgQ291bnRyeTp0aGlzLnJlZ2lzdGVyZm9ybS52YWx1ZS5ocWNvdW50cnksXHJcbiAgICAgICAgICAgIFN0YXRlOnRoaXMucmVnaXN0ZXJmb3JtLnZhbHVlLmhxc3RhdGUsXHJcbiAgICAgICAgICAgIENpdHk6dGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuaHFjaXR5LFxyXG4gICAgICAgICAgICBaaXA6dGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuaHF6aXAsXHJcbiAgICAgICAgICAgUGhvbmUxOnRoaXMucmVnaXN0ZXJmb3JtLnZhbHVlLmhxcGhvbmUxLFxyXG4gICAgICAgICAgIFBob25lMjp0aGlzLnJlZ2lzdGVyZm9ybS52YWx1ZS5ocXBob25lMixcclxuICAgICAgICAgICBGYXg6dGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuaHFmYXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YS50YXJnZXRtYXJrID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YS5zdWJsb2NhdGlvbnMgPSB0aGlzLnN1YmxvY2F0aW9ucztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVnaXN0cmF0aW9uJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2NhbGRhdGEpKTtcclxuICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLmxvY2FsZGF0YSkpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnUmVnaXN0ZXIzJ10pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
