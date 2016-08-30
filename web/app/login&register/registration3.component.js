System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Registration3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Registration3Component = (function () {
                function Registration3Component(router) {
                    this.router = router;
                    this.accredations = [];
                    this.register = JSON.parse(localStorage.getItem('registration'));
                    this.add();
                }
                Registration3Component.prototype.add = function () {
                    this.accredations.push({ description: '' });
                };
                Registration3Component.prototype.next = function () {
                    this.register.accrediationawards = this.accredations;
                    localStorage.setItem('registration', JSON.stringify(this.register));
                    alert(JSON.stringify(this.register));
                    this.router.navigate(['Register4']);
                };
                Registration3Component = __decorate([
                    core_1.Component({
                        selector: 'register3',
                        templateUrl: "views/login&register/Registration3.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Registration3Component);
                return Registration3Component;
            }());
            exports_1("Registration3Component", Registration3Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL3JlZ2lzdHJhdGlvbjMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUssZ0NBQW9CLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFJbEMsaUJBQVksR0FBQyxFQUFFLENBQUM7b0JBSFYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDakUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQUVOLG9DQUFHLEdBQUg7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxxQ0FBSSxHQUFKO29CQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFwQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFDLHlDQUF5Qzt3QkFDckQsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7cUJBQ2pDLENBQUM7OzBDQUFBO2dCQWlCRiw2QkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsMkRBZ0JDLENBQUEiLCJmaWxlIjoibG9naW4mcmVnaXN0ZXIvcmVnaXN0cmF0aW9uMy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZWdpc3RlcjMnLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJ2aWV3cy9sb2dpbiZyZWdpc3Rlci9SZWdpc3RyYXRpb24zLmh0bWxcIixcclxuICAgIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uM0NvbXBvbmVudHtcclxuICAgIHJlZ2lzdGVyO1xyXG4gICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe1xyXG4gICAgICAgICAgIHRoaXMucmVnaXN0ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWdpc3RyYXRpb24nKSk7XHJcbiAgICAgICAgICAgdGhpcy5hZGQoKTtcclxuICAgICB9ICBcclxuICAgICBhY2NyZWRhdGlvbnM9W107ICAgICAgICBcclxuYWRkKCl7XHJcbiAgICB0aGlzLmFjY3JlZGF0aW9ucy5wdXNoKHtkZXNjcmlwdGlvbjonJ30pO1xyXG59XHJcbm5leHQoKXtcclxudGhpcy5yZWdpc3Rlci5hY2NyZWRpYXRpb25hd2FyZHM9dGhpcy5hY2NyZWRhdGlvbnM7XHJcbiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVnaXN0cmF0aW9uJywgSlNPTi5zdHJpbmdpZnkodGhpcy5yZWdpc3RlcikpO1xyXG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHRoaXMucmVnaXN0ZXIpKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ1JlZ2lzdGVyNCddKTtcclxufVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
