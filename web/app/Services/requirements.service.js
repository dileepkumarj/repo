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
    var RequirementService;
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
            RequirementService = (function () {
                function RequirementService(_http) {
                    this._http = _http;
                }
                RequirementService.prototype.getMyconReq = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/getmyconnectionrequirements', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RequirementService.prototype.getMyrequirements = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/myrequirements', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RequirementService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RequirementService);
                return RequirementService;
            }());
            exports_1("RequirementService", RequirementService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL3JlcXVpcmVtZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUNJLDRCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7Z0JBQUUsQ0FBQztnQkFDakMsd0NBQVcsR0FBWCxVQUFZLElBQUk7b0JBQ1osSUFBSSxJQUFJLEdBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsa0NBQWtDLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUNwRyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsOENBQWlCLEdBQWpCLFVBQWtCLElBQUk7b0JBQ2pCLElBQUksSUFBSSxHQUFDLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLGlDQUFpQyxDQUFDLENBQUM7b0JBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFDLHFCQUFxQixFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzt5QkFDdkYsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQWxCTDtvQkFBQyxpQkFBVSxFQUFFOztzQ0FBQTtnQkFtQmIseUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELG1EQWtCQyxDQUFBIiwiZmlsZSI6IlNlcnZpY2VzL3JlcXVpcmVtZW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwLEhlYWRlcnMsUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCBteUdsb2JhbHMgPSByZXF1aXJlKCcuLi9nbG9iYWxzJyk7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVtZW50U2VydmljZXtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxyXG4gICAgZ2V0TXljb25SZXEoZGF0YSl7XHJcbiAgICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjpkYXRhfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZ2V0bXljb25uZWN0aW9ucmVxdWlyZW1lbnRzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TXlyZXF1aXJlbWVudHMoZGF0YSl7XHJcbiAgICAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6ZGF0YX07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL215cmVxdWlyZW1lbnRzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
