System.register(['angular2/core', 'angular2/router', '../Services/register.Service'], function(exports_1, context_1) {
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
    var core_1, router_1, register_Service_1;
    var ValidateLinkedin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (register_Service_1_1) {
                register_Service_1 = register_Service_1_1;
            }],
        execute: function() {
            ValidateLinkedin = (function () {
                function ValidateLinkedin(router, _httpservice) {
                    this.router = router;
                    this._httpservice = _httpservice;
                    this.localdata1 = localStorage.getItem('ProfileDetails');
                    this.localdata1 = JSON.parse(this.localdata1);
                    if (this.localdata1 !== undefined) {
                        var email = this.localdata1.emailAddress;
                        var id = this.localdata1.id;
                        this.validate(email, id);
                    }
                }
                ValidateLinkedin.prototype.validate = function (email, id) {
                    var _this = this;
                    this._httpservice.validate(email, id)
                        .subscribe(function (data) {
                        if (data.response.status == 1) {
                            _this.router.navigate(['LinkedinReg']);
                        }
                        else if (data.response.status == 0) {
                            localStorage.removeItem('ProfileDetails');
                            localStorage.removeItem('CompanyDetails');
                            localStorage.setItem('authemail', data.response.results[0].ad_email);
                            localStorage.setItem('orgid', data.response.results[0].ad_organisation_id);
                            _this.router.navigateByUrl('/connections');
                        }
                    }, function (error) { return console.log(error); }, function () { return console.log('going well'); });
                };
                ValidateLinkedin = __decorate([
                    core_1.Component({
                        selector: 'Validating',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "Validating please wait",
                        providers: [register_Service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, register_Service_1.RegisterService])
                ], ValidateLinkedin);
                return ValidateLinkedin;
            }());
            exports_1("ValidateLinkedin", ValidateLinkedin);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL3ZhbGlkYXRlbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFFRSwwQkFBb0IsTUFBYyxFQUFVLFlBQTZCO29CQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtvQkFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUcsU0FBUyxDQUFDLENBQUEsQ0FBQzt3QkFDeEMsSUFBSSxLQUFLLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7d0JBQ3ZDLElBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsQ0FBQztnQkFDUCxDQUFDO2dCQUNELG1DQUFRLEdBQVIsVUFBUyxLQUFLLEVBQUMsRUFBRTtvQkFBakIsaUJBaUJDO29CQWhCSCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDO3lCQUNuQyxTQUFTLENBQ1IsVUFBQSxJQUFJO3dCQUNGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQzt3QkFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQzs0QkFDaEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUMxQyxZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNwRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzRCQUMxRSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDNUMsQ0FBQztvQkFDSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUUsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixFQUMzQixjQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBekIsQ0FBeUIsQ0FDNUIsQ0FBQztnQkFDQSxDQUFDO2dCQWxDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDaEMsUUFBUSxFQUFDLHdCQUF3Qjt3QkFDaEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDN0IsQ0FBQzs7b0NBQUE7Z0JBK0JGLHVCQUFDO1lBQUQsQ0E5QkEsQUE4QkMsSUFBQTtZQTlCRCwrQ0E4QkMsQ0FBQSIsImZpbGUiOiJsb2dpbiZyZWdpc3Rlci92YWxpZGF0ZWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge1JlZ2lzdGVyU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvcmVnaXN0ZXIuU2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdWYWxpZGF0aW5nJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gdGVtcGxhdGU6YFZhbGlkYXRpbmcgcGxlYXNlIHdhaXRgLFxyXG4gIHByb3ZpZGVyczogW1JlZ2lzdGVyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlTGlua2VkaW57XHJcbiAgbG9jYWxkYXRhMTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9odHRwc2VydmljZTogUmVnaXN0ZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxvY2FsZGF0YTE9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2ZpbGVEZXRhaWxzJyk7XHJcbiAgICAgICAgdGhpcy5sb2NhbGRhdGExPUpTT04ucGFyc2UodGhpcy5sb2NhbGRhdGExKTtcclxuICAgICAgICBpZih0aGlzLmxvY2FsZGF0YTEhPT11bmRlZmluZWQpe1xyXG52YXIgZW1haWw9dGhpcy5sb2NhbGRhdGExLmVtYWlsQWRkcmVzcztcclxudmFyIGlkPXRoaXMubG9jYWxkYXRhMS5pZDtcclxudGhpcy52YWxpZGF0ZShlbWFpbCxpZCk7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuICB2YWxpZGF0ZShlbWFpbCxpZCl7XHJcbnRoaXMuX2h0dHBzZXJ2aWNlLnZhbGlkYXRlKGVtYWlsLGlkKVxyXG4uc3Vic2NyaWJlKFxyXG4gIGRhdGE9PntcclxuICAgIGlmKGRhdGEucmVzcG9uc2Uuc3RhdHVzPT0xKXtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydMaW5rZWRpblJlZyddKTtcclxuICAgIH1lbHNlIGlmKGRhdGEucmVzcG9uc2Uuc3RhdHVzPT0wKXtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Byb2ZpbGVEZXRhaWxzJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdDb21wYW55RGV0YWlscycpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aGVtYWlsJyxkYXRhLnJlc3BvbnNlLnJlc3VsdHNbMF0uYWRfZW1haWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JnaWQnLGRhdGEucmVzcG9uc2UucmVzdWx0c1swXS5hZF9vcmdhbmlzYXRpb25faWQpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY29ubmVjdGlvbnMnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGVycm9yPT5jb25zb2xlLmxvZyhlcnJvciksXHJcbigpPT5jb25zb2xlLmxvZygnZ29pbmcgd2VsbCcpXHJcbik7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
