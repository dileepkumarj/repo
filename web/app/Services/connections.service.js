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
    var ConnectionsService;
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
            ConnectionsService = (function () {
                function ConnectionsService(_http) {
                    this._http = _http;
                }
                ConnectionsService.prototype.getConnection = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/myconnections', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ConnectionsService.prototype.getfollowers = function (data) {
                    var body = { organisationid: data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/myfollowers', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ConnectionsService.prototype.getfollowing = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/me/following', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ConnectionsService.prototype.confirmconnection = function (orgid, conid) {
                    var body = { "connection_req_id": orgid, "partner_id": conid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/confirmconnection', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ConnectionsService.prototype.deleteconnection = function (orgid, conid) {
                    var body = { "connection_req_id": orgid, "partner_id": conid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/deleteconnection', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ConnectionsService.prototype.addconnection = function (orgid, conid, mes) {
                    var body = { "connection_req_id": orgid, "partner_id": conid, "message": mes };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/addconnection', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ConnectionsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ConnectionsService);
                return ConnectionsService;
            }());
            exports_1("ConnectionsService", ConnectionsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL2Nvbm5lY3Rpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0ksNEJBQW9CLEtBQVU7b0JBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztnQkFBRSxDQUFDO2dCQUNqQywwQ0FBYSxHQUFiLFVBQWMsSUFBSTtvQkFDZCxJQUFJLElBQUksR0FBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDO29CQUNuQyxJQUFJLE9BQU8sR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxvQkFBb0IsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7eUJBQ3RGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCx5Q0FBWSxHQUFaLFVBQWEsSUFBSTtvQkFDYixJQUFJLElBQUksR0FBQyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsQ0FBQztvQkFDakMsSUFBSSxPQUFPLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsa0JBQWtCLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUNwRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QseUNBQVksR0FBWixVQUFhLElBQUk7b0JBQ2IsSUFBSSxJQUFJLEdBQUMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUNyRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0csOENBQWlCLEdBQWpCLFVBQWtCLEtBQUssRUFBQyxLQUFLO29CQUM3QixJQUFJLElBQUksR0FBQyxFQUFDLG1CQUFtQixFQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLENBQUM7b0JBQzFELElBQUksT0FBTyxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLGlDQUFpQyxDQUFDLENBQUM7b0JBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFDLHdCQUF3QixFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzt5QkFDMUYsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNHLDZDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUMsS0FBSztvQkFDNUIsSUFBSSxJQUFJLEdBQUMsRUFBQyxtQkFBbUIsRUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxDQUFDO29CQUMxRCxJQUFJLE9BQU8sR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7eUJBQ3pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDSywwQ0FBYSxHQUFiLFVBQWMsS0FBSyxFQUFDLEtBQUssRUFBQyxHQUFHO29CQUMvQixJQUFJLElBQUksR0FBQyxFQUFDLG1CQUFtQixFQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsQ0FBQztvQkFDeEUsSUFBSSxPQUFPLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsb0JBQW9CLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUN0RixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBbERMO29CQUFDLGlCQUFVLEVBQUU7O3NDQUFBO2dCQW1EYix5QkFBQztZQUFELENBbERBLEFBa0RDLElBQUE7WUFsREQsbURBa0RDLENBQUEiLCJmaWxlIjoiU2VydmljZXMvY29ubmVjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzLFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgbXlHbG9iYWxzID0gcmVxdWlyZSgnLi4vZ2xvYmFscycpO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uc1NlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe31cclxuICAgIGdldENvbm5lY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjpkYXRhfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvbXljb25uZWN0aW9ucycscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIGdldGZvbGxvd2VycyhkYXRhKXtcclxuICAgICAgICB2YXIgYm9keT17b3JnYW5pc2F0aW9uaWQ6ZGF0YX07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL215Zm9sbG93ZXJzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0Zm9sbG93aW5nKGRhdGEpe1xyXG4gICAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6ZGF0YX07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL21lL2ZvbGxvd2luZycscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgICAgICBjb25maXJtY29ubmVjdGlvbihvcmdpZCxjb25pZCl7XHJcbiAgICAgICAgdmFyIGJvZHk9e1wiY29ubmVjdGlvbl9yZXFfaWRcIjpvcmdpZCxcInBhcnRuZXJfaWRcIjpjb25pZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2NvbmZpcm1jb25uZWN0aW9uJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgICAgIGRlbGV0ZWNvbm5lY3Rpb24ob3JnaWQsY29uaWQpe1xyXG4gICAgICAgIHZhciBib2R5PXtcImNvbm5lY3Rpb25fcmVxX2lkXCI6b3JnaWQsXCJwYXJ0bmVyX2lkXCI6Y29uaWR9O1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9kZWxldGVjb25uZWN0aW9uJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgICAgICAgYWRkY29ubmVjdGlvbihvcmdpZCxjb25pZCxtZXMpe1xyXG4gICAgICAgIHZhciBib2R5PXtcImNvbm5lY3Rpb25fcmVxX2lkXCI6b3JnaWQsXCJwYXJ0bmVyX2lkXCI6Y29uaWQsXCJtZXNzYWdlXCI6bWVzfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvYWRkY29ubmVjdGlvbicscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
