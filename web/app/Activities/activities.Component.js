System.register(['angular2/core', 'angular2/router', '../Common/header.component'], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1;
    var ActivityComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            ActivityComponent = (function () {
                function ActivityComponent() {
                    this.Show = 0;
                }
                ActivityComponent = __decorate([
                    core_1.Component({
                        selector: 'Activities',
                        templateUrl: 'Views/Activities/activity.html',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActivityComponent);
                return ActivityComponent;
            }());
            exports_1("ActivityComponent", ActivityComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGl2aXRpZXMvYWN0aXZpdGllcy5Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQztnQkFFSTtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFWTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBQyxrQ0FBZSxDQUFDO3FCQUMvQyxDQUFDOztxQ0FBQTtnQkFPRix3QkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsaURBS0MsQ0FBQSIsImZpbGUiOiJBY3Rpdml0aWVzL2FjdGl2aXRpZXMuQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuIGltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyLFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi4vQ29tbW9uL2hlYWRlci5jb21wb25lbnQnO1xyXG4gXHJcbiBAQ29tcG9uZW50KHtcclxuICAgc2VsZWN0b3I6ICdBY3Rpdml0aWVzJyxcclxuICAgdGVtcGxhdGVVcmw6ICdWaWV3cy9BY3Rpdml0aWVzL2FjdGl2aXR5Lmh0bWwnLFxyXG4gICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUyxIZWFkZXJDb21wb25lbnRdLFxyXG4gfSlcclxuIFxyXG4gZXhwb3J0IGNsYXNzIEFjdGl2aXR5Q29tcG9uZW50ICB7XHJcbiBTaG93O1xyXG4gICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICAgdGhpcy5TaG93PTA7XHJcbiAgICAgfVxyXG4gfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
