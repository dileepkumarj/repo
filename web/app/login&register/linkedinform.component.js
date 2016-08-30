System.register(['angular2/core', 'angular2/router', 'angular2/common', '../Validations/error.messages', '../validations/required.validator', '../Services/register.Service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, error_messages_1, required_validator_1, register_Service_1;
    var LinkedinRegComponent;
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
            function (required_validator_1_1) {
                required_validator_1 = required_validator_1_1;
            },
            function (register_Service_1_1) {
                register_Service_1 = register_Service_1_1;
            }],
        execute: function() {
            LinkedinRegComponent = (function () {
                function LinkedinRegComponent(_formBuilder, router, _httpservice) {
                    this._formBuilder = _formBuilder;
                    this.router = router;
                    this._httpservice = _httpservice;
                    this.typeoforganization = '';
                    this.Fields = {};
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
                LinkedinRegComponent.prototype.ngOnInit = function () {
                    if (this.localdata == null || undefined) {
                        this.registerform = this._formBuilder.group({
                            'orgtype': ['', common_1.Validators.required],
                            'orgdescrip': ['', common_1.Validators.nullValidator],
                            'serviceCategory': ['', common_1.Validators.required],
                            'servicesubCategory': ['', common_1.Validators.required],
                            'businessDomain': ['', common_1.Validators.required],
                            'websiteurl': ['', required_validator_1.FormsValidationService.url],
                        });
                    }
                    else {
                        this.registerform = this._formBuilder.group({
                            'orgtype': ['', common_1.Validators.required],
                            'orgdescrip': [this.localdata.description, common_1.Validators.required],
                            'serviceCategory': ['', common_1.Validators.required],
                            'servicesubCategory': ['', common_1.Validators.required],
                            'businessDomain': ['', common_1.Validators.required],
                            'websiteurl': [this.localdata.websiteUrl, required_validator_1.FormsValidationService.url],
                        });
                    }
                };
                LinkedinRegComponent.prototype.getServiceCategory = function () {
                    var _this = this;
                    this._httpservice.serviceCategory()
                        .subscribe(function (data) {
                        _this.serviceCategorylist = data.response.servicecategories;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LinkedinRegComponent.prototype.getserviceSub = function (id) {
                    var _this = this;
                    this._httpservice.serviceSubCategory(id)
                        .subscribe(function (data) {
                        _this.servicesubCategorylist = data.response.servicesubcategories;
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LinkedinRegComponent.prototype.getbusinessDomain = function () {
                    var _this = this;
                    this._httpservice.servicesetor()
                        .subscribe(function (data) {
                        _this.businessDomainlist = data.response.servicesectors;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LinkedinRegComponent.prototype.submit = function (form) {
                    var _this = this;
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
                    this.Fields.og_type = this.typeoforganization;
                    this.Fields.og_headcoount = this.localdata1.positions.values[0].company.size;
                    this._httpservice.linkedinsignup(this.Fields)
                        .subscribe(function (data) {
                        localStorage.removeItem('ProfileDetails');
                        localStorage.removeItem('CompanyDetails');
                        if (data.response.status == 1) {
                            localStorage.setItem('orgid', data.response.organisation.organisationid);
                            localStorage.setItem('authemail', data.response.organisation.email);
                            _this.router.navigate(['Connections']);
                        }
                        else if (data.response.status == -1) {
                            alert(data.response.message + 'Please Login');
                            // this.router.navigate(['login']);
                            _this.router.navigateByUrl('/');
                        }
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LinkedinRegComponent = __decorate([
                    core_1.Component({
                        selector: 'linkedinform',
                        directives: [router_1.ROUTER_DIRECTIVES, error_messages_1.ErrorMessages],
                        templateUrl: "views/login&register/LinkedinFrom.html",
                        providers: [register_Service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, register_Service_1.RegisterService])
                ], LinkedinRegComponent);
                return LinkedinRegComponent;
            }());
            exports_1("LinkedinRegComponent", LinkedinRegComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL2xpbmtlZGluZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFRSSw4QkFBb0IsWUFBeUIsRUFBVSxNQUFjLEVBQVUsWUFBNkI7b0JBQXhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO29CQUQ1Ryx1QkFBa0IsR0FBQyxFQUFFLENBQUM7b0JBZ0V0QixXQUFNLEdBQUcsRUFBRSxDQUFDO29CQTlEUixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN0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Q2pDLENBQUM7b0JBQ0wsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBcEMsQ0FBb0MsQ0FDekMsQ0FBQztnQkFDVixDQUFDO2dCQS9HTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSw4QkFBYSxDQUFDO3dCQUM5QyxXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUMvQixDQUFDOzt3Q0FBQTtnQkEyR0YsMkJBQUM7WUFBRCxDQTFHQSxBQTBHQyxJQUFBO1lBMUdELHVEQTBHQyxDQUFBIiwiZmlsZSI6ImxvZ2luJnJlZ2lzdGVyL2xpbmtlZGluZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbmltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgTmdGb3JtTW9kZWx9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtFcnJvck1lc3NhZ2VzfSBmcm9tICcuLi9WYWxpZGF0aW9ucy9lcnJvci5tZXNzYWdlcydcclxuaW1wb3J0IHtGb3Jtc1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi92YWxpZGF0aW9ucy9yZXF1aXJlZC52YWxpZGF0b3InXHJcbmltcG9ydCB7UmVnaXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9yZWdpc3Rlci5TZXJ2aWNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlua2VkaW5mb3JtJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgRXJyb3JNZXNzYWdlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9sb2dpbiZyZWdpc3Rlci9MaW5rZWRpbkZyb20uaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVnaXN0ZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua2VkaW5SZWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcmVnaXN0ZXJmb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBzZXJ2aWNlQ2F0ZWdvcnlsaXN0O1xyXG4gICAgc2VydmljZXN1YkNhdGVnb3J5bGlzdDtcclxuICAgIGJ1c2luZXNzRG9tYWlubGlzdDtcclxuICAgIGxvY2FsZGF0YTE7XHJcbiAgICBsb2NhbGRhdGE7XHJcbiAgICB0eXBlb2Zvcmdhbml6YXRpb249Jyc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2h0dHBzZXJ2aWNlOiBSZWdpc3RlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmdldFNlcnZpY2VDYXRlZ29yeSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0YnVzaW5lc3NEb21haW4oKTtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YTEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvZmlsZURldGFpbHMnKTtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YTEgPSBKU09OLnBhcnNlKHRoaXMubG9jYWxkYXRhMSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ29tcGFueURldGFpbHMnKTtcclxuICAgICAgICB0aGlzLmxvY2FsZGF0YSA9IEpTT04ucGFyc2UodGhpcy5sb2NhbGRhdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsZGF0YTEgPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxkYXRhID09IG51bGwgfHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJmb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgJ29yZ3R5cGUnOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICdvcmdkZXNjcmlwJzogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICAgICAgJ3NlcnZpY2VDYXRlZ29yeSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnc2VydmljZXN1YkNhdGVnb3J5JzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICdidXNpbmVzc0RvbWFpbic6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnd2Vic2l0ZXVybCc6IFsnJywgRm9ybXNWYWxpZGF0aW9uU2VydmljZS51cmxdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgICAgICdvcmd0eXBlJzpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnb3JnZGVzY3JpcCc6IFt0aGlzLmxvY2FsZGF0YS5kZXNjcmlwdGlvbiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICAgICAnc2VydmljZUNhdGVnb3J5JzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICdzZXJ2aWNlc3ViQ2F0ZWdvcnknOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAgICAgJ2J1c2luZXNzRG9tYWluJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgICAgICd3ZWJzaXRldXJsJzogW3RoaXMubG9jYWxkYXRhLndlYnNpdGVVcmwsIEZvcm1zVmFsaWRhdGlvblNlcnZpY2UudXJsXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U2VydmljZUNhdGVnb3J5KCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBzZXJ2aWNlLnNlcnZpY2VDYXRlZ29yeSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlQ2F0ZWdvcnlsaXN0ID0gZGF0YS5yZXNwb25zZS5zZXJ2aWNlY2F0ZWdvcmllcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZ2V0c2VydmljZVN1YihpZCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBzZXJ2aWNlLnNlcnZpY2VTdWJDYXRlZ29yeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzdWJDYXRlZ29yeWxpc3QgPSBkYXRhLnJlc3BvbnNlLnNlcnZpY2VzdWJjYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZXZlcnl0aGluZyBnb2luZyBnb29kXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBnZXRidXNpbmVzc0RvbWFpbigpIHtcclxuICAgICAgICB0aGlzLl9odHRwc2VydmljZS5zZXJ2aWNlc2V0b3IoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVzaW5lc3NEb21haW5saXN0ID0gZGF0YS5yZXNwb25zZS5zZXJ2aWNlc2VjdG9yczsgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIEZpZWxkcyA9IHt9O1xyXG4gICAgc3VibWl0KGZvcm0pIHtcclxuICAgICAgICB0aGlzLkZpZWxkcy5vZ19uYW1lID0gdGhpcy5sb2NhbGRhdGExLnBvc2l0aW9ucy52YWx1ZXNbMF0uY29tcGFueS5uYW1lO1xyXG4gICAgICAgIHRoaXMuRmllbGRzLm9nX3N1YmNhdGVnb3J5ID0gdGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuc2VydmljZXN1YkNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuRmllbGRzLm9nX2NhdGVnb3J5ID0gdGhpcy5yZWdpc3RlcmZvcm0udmFsdWUuc2VydmljZUNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuRmllbGRzLm9nX3VybCA9IHRoaXMucmVnaXN0ZXJmb3JtLnZhbHVlLndlYnNpdGV1cmw7XHJcbiAgICAgICAgdGhpcy5GaWVsZHMub2dfc2VydmljZXNlY3RvciA9IHRoaXMucmVnaXN0ZXJmb3JtLnZhbHVlLmJ1c2luZXNzRG9tYWluO1xyXG4gICAgICAgIHRoaXMuRmllbGRzLm9nX2Rlc2NyaXB0aW9uID0gdGhpcy5yZWdpc3RlcmZvcm0udmFsdWUub3JnZGVzY3JpcDtcclxuICAgICAgICB0aGlzLkZpZWxkcy5hZF9maXJzdG5hbWUgPSB0aGlzLmxvY2FsZGF0YTEuZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuRmllbGRzLmFkX2xhc3RuYW1lID0gdGhpcy5sb2NhbGRhdGExLmxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuRmllbGRzLmFkX2Rlc2lnbmF0aW9uID0gdGhpcy5sb2NhbGRhdGExLmhlYWRsaW5lO1xyXG4gICAgICAgIHRoaXMuRmllbGRzLmFkX2VtYWlsID0gdGhpcy5sb2NhbGRhdGExLmVtYWlsQWRkcmVzcztcclxuICAgICAgICB0aGlzLkZpZWxkcy5saW5rZWRpbnVzZXJpZCA9IHRoaXMubG9jYWxkYXRhMS5pZDtcclxuICAgICAgICB0aGlzLkZpZWxkcy5vZ190eXBlPXRoaXMudHlwZW9mb3JnYW5pemF0aW9uO1xyXG4gICAgICAgIHRoaXMuRmllbGRzLm9nX2hlYWRjb291bnQ9dGhpcy5sb2NhbGRhdGExLnBvc2l0aW9ucy52YWx1ZXNbMF0uY29tcGFueS5zaXplXHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2UubGlua2VkaW5zaWdudXAodGhpcy5GaWVsZHMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Byb2ZpbGVEZXRhaWxzJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQ29tcGFueURldGFpbHMnKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucmVzcG9uc2Uuc3RhdHVzPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JnaWQnLGRhdGEucmVzcG9uc2Uub3JnYW5pc2F0aW9uLm9yZ2FuaXNhdGlvbmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhlbWFpbCcsZGF0YS5yZXNwb25zZS5vcmdhbmlzYXRpb24uZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnQ29ubmVjdGlvbnMnXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhLnJlc3BvbnNlLnN0YXR1cz09LTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEucmVzcG9uc2UubWVzc2FnZSsnUGxlYXNlIExvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
