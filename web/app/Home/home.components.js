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
    var HomeComponent;
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
            HomeComponent = (function () {
                function HomeComponent(router, _service) {
                    this.router = router;
                    this._service = _service;
                    this.Orgid = '00147';
                    this.getRequirements(this.Orgid);
                }
                HomeComponent.prototype.getRequirements = function (id) {
                    var _this = this;
                    this._service.getMyconReq(id)
                        .subscribe(function (data) {
                        _this.requirementList = data.response.connection;
                        console.log(_this.connectionList);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'connections',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                        templateUrl: "views/Home/home.html",
                        providers: [requirements_service_1.RequirementService],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, requirements_service_1.RequirementService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWUvaG9tZS5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBSUssdUJBQW9CLE1BQWEsRUFBUyxRQUEyQjtvQkFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFtQjtvQkFDaEUsSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7b0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUNELHVDQUFlLEdBQWYsVUFBZ0IsRUFBRTtvQkFBbEIsaUJBVUQ7b0JBVEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO3lCQUM1QixTQUFTLENBQ0wsVUFBQSxJQUFJO3dCQUNKLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7d0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUN6QyxDQUFDO2dCQUNYLENBQUM7Z0JBekJKO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFDLGtDQUFlLENBQUM7d0JBQzlDLFdBQVcsRUFBQyxzQkFBc0I7d0JBQ2xDLFNBQVMsRUFBQyxDQUFDLHlDQUFrQixDQUFDO3FCQUVqQyxDQUFDOztpQ0FBQTtnQkFvQkYsb0JBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHlDQW1CQyxDQUFBIiwiZmlsZSI6IkhvbWUvaG9tZS5jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlcixSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtSZXF1aXJlbWVudFNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL3JlcXVpcmVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gJy4uL0NvbW1vbi9oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb25uZWN0aW9ucycsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUyxIZWFkZXJDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJ2aWV3cy9Ib21lL2hvbWUuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOltSZXF1aXJlbWVudFNlcnZpY2VdLFxyXG4gICAvLyBzdHlsZVVybHM6WydodG1sL2J1aWxkL2Nzcy9zdHlsZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudHtcclxuICAgIE9yZ2lkO1xyXG4gICAgY29ubmVjdGlvbkxpc3Q7XHJcbiAgICByZXF1aXJlbWVudExpc3RcclxuICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIscHJpdmF0ZSBfc2VydmljZTpSZXF1aXJlbWVudFNlcnZpY2UpIHtcclxuICAgICAgICAgIHRoaXMuT3JnaWQ9JzAwMTQ3JztcclxuICAgICAgICAgIHRoaXMuZ2V0UmVxdWlyZW1lbnRzKHRoaXMuT3JnaWQpO1xyXG4gICAgIH1cclxuICAgICBnZXRSZXF1aXJlbWVudHMoaWQpe1xyXG4gICAgICAgdGhpcy5fc2VydmljZS5nZXRNeWNvblJlcShpZClcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVtZW50TGlzdCA9IGRhdGEucmVzcG9uc2UuY29ubmVjdGlvbjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25uZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
