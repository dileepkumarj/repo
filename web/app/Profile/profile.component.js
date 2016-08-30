System.register(['angular2/core', '../Common/header.component', './organization.component', './projectport.component', './information.component', './adminAcess.component', '../Services/profile.Service', '../validations/numberOnly.Directive'], function(exports_1, context_1) {
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
    var core_1, header_component_1, organization_component_1, projectport_component_1, information_component_1, adminAcess_component_1, profile_Service_1, numberOnly_Directive_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (organization_component_1_1) {
                organization_component_1 = organization_component_1_1;
            },
            function (projectport_component_1_1) {
                projectport_component_1 = projectport_component_1_1;
            },
            function (information_component_1_1) {
                information_component_1 = information_component_1_1;
            },
            function (adminAcess_component_1_1) {
                adminAcess_component_1 = adminAcess_component_1_1;
            },
            function (profile_Service_1_1) {
                profile_Service_1 = profile_Service_1_1;
            },
            function (numberOnly_Directive_1_1) {
                numberOnly_Directive_1 = numberOnly_Directive_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(_service) {
                    var _this = this;
                    this._service = _service;
                    this.companyname = '';
                    this.getfile = function (evt, cont) {
                        var files = evt.target.files;
                        var file = files[0];
                        if (files && file) {
                            var reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = (function () {
                                //var binaryString = readerEvt.target.result;
                                if (cont == 'client') {
                                    _this.orgimg = reader.result;
                                }
                                else if (cont == 'port') {
                                    _this.cvrimg = reader.result;
                                }
                            });
                        }
                    };
                    //cover pic end
                    //orgname update start
                    this.cnedt = 0;
                    this.profile = 0;
                    this.orgid = localStorage.getItem('orgid');
                    this.getval();
                }
                ProfileComponent.prototype.ngOnInit = function () {
                };
                //logo start
                ProfileComponent.prototype.addlogo = function (atn) {
                    var cs;
                    if (atn == 0) {
                        cs = 0;
                    }
                    else {
                        cs = 1;
                    }
                    var data = { "organisationid": this.orgid, "coverpic": this.orgimg, "coverstatus": 1 };
                    this._service.addLogo(data)
                        .subscribe(function (data) {
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                //logo end
                //cover pic start
                ProfileComponent.prototype.orglogo = function (atn) {
                    var cs;
                    if (atn == 0) {
                        cs = 0;
                    }
                    else {
                        cs = 1;
                    }
                    var body = { "organisationid": this.orgid, "coverpic": this.cvrimg, "coverstatus": cs };
                    this._service.addorgLogo(body)
                        .subscribe(function (data) {
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                ProfileComponent.prototype.updateorgname = function () {
                    var _this = this;
                    this._service.orgname(this.orgid, this.companyname)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.cnedt = 0;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                //org name update ends
                ProfileComponent.prototype.getval = function () {
                    var _this = this;
                    this._service.getorgdata(this.orgid)
                        .subscribe(function (data) {
                        var test = data.response.orgdata;
                        _this.orgimg = test.og_logo;
                        _this.cvrimg = test.og_coverpic;
                        _this.companyname = test.og_name;
                    }, function (error) { return alert(error); }, function () { return console.log('everything going good'); });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'selector',
                        template: "<div>\n     <headsec></headsec>\n     <div class=\"requirement\">\n        <div class=\"banner\">\n            <div class=\"row\">\n                <div class=\" col-md-12 col-sm-12 col-lg-12\">\n                    <a class=\"img_section\"> <img [src]=\"cvrimg\">\n                        <div class=\"company-profile\">\n                            <div>\n                                <div> <img [src]=\"orgimg\"> </div>\n                                <div *ngIf=\"cnedt==0\">\n                                    <h4>{{companyname}}</h4>\n                                    <a href=\"javascript:void(0)\" (click)=\"cnedt=1\">Edit</a>\n                                    </div>\n                                    <div *ngIf=\"cnedt==1\">\n                                    <input type=\"text\" [(ngModel)]=\"companyname\">\n                                    <a href=\"javascript:void(0)\" (click)=\"cnedt=0\">cancel</a>\n                                    <a href=\"javascript:void(0)\" (click)=\"updateorgname()\">save</a>\n                                    </div>\n                            </div>\n                        </div>\n                    </a>\n                    <div class=\"child-header\">\n                        <ul>\n                            <li [class.active]=\"profile==0\" (click)=\"profile=0\"><a>Organization</a></li>\n                            <li [class.active]=\"profile==1\" (click)=\"profile=1\"><a>Project Portfolio</a></li>\n                            <li [class.active]=\"profile==2\" (click)=\"profile=2\"><a>Your Information</a></li>\n                            <li [class.active]=\"profile==3\" (click)=\"profile=3\"><a>Administration Settings</a></li>\n                        </ul>\n                    </div>\n                    <input type=\"file\" id=\"f\" accept=\"image/*\" (change)=\"getfile($event,'client')\"><button type=\"button\" class=\"btn btn-default\" [disabled]=\"orgimg==undefined\" (click)=\"addlogo()\">orgpic</button><button type=\"button\" class=\"btn btn-default\" [disabled]=\"orgimg!==undefined\" (click)=\"addlogo(0)\">del</button>\n                    <input type=\"file\" id=\"f\" accept=\"image/*\" (change)=\"getfile($event,'port')\"><button type=\"button\" class=\"btn btn-default\" [disabled]=\"cvrimg==undefined\" (click)=\"orglogo()\">cvrpic</button><button type=\"button\" class=\"btn btn-default\" [disabled]=\"cvrimg!==undefined\" (click)=\"orglogo(0)\">del</button>\n                </div>\n            </div>\n        </div>\n        </div>\n        <div *ngIf=\"profile==0\">\n        <orgprofile></orgprofile>\n        </div>\n         <div *ngIf=\"profile==1\">\n        <projectport></projectport>\n        </div>\n         <div *ngIf=\"profile==2\">\n        <information></information>\n        </div>\n         <div *ngIf=\"profile==3\">\n        <access></access>\n        </div>\n     </div>",
                        directives: [header_component_1.HeaderComponent, organization_component_1.OrganisationComponent, projectport_component_1.ProjectportComponent, information_component_1.InformationComponent, adminAcess_component_1.AccessComponent],
                        providers: [profile_Service_1.ProfileService, numberOnly_Directive_1.NumbersOnlyDirective]
                    }), 
                    __metadata('design:paramtypes', [profile_Service_1.ProfileService])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4REE7Z0JBTUksMEJBQW9CLFFBQXdCO29CQU5oRCxpQkF5R0M7b0JBbkd1QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtvQkFENUMsZ0JBQVcsR0FBQyxFQUFFLENBQUM7b0JBVWYsWUFBTyxHQUFHLFVBQUMsR0FBRyxFQUFFLElBQUk7d0JBQ2hCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUM3QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXBCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUVoQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDOzRCQUM5QixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0NBQ2IsNkNBQTZDO2dDQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztvQ0FDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dDQUNoQyxDQUFDO2dDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztvQ0FDeEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dDQUNoQyxDQUFDOzRCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUVQLENBQUM7b0JBQ0wsQ0FBQyxDQUFBO29CQTBDRCxlQUFlO29CQUNmLHNCQUFzQjtvQkFDdEIsVUFBSyxHQUFDLENBQUMsQ0FBQztvQkF0RUosSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7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QUNOLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUMvQixLQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUV6QyxDQUFDO2dCQUNkLENBQUM7Z0JBOUpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw0MUZBZ0RGO3dCQUNSLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsOENBQXFCLEVBQUUsNENBQW9CLEVBQUUsNENBQW9CLEVBQUUsc0NBQWUsQ0FBQzt3QkFDakgsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSwyQ0FBb0IsQ0FBQztxQkFDcEQsQ0FBQzs7b0NBQUE7Z0JBMEdGLHVCQUFDO1lBQUQsQ0F6R0EsQUF5R0MsSUFBQTtZQXpHRCwrQ0F5R0MsQ0FBQSIsImZpbGUiOiJQcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4uL0NvbW1vbi9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtPcmdhbmlzYXRpb25Db21wb25lbnR9IGZyb20gJy4vb3JnYW5pemF0aW9uLmNvbXBvbmVudCdcclxuaW1wb3J0IHtQcm9qZWN0cG9ydENvbXBvbmVudH0gZnJvbSAnLi9wcm9qZWN0cG9ydC5jb21wb25lbnQnXHJcbmltcG9ydCB7SW5mb3JtYXRpb25Db21wb25lbnR9IGZyb20gJy4vaW5mb3JtYXRpb24uY29tcG9uZW50J1xyXG5pbXBvcnQge0FjY2Vzc0NvbXBvbmVudH0gZnJvbSAnLi9hZG1pbkFjZXNzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvcHJvZmlsZS5TZXJ2aWNlJ1xyXG5pbXBvcnQge051bWJlcnNPbmx5RGlyZWN0aXZlfSBmcm9tICcuLi92YWxpZGF0aW9ucy9udW1iZXJPbmx5LkRpcmVjdGl2ZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdG9yJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdj5cclxuICAgICA8aGVhZHNlYz48L2hlYWRzZWM+XHJcbiAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVtZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpbWdfc2VjdGlvblwiPiA8aW1nIFtzcmNdPVwiY3ZyaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gPGltZyBbc3JjXT1cIm9yZ2ltZ1wiPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY25lZHQ9PTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7Y29tcGFueW5hbWV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwiY25lZHQ9MVwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY25lZHQ9PTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb21wYW55bmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cImNuZWR0PTBcIj5jYW5jZWw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwidXBkYXRlb3JnbmFtZSgpXCI+c2F2ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwicHJvZmlsZT09MFwiIChjbGljayk9XCJwcm9maWxlPTBcIj48YT5Pcmdhbml6YXRpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInByb2ZpbGU9PTFcIiAoY2xpY2spPVwicHJvZmlsZT0xXCI+PGE+UHJvamVjdCBQb3J0Zm9saW88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInByb2ZpbGU9PTJcIiAoY2xpY2spPVwicHJvZmlsZT0yXCI+PGE+WW91ciBJbmZvcm1hdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwicHJvZmlsZT09M1wiIChjbGljayk9XCJwcm9maWxlPTNcIj48YT5BZG1pbmlzdHJhdGlvbiBTZXR0aW5nczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZlwiIGFjY2VwdD1cImltYWdlLypcIiAoY2hhbmdlKT1cImdldGZpbGUoJGV2ZW50LCdjbGllbnQnKVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cIm9yZ2ltZz09dW5kZWZpbmVkXCIgKGNsaWNrKT1cImFkZGxvZ28oKVwiPm9yZ3BpYzwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cIm9yZ2ltZyE9PXVuZGVmaW5lZFwiIChjbGljayk9XCJhZGRsb2dvKDApXCI+ZGVsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIChjaGFuZ2UpPVwiZ2V0ZmlsZSgkZXZlbnQsJ3BvcnQnKVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cImN2cmltZz09dW5kZWZpbmVkXCIgKGNsaWNrKT1cIm9yZ2xvZ28oKVwiPmN2cnBpYzwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cImN2cmltZyE9PXVuZGVmaW5lZFwiIChjbGljayk9XCJvcmdsb2dvKDApXCI+ZGVsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInByb2ZpbGU9PTBcIj5cclxuICAgICAgICA8b3JncHJvZmlsZT48L29yZ3Byb2ZpbGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9maWxlPT0xXCI+XHJcbiAgICAgICAgPHByb2plY3Rwb3J0PjwvcHJvamVjdHBvcnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9maWxlPT0yXCI+XHJcbiAgICAgICAgPGluZm9ybWF0aW9uPjwvaW5mb3JtYXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9maWxlPT0zXCI+XHJcbiAgICAgICAgPGFjY2Vzcz48L2FjY2Vzcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5gLFxyXG4gICAgZGlyZWN0aXZlczogW0hlYWRlckNvbXBvbmVudCwgT3JnYW5pc2F0aW9uQ29tcG9uZW50LCBQcm9qZWN0cG9ydENvbXBvbmVudCwgSW5mb3JtYXRpb25Db21wb25lbnQsIEFjY2Vzc0NvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZSwgTnVtYmVyc09ubHlEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG9yZ2lkO1xyXG4gICAgcHJvZmlsZTogbnVtYmVyO1xyXG4gICAgb3JnaW1nO1xyXG4gICAgY3ZyaW1nO1xyXG4gICAgY29tcGFueW5hbWU9Jyc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucHJvZmlsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vcmdpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmdpZCcpO1xyXG4gICAgICAgIHRoaXMuZ2V0dmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0ZmlsZSA9IChldnQsIGNvbnQpID0+IHtcclxuICAgICAgICB2YXIgZmlsZXMgPSBldnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIHZhciBmaWxlID0gZmlsZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChmaWxlcyAmJiBmaWxlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBiaW5hcnlTdHJpbmcgPSByZWFkZXJFdnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ID09ICdjbGllbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmdpbWcgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ID09ICdwb3J0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ZyaW1nID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9sb2dvIHN0YXJ0XHJcbiAgICBhZGRsb2dvKGF0bikge1xyXG4gICAgICAgICB2YXIgY3M7XHJcbiAgICAgICAgaWYoYXRuPT0wKXtcclxuICAgICAgICAgICAgY3M9MDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY3M9MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRhdGE9e1wib3JnYW5pc2F0aW9uaWRcIjp0aGlzLm9yZ2lkLFwiY292ZXJwaWNcIjp0aGlzLm9yZ2ltZyxcImNvdmVyc3RhdHVzXCI6MX07XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5hZGRMb2dvKGRhdGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbG9nbyBlbmRcclxuICAgIC8vY292ZXIgcGljIHN0YXJ0XHJcbiAgICBvcmdsb2dvKGF0bikge1xyXG4gICAgICAgIHZhciBjcztcclxuICAgICAgICBpZihhdG49PTApe1xyXG4gICAgICAgICAgICBjcz0wO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjcz0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOnRoaXMub3JnaWQsXCJjb3ZlcnBpY1wiOnRoaXMuY3ZyaW1nLFwiY292ZXJzdGF0dXNcIjpjc307XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5hZGRvcmdMb2dvKGJvZHkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy9jb3ZlciBwaWMgZW5kXHJcbiAgICAvL29yZ25hbWUgdXBkYXRlIHN0YXJ0XHJcbiAgICBjbmVkdD0wO1xyXG4gICAgdXBkYXRlb3JnbmFtZSgpe1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uub3JnbmFtZSh0aGlzLm9yZ2lkLHRoaXMuY29tcGFueW5hbWUpXHJcbiAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNuZWR0PTA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgZ29pbmcgZ29vZCcpXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy9vcmcgbmFtZSB1cGRhdGUgZW5kc1xyXG4gICAgZ2V0dmFsKCl7XHJcbiAgICB0aGlzLl9zZXJ2aWNlLmdldG9yZ2RhdGEodGhpcy5vcmdpZClcclxuICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgIHZhciB0ZXN0PWRhdGEucmVzcG9uc2Uub3JnZGF0YTtcclxuICAgICAgICAgIHRoaXMub3JnaW1nPXRlc3Qub2dfbG9nbztcclxuICAgICAgICAgIHRoaXMuY3ZyaW1nPXRlc3Qub2dfY292ZXJwaWM7XHJcbiAgICAgICAgICB0aGlzLmNvbXBhbnluYW1lPXRlc3Qub2dfbmFtZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuXHJcbiAgICAgICAgICAgICk7XHJcbn1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
