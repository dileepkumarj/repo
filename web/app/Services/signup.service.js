System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../globals'], function(exports_1, context_1) {
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
    var core_1, http_1, myGlobals;
    var SignupService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (myGlobals_1) {
                myGlobals = myGlobals_1;
            }],
        execute: function() {
            SignupService = (function () {
                function SignupService(_http) {
                    this._http = _http;
                }
                SignupService.prototype.signup = function (body) {
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/manualregistration', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                SignupService.prototype.login = function () {
                    return this._http.post(myGlobals.Url + '/api/myconnections', '')
                        .map(function (res) { return res.json(); });
                };
                SignupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SignupService);
                return SignupService;
            }());
            exports_1("SignupService", SignupService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL3NpZ251cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUNJLHVCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7Z0JBQUUsQ0FBQztnQkFDakMsOEJBQU0sR0FBTixVQUFPLElBQUk7b0JBQ1AsSUFBSSxPQUFPLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQTtvQkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMseUJBQXlCLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUMzRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsNkJBQUssR0FBTDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxvQkFBb0IsRUFBQyxFQUFFLENBQUM7eUJBQy9ELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFiTDtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkFjYixvQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQseUNBYUMsQ0FBQSIsImZpbGUiOiJTZXJ2aWNlcy9zaWdudXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzLFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCBteUdsb2JhbHMgPSByZXF1aXJlKCcuLi9nbG9iYWxzJyk7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ251cFNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe31cclxuICAgIHNpZ251cChib2R5KXtcclxuICAgICAgICBsZXQgcmVxdWVzdD1KU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JylcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvbWFudWFscmVnaXN0cmF0aW9uJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvbXljb25uZWN0aW9ucycsJycpXHJcbiAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
