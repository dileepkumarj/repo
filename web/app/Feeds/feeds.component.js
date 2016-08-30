System.register(['angular2/core', 'angular2/router', '../Services/feeds.service', '../Common/header.component'], function(exports_1, context_1) {
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
    var core_1, router_1, feeds_service_1, header_component_1;
    var FeedsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (feeds_service_1_1) {
                feeds_service_1 = feeds_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            FeedsComponent = (function () {
                function FeedsComponent(router, _service) {
                    this.router = router;
                    this._service = _service;
                    this.Orgid = '00147';
                    this.getmyfeeds();
                }
                FeedsComponent.prototype.getmyfeeds = function () {
                    var _this = this;
                    this._service.getmyfeeds(this.Orgid)
                        .subscribe(function (data) {
                        _this.feedsList = data.response.feeds;
                        console.log(data);
                    }, function (error) {
                        alert(error);
                    }, function () { return console.log('everything going good'); });
                };
                FeedsComponent.prototype.setDate = function (date) {
                    this.Anotherdate = new Date(date);
                    return this.Anotherdate;
                };
                FeedsComponent = __decorate([
                    core_1.Component({
                        selector: 'feeds',
                        templateUrl: 'views/Feeds/feeds.html',
                        directives: [header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [feeds_service_1.feedsService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, feeds_service_1.feedsService])
                ], FeedsComponent);
                return FeedsComponent;
            }());
            exports_1("FeedsComponent", FeedsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZlZWRzL2ZlZWRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUdJLHdCQUFvQixNQUFhLEVBQVMsUUFBcUI7b0JBQTNDLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtvQkFGL0QsVUFBSyxHQUFDLE9BQU8sQ0FBQztvQkFHbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBQ0wsbUNBQVUsR0FBVjtvQkFBQSxpQkFZQztvQkFYRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUNuQyxTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNSLEtBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxFQUNELFVBQUEsS0FBSzt3QkFDVCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ1QsQ0FBQyxFQUNELGNBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQXBDLENBQW9DLENBQzNDLENBQUE7Z0JBQ0QsQ0FBQztnQkFFQSxnQ0FBTyxHQUFQLFVBQVEsSUFBSTtvQkFDVCxJQUFJLENBQUMsV0FBVyxHQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDMUIsQ0FBQztnQkE3Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsVUFBVSxFQUFDLENBQUMsa0NBQWUsRUFBQywwQkFBaUIsQ0FBQzt3QkFDOUMsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztxQkFDM0IsQ0FBQzs7a0NBQUE7Z0JBMEJGLHFCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwyQ0F5QkMsQ0FBQSIsImZpbGUiOiJGZWVkcy9mZWVkcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyLFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge2ZlZWRzU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvZmVlZHMuc2VydmljZSc7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuLi9Db21tb24vaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmVlZHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9GZWVkcy9mZWVkcy5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W0hlYWRlckNvbXBvbmVudCxST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6W2ZlZWRzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlZWRzQ29tcG9uZW50ICB7XHJcbiAgICBPcmdpZD0nMDAxNDcnO1xyXG4gICAgZmVlZHNMaXN0O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLHByaXZhdGUgX3NlcnZpY2U6ZmVlZHNTZXJ2aWNlKSB7IFxyXG50aGlzLmdldG15ZmVlZHMoKTtcclxuICAgIH1cclxuZ2V0bXlmZWVkcygpe1xyXG50aGlzLl9zZXJ2aWNlLmdldG15ZmVlZHModGhpcy5PcmdpZClcclxuLnN1YnNjcmliZShcclxuICAgIGRhdGE9PntcclxudGhpcy5mZWVkc0xpc3Q9ZGF0YS5yZXNwb25zZS5mZWVkcztcclxuY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3I9PntcclxuYWxlcnQoZXJyb3IpO1xyXG4gICAgfSxcclxuICAgICgpPT5jb25zb2xlLmxvZygnZXZlcnl0aGluZyBnb2luZyBnb29kJylcclxuKVxyXG59XHJcbiBBbm90aGVyZGF0ZTtcclxuIHNldERhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5Bbm90aGVyZGF0ZSA9bmV3IERhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5Bbm90aGVyZGF0ZTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
