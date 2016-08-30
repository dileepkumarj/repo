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
    var RegisterService;
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
            RegisterService = (function () {
                function RegisterService(_http) {
                    this._http = _http;
                }
                RegisterService.prototype.signup = function (body) {
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/manualregistration', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.login = function (id, pwd) {
                    var headers = new http_1.Headers();
                    var body = { "loginemail": id, "password": pwd };
                    var request = JSON.stringify(body);
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/login', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.getheadCount = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/getheadcount', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.servicesetor = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/servicesector', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.serviceCategory = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/servicecategorieslist', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.serviceSubCategory = function (data) {
                    var body = { "servicecategory": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/servicesubcategory', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.turnovervalue = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/turnovervalue', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.targetmarkets = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/gettargetmarkets', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.countrieslist = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/getcountries', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.statelist = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var body = { "country_code": id };
                    var request = JSON.stringify(body);
                    return this._http.post(myGlobals.Url + '/config/getstates', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.citylist = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var body = { "state_code": id };
                    var request = JSON.stringify(body);
                    return this._http.post(myGlobals.Url + '/config/getcities', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.setpassword = function (data) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var body = { "organisationid": data.organisationid, "password": data.password };
                    var request = JSON.stringify(body);
                    return this._http.post(myGlobals.Url + '/api/setpassword', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.linkedinsignup = function (data) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var request = JSON.stringify(data);
                    return this._http.post(myGlobals.Url + '/api/completelinkedinregistration/', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService.prototype.validate = function (email, id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var body = { "linkedinmail": email, "linkedinuserid": id };
                    var request = JSON.stringify(body);
                    return this._http.post(myGlobals.Url + '/api/linkedinValidation', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                RegisterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegisterService);
                return RegisterService;
            }());
            exports_1("RegisterService", RegisterService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL3JlZ2lzdGVyLlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBRUUseUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBSSxDQUFDO2dCQUNwQyxnQ0FBTSxHQUFOLFVBQU8sSUFBSTtvQkFDVCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBO29CQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQzdGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCwrQkFBSyxHQUFMLFVBQU0sRUFBRSxFQUFDLEdBQUc7b0JBQ1YsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztvQkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsWUFBWSxFQUFDLE9BQU8sRUFB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Q25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDN0YsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQXZHSDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkF3R2Isc0JBQUM7WUFBRCxDQXZHQSxBQXVHQyxJQUFBO1lBdkdELDZDQXVHQyxDQUFBIiwiZmlsZSI6IlNlcnZpY2VzL3JlZ2lzdGVyLlNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCBteUdsb2JhbHMgPSByZXF1aXJlKCcuLi9nbG9iYWxzJyk7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG4gIHNpZ251cChib2R5KSB7XHJcbiAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JylcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCArICcvYXBpL21hbnVhbHJlZ2lzdHJhdGlvbicsIHJlcXVlc3QsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcbiAgbG9naW4oaWQscHdkKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgdmFyIGJvZHkgPSB7IFwibG9naW5lbWFpbFwiOiBpZCwgXCJwYXNzd29yZFwiOiBwd2QgfTtcclxuICAgIGxldCByZXF1ZXN0ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCArICcvYXBpL2xvZ2luJyxyZXF1ZXN0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIGdldGhlYWRDb3VudCgpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9jb25maWcvZ2V0aGVhZGNvdW50JywgJycsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcbiAgc2VydmljZXNldG9yKCkge1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwgKyAnL2NvbmZpZy9zZXJ2aWNlc2VjdG9yJywgJycsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHNlcnZpY2VDYXRlZ29yeSgpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9jb25maWcvc2VydmljZWNhdGVnb3JpZXNsaXN0JywgJycsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcbiAgc2VydmljZVN1YkNhdGVnb3J5KGRhdGEpIHtcclxuICAgIHZhciBib2R5ID0geyBcInNlcnZpY2VjYXRlZ29yeVwiOiBkYXRhIH07XHJcbiAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwgKyAnL2NvbmZpZy9zZXJ2aWNlc3ViY2F0ZWdvcnknLCByZXF1ZXN0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIHR1cm5vdmVydmFsdWUoKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCArICcvY29uZmlnL3R1cm5vdmVydmFsdWUnLCAnJywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0bWFya2V0cygpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9jb25maWcvZ2V0dGFyZ2V0bWFya2V0cycsICcnLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIGNvdW50cmllc2xpc3QoKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCArICcvY29uZmlnL2dldGNvdW50cmllcycsICcnLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIHN0YXRlbGlzdChpZCkge1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICB2YXIgYm9keSA9IHsgXCJjb3VudHJ5X2NvZGVcIjogaWQgfTtcclxuICAgIGxldCByZXF1ZXN0ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwgKyAnL2NvbmZpZy9nZXRzdGF0ZXMnLCByZXF1ZXN0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIGNpdHlsaXN0KGlkKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgIHZhciBib2R5ID0geyBcInN0YXRlX2NvZGVcIjogaWQgfTtcclxuICAgIGxldCByZXF1ZXN0ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwgKyAnL2NvbmZpZy9nZXRjaXRpZXMnLCByZXF1ZXN0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIHNldHBhc3N3b3JkKGRhdGEpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgdmFyIGJvZHkgPSB7IFwib3JnYW5pc2F0aW9uaWRcIjogZGF0YS5vcmdhbmlzYXRpb25pZCwgXCJwYXNzd29yZFwiOiBkYXRhLnBhc3N3b3JkIH07XHJcbiAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9hcGkvc2V0cGFzc3dvcmQnLCByZXF1ZXN0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG4gIGxpbmtlZGluc2lnbnVwKGRhdGEpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgbGV0IHJlcXVlc3QgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCArICcvYXBpL2NvbXBsZXRlbGlua2VkaW5yZWdpc3RyYXRpb24vJywgcmVxdWVzdCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuICB2YWxpZGF0ZShlbWFpbCwgaWQpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgdmFyIGJvZHkgPSB7IFwibGlua2VkaW5tYWlsXCI6IGVtYWlsLCBcImxpbmtlZGludXNlcmlkXCI6IGlkIH07XHJcbiAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9hcGkvbGlua2VkaW5WYWxpZGF0aW9uJywgcmVxdWVzdCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
