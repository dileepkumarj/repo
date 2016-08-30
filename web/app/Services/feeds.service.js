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
    var feedsService;
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
            feedsService = (function () {
                function feedsService(_http) {
                    this._http = _http;
                }
                feedsService.prototype.getmyfeeds = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/myfeeds', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                feedsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], feedsService);
                return feedsService;
            }());
            exports_1("feedsService", feedsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL2ZlZWRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBRUksc0JBQW9CLEtBQVU7b0JBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztnQkFBRSxDQUFDO2dCQUNyQyxpQ0FBVSxHQUFWLFVBQVcsSUFBSTtvQkFDVixJQUFJLElBQUksR0FBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDO29CQUNoQyxJQUFJLE9BQU8sR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUNyRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBWEQ7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBWWIsbUJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVDQVdDLENBQUEiLCJmaWxlIjoiU2VydmljZXMvZmVlZHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzLFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCBteUdsb2JhbHMgPSByZXF1aXJlKCcuLi9nbG9iYWxzJyk7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIGZlZWRzU2VydmljZXtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXt9XHJcbmdldG15ZmVlZHMoZGF0YSl7XHJcbiAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjpkYXRhfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9teWZlZWRzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
