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
    var LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(_formBuilder, router, _service) {
                    this._formBuilder = _formBuilder;
                    this.router = router;
                    this._service = _service;
                    this.loginsignup = false;
                    this.typeoforganization = "";
                    this.termsaccepted = false;
                    this.Signup = 0;
                    this.getServiceCategory();
                    this.getbusinessDomain();
                }
                LoginComponent.prototype.loginSubmit = function (form) {
                    var _this = this;
                    this._service.login(this.loginform.value.username, this.loginform.value.password)
                        .subscribe(function (data) {
                        if (data.response.status == 1) {
                            localStorage.setItem('authemail', _this.loginform.value.username);
                            localStorage.setItem('orgid', data.response.og_id);
                            localStorage.setItem('usertype', data.response.logintype);
                            _this.router.navigate(['Connections']);
                        }
                        else {
                            alert('invalid credentials');
                        }
                    }, function (error) { return console.log(error); }, function () { return console.log('everythin'); });
                };
                LoginComponent.prototype.signupSubmit = function () {
                    var _this = this;
                    this.signupform.value.serviceprovider = this.typeoforganization;
                    this._service.signup(this.signupform.value)
                        .subscribe(function (data) {
                        //this.register={organisationid:data.organisationid}
                        if (data.response.status == -1) {
                            alert("Email Already registerd..!");
                        }
                        else if (data.response.status == 1) {
                            _this.Signup = data.response.status;
                        }
                        else {
                            alert("Registration Failed Try after some time");
                        }
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LoginComponent.prototype.ngOnInit = function () {
                    this.signupform = this._formBuilder.group({
                        'serviceprovider': ['', common_1.Validators.required],
                        'firstname': ['', common_1.Validators.required],
                        'lastname': ['', common_1.Validators.required],
                        'designation': ['', common_1.Validators.required],
                        'organisationname': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, required_validator_1.FormsValidationService.emailValidator])],
                        'serviceCategory': ['', common_1.Validators.required],
                        'servicesubCategory': ['', common_1.Validators.required],
                        'businessDomain': ['', common_1.Validators.required],
                        'terms': ['', common_1.Validators.required],
                    });
                    this.loginform = this._formBuilder.group({
                        'username': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                required_validator_1.FormsValidationService.emailValidator
                            ])],
                        'password': ['', common_1.Validators.required],
                    });
                };
                LoginComponent.prototype.getServiceCategory = function () {
                    var _this = this;
                    this._service.serviceCategory()
                        .subscribe(function (data) {
                        _this.serviceCategorylist = data.response.servicecategories;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LoginComponent.prototype.getserviceSub = function (id) {
                    var _this = this;
                    this._service.serviceSubCategory(id)
                        .subscribe(function (data) {
                        _this.servicesubCategorylist = data.response.servicesubcategories;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LoginComponent.prototype.getbusinessDomain = function () {
                    var _this = this;
                    this._service.servicesetor()
                        .subscribe(function (data) {
                        _this.businessDomainlist = data.response.servicesectors;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [error_messages_1.ErrorMessages],
                        templateUrl: "views/login&register/Signup.html",
                        providers: [register_Service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, register_Service_1.RegisterService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQVdJLHdCQUFvQixZQUF5QixFQUFVLE1BQWMsRUFBVSxRQUF5QjtvQkFBcEYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBVSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtvQkFSakcsZ0JBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzNCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztvQkFJeEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7b0JBRXRCLFdBQU0sR0FBQyxDQUFDLENBQUM7b0JBRUwsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxJQUFJO29CQUFoQixpQkFnQkM7b0JBZkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzt5QkFDL0UsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDQSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUN4QixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDaEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FB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SSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7eUJBQ3ZCLFNBQVMsQ0FDVixVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO3dCQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlFLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQXBDLENBQW9DLENBQ3pDLENBQUM7Z0JBQ1YsQ0FBQztnQkFsSEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsVUFBVSxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDM0IsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7a0NBQUE7Z0JBOEdGLHFCQUFDO1lBQUQsQ0E3R0EsQUE2R0MsSUFBQTtZQTdHRCwyQ0E2R0MsQ0FBQSIsImZpbGUiOiJsb2dpbiZyZWdpc3Rlci9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbmltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgTmdGb3JtTW9kZWx9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtFcnJvck1lc3NhZ2VzfSBmcm9tICcuLi9WYWxpZGF0aW9ucy9lcnJvci5tZXNzYWdlcydcclxuaW1wb3J0IHtGb3Jtc1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi92YWxpZGF0aW9ucy9yZXF1aXJlZC52YWxpZGF0b3InXHJcbmltcG9ydCB7UmVnaXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9yZWdpc3Rlci5TZXJ2aWNlJ1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICBkaXJlY3RpdmVzOiBbRXJyb3JNZXNzYWdlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9sb2dpbiZyZWdpc3Rlci9TaWdudXAuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVnaXN0ZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbG9naW5mb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBzaWdudXBmb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBwdWJsaWMgbG9naW5zaWdudXAgPSBmYWxzZTtcclxuICAgIHR5cGVvZm9yZ2FuaXphdGlvbiA9IFwiXCI7XHJcbiAgICBzZXJ2aWNlQ2F0ZWdvcnlsaXN0O1xyXG4gICAgc2VydmljZXN1YkNhdGVnb3J5bGlzdDtcclxuICAgIGJ1c2luZXNzRG9tYWlubGlzdDtcclxuICAgIHRlcm1zYWNjZXB0ZWQgPSBmYWxzZTtcclxuICAgIHJlZ2lzdGVyO1xyXG4gICAgU2lnbnVwPTA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3NlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0U2VydmljZUNhdGVnb3J5KCk7XHJcbiAgICAgICAgdGhpcy5nZXRidXNpbmVzc0RvbWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luU3VibWl0KGZvcm0pIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5mb3JtLnZhbHVlLnVzZXJuYW1lLHRoaXMubG9naW5mb3JtLnZhbHVlLnBhc3N3b3JkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucmVzcG9uc2Uuc3RhdHVzPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aGVtYWlsJyx0aGlzLmxvZ2luZm9ybS52YWx1ZS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZ2lkJyxkYXRhLnJlc3BvbnNlLm9nX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcnR5cGUnLGRhdGEucmVzcG9uc2UubG9naW50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ0Nvbm5lY3Rpb25zJ10pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2ludmFsaWQgY3JlZGVudGlhbHMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I9PmNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCk9PmNvbnNvbGUubG9nKCdldmVyeXRoaW4nKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzaWdudXBTdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWdudXBmb3JtLnZhbHVlLnNlcnZpY2Vwcm92aWRlciA9IHRoaXMudHlwZW9mb3JnYW5pemF0aW9uO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uuc2lnbnVwKHRoaXMuc2lnbnVwZm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVnaXN0ZXI9e29yZ2FuaXNhdGlvbmlkOmRhdGEub3JnYW5pc2F0aW9uaWR9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5zdGF0dXMgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVtYWlsIEFscmVhZHkgcmVnaXN0ZXJkLi4hXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXNwb25zZS5zdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaWdudXA9ZGF0YS5yZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBhbGVydChcIllvdSBoYXZlIFN1Y2Vzc2Z1bGx5IFJlZ2lzdGVyZWQgUGxlYXNlIGNoZWNrIHlvdXIgbWFpbCBhbmQgcHJvY2VlZCBUaGFuayBZb3UuLiFcIilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJSZWdpc3RyYXRpb24gRmFpbGVkIFRyeSBhZnRlciBzb21lIHRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNpZ251cGZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdzZXJ2aWNlcHJvdmlkZXInOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnZmlyc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ2xhc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ2Rlc2lnbmF0aW9uJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ29yZ2FuaXNhdGlvbm5hbWUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRm9ybXNWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl0pXSxcclxuICAgICAgICAgICAgJ3NlcnZpY2VDYXRlZ29yeSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdzZXJ2aWNlc3ViQ2F0ZWdvcnknOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnYnVzaW5lc3NEb21haW4nOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAndGVybXMnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbmZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICd1c2VybmFtZSc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBGb3Jtc1ZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFNlcnZpY2VDYXRlZ29yeSgpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnNlcnZpY2VDYXRlZ29yeSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlQ2F0ZWdvcnlsaXN0ID0gZGF0YS5yZXNwb25zZS5zZXJ2aWNlY2F0ZWdvcmllcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGdldHNlcnZpY2VTdWIoaWQpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnNlcnZpY2VTdWJDYXRlZ29yeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzdWJDYXRlZ29yeWxpc3QgPSBkYXRhLnJlc3BvbnNlLnNlcnZpY2VzdWJjYXRlZ29yaWVzO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZ2V0YnVzaW5lc3NEb21haW4oKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5zZXJ2aWNlc2V0b3IoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVzaW5lc3NEb21haW5saXN0ID0gZGF0YS5yZXNwb25zZS5zZXJ2aWNlc2VjdG9yczsgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
