System.register(['angular2/core', 'angular2/router', '../Services/requirements.service', '../Common/header.component'], function(exports_1, context_1) {
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
    var core_1, router_1, requirements_service_1, header_component_1;
    var RequirementsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (requirements_service_1_1) {
                requirements_service_1 = requirements_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            RequirementsComponent = (function () {
                function RequirementsComponent(router, _service) {
                    this.router = router;
                    this._service = _service;
                    this.Orgid = '00147';
                    this.getrequirement(this.Orgid);
                }
                RequirementsComponent.prototype.getrequirement = function (id) {
                    var _this = this;
                    this._service.getMyrequirements(id)
                        .subscribe(function (data) {
                        _this.requirementList = data.response;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                RequirementsComponent.prototype.setDate = function (date) {
                    this.Anotherdate = new Date(date);
                    return this.Anotherdate;
                };
                RequirementsComponent = __decorate([
                    core_1.Component({
                        selector: 'connections',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                        templateUrl: "views/Requirements/requirements.html",
                        providers: [requirements_service_1.RequirementService],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, requirements_service_1.RequirementService])
                ], RequirementsComponent);
                return RequirementsComponent;
            }());
            exports_1("RequirementsComponent", RequirementsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVtZW50L3JlcXVpcmVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUdJLCtCQUFvQixNQUFjLEVBQVUsUUFBNEI7b0JBQXBELFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7b0JBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO29CQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRCw4Q0FBYyxHQUFkLFVBQWUsRUFBRTtvQkFBakIsaUJBVUM7b0JBVEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7eUJBQzlCLFNBQVMsQ0FDVixVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUN6QyxDQUFDO2dCQUNWLENBQUM7Z0JBRUosdUNBQU8sR0FBUCxVQUFRLElBQUk7b0JBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzFCLENBQUM7Z0JBN0JIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLENBQUM7d0JBQ2hELFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO3FCQUVsQyxDQUFDOzt5Q0FBQTtnQkF3QkYsNEJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHlEQXVCQyxDQUFBIiwiZmlsZSI6IlJlcXVpcmVtZW50L3JlcXVpcmVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZXF1aXJlbWVudFNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL3JlcXVpcmVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4uL0NvbW1vbi9oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb25uZWN0aW9ucycsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9SZXF1aXJlbWVudHMvcmVxdWlyZW1lbnRzLmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1JlcXVpcmVtZW50U2VydmljZV0sXHJcbiAgICAvLyBzdHlsZVVybHM6WydodG1sL2J1aWxkL2Nzcy9zdHlsZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZW1lbnRzQ29tcG9uZW50IHtcclxuICAgIE9yZ2lkO1xyXG4gICAgcmVxdWlyZW1lbnRMaXN0O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc2VydmljZTogUmVxdWlyZW1lbnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5PcmdpZCA9ICcwMDE0Nyc7XHJcbiAgICAgICAgdGhpcy5nZXRyZXF1aXJlbWVudCh0aGlzLk9yZ2lkKTtcclxuICAgIH1cclxuICAgIGdldHJlcXVpcmVtZW50KGlkKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5nZXRNeXJlcXVpcmVtZW50cyhpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVtZW50TGlzdCA9IGRhdGEucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgQW5vdGhlcmRhdGU7XHJcbiBzZXREYXRlKGRhdGUpIHtcclxuICAgIHRoaXMuQW5vdGhlcmRhdGUgPW5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIHRoaXMuQW5vdGhlcmRhdGU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
