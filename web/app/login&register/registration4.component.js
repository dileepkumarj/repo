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
    var Registration4Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Registration4Component = (function () {
                function Registration4Component(router) {
                    this.router = router;
                    this.clients = [];
                    this.testimoials = [];
                    this.register = JSON.parse(localStorage.getItem('registration'));
                    if (this.register.clients)
                        this.clients = this.register.clients;
                    if (this.register.testimonials)
                        this.testimoials = this.register.testimonials;
                    this.clientadd();
                    this.testimonialadd();
                }
                Registration4Component.prototype.clientadd = function () {
                    this.clients.push({ clientname: '', image: '' });
                };
                Registration4Component.prototype.testimonialadd = function () {
                    this.testimoials.push({ email: '', comments: '' });
                };
                Registration4Component.prototype.submit = function () {
                    this.register.clients = this.clients;
                    this.register.testimonials = this.testimoials;
                    console.log(JSON.stringify(this.register));
                };
                Registration4Component = __decorate([
                    core_1.Component({
                        selector: 'register4',
                        templateUrl: "views/login&register/Registration4.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Registration4Component);
                return Registration4Component;
            }());
            exports_1("Registration4Component", Registration4Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL3JlZ2lzdHJhdGlvbjQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBSUEsZ0NBQW9CLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFIN0IsWUFBTyxHQUFDLEVBQUUsQ0FBQztvQkFDWCxnQkFBVyxHQUFDLEVBQUUsQ0FBQztvQkFHZCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFBQyxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQzt3QkFBQyxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNqRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCwwQ0FBUyxHQUFUO29CQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCwrQ0FBYyxHQUFkO29CQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCx1Q0FBTSxHQUFOO29CQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FBQztnQkFDNUMsQ0FBQztnQkExQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFDLHlDQUF5Qzt3QkFDckQsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7cUJBQ2pDLENBQUM7OzBDQUFBO2dCQXVCRiw2QkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsMkRBc0JDLENBQUEiLCJmaWxlIjoibG9naW4mcmVnaXN0ZXIvcmVnaXN0cmF0aW9uNC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbmltcG9ydCB7Q29udHJvbCxDb250cm9sR3JvdXAsRm9ybUJ1aWxkZXIsVmFsaWRhdG9ycyxOZ0Zvcm1Nb2RlbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xyXG5pbXBvcnQge0Vycm9yTWVzc2FnZXN9IGZyb20gJy4uL1ZhbGlkYXRpb25zL2Vycm9yLm1lc3NhZ2VzJ1xyXG5pbXBvcnQge0Zvcm1zVmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uL3ZhbGlkYXRpb25zL3JlcXVpcmVkLnZhbGlkYXRvcidcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlZ2lzdGVyNCcsXHJcbiAgICB0ZW1wbGF0ZVVybDpcInZpZXdzL2xvZ2luJnJlZ2lzdGVyL1JlZ2lzdHJhdGlvbjQuaHRtbFwiLFxyXG4gICAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb240Q29tcG9uZW50IHtcclxuICAgIGNsaWVudHM9W107XHJcbiAgICB0ZXN0aW1vaWFscz1bXTtcclxuICAgIHJlZ2lzdGVyO1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpe1xyXG4gICAgIHRoaXMucmVnaXN0ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWdpc3RyYXRpb24nKSk7XHJcbiAgICAgaWYodGhpcy5yZWdpc3Rlci5jbGllbnRzKSB0aGlzLmNsaWVudHM9dGhpcy5yZWdpc3Rlci5jbGllbnRzO1xyXG4gICAgIGlmICh0aGlzLnJlZ2lzdGVyLnRlc3RpbW9uaWFscykgdGhpcy50ZXN0aW1vaWFscz10aGlzLnJlZ2lzdGVyLnRlc3RpbW9uaWFscztcclxudGhpcy5jbGllbnRhZGQoKTtcclxudGhpcy50ZXN0aW1vbmlhbGFkZCgpO1xyXG59XHJcbmNsaWVudGFkZCgpe1xyXG50aGlzLmNsaWVudHMucHVzaCh7Y2xpZW50bmFtZTonJyxpbWFnZTonJ30pO1xyXG59XHJcbnRlc3RpbW9uaWFsYWRkKCl7XHJcbnRoaXMudGVzdGltb2lhbHMucHVzaCh7ZW1haWw6JycsY29tbWVudHM6Jyd9KTtcclxufVxyXG5zdWJtaXQoKXtcclxudGhpcy5yZWdpc3Rlci5jbGllbnRzPXRoaXMuY2xpZW50cztcclxudGhpcy5yZWdpc3Rlci50ZXN0aW1vbmlhbHM9dGhpcy50ZXN0aW1vaWFscztcclxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZWdpc3RlcikgKTtcclxufVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
