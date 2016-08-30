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
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(router) {
                    this.router = router;
                }
                HeaderComponent.prototype.isActive = function (instruction) {
                    return this.router.isRouteActive(this.router.generate(instruction));
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'headsec',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: "views/Common/header.html",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbW1vbi9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQ0EseUJBQW9CLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztnQkFBRSxDQUFDO2dCQUNuQyxrQ0FBUSxHQUFSLFVBQVMsV0FBa0I7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO2dCQVRIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO3dCQUM5QixXQUFXLEVBQUMsMEJBQTBCO3FCQUN6QyxDQUFDOzttQ0FBQTtnQkFPRixzQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsNkNBTUMsQ0FBQSIsImZpbGUiOiJDb21tb24vaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIsUm91dGVDb25maWcsTG9jYXRpb24sUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVhZHNlYycsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICB0ZW1wbGF0ZVVybDpcInZpZXdzL0NvbW1vbi9oZWFkZXIuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50e1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpe31cclxuIGlzQWN0aXZlKGluc3RydWN0aW9uOiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmlzUm91dGVBY3RpdmUodGhpcy5yb3V0ZXIuZ2VuZXJhdGUoaW5zdHJ1Y3Rpb24pKTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
