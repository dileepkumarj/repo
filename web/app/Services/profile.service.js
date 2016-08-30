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
    var ProfileService;
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
            ProfileService = (function () {
                function ProfileService(_http) {
                    this._http = _http;
                }
                //start testimonials
                ProfileService.prototype.Request = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/testmonial-request', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.PostTestim = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/confirm-testmonials', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.getTestim = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-testmonials', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.delTestim = function (id, pid) {
                    var body = { "organisationid": id, "testmonialid": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/delete-testmonial', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //end testimonials
                //start clients
                ProfileService.prototype.getClients = function (data) {
                    var body = { "organisationid": data };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-clients', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.postClients = function (data) {
                    var body = { "organisationid": data.organisationid, "clientname": data.clientname, "clientlogo": data.clientlogo };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-clients', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.deleteClients = function (id, sno) {
                    var body = { "organisationid": id, "clientid": sno };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/delete-clients', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //end clients
                //start portofolio services
                ProfileService.prototype.addPortofolio = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-portfolio', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.getportofolio = function (id) {
                    var body = { "organisationid": id };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-portfolio', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.deleteportofolio = function (id, pid) {
                    var body = { "organisationid": id, "portfolioid": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/delete-portfolio', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //End portofolio services
                //start awards services
                ProfileService.prototype.addawards = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-accrediationawards', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.getawards = function (id) {
                    var body = { "organisationid": id };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-awards', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.deleteawards = function (id, pid) {
                    var body = { "organisationid": id, "awardid": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/delete-awards', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //end awards services
                //address starts here
                ProfileService.prototype.countrieslist = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/config/getcountries', '', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.statelist = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var body = { "country_code": id };
                    var request = JSON.stringify(body);
                    return this._http.post(myGlobals.Url + '/config/getstates', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.citylist = function (id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var body = { "state_code": id };
                    var request = JSON.stringify(body);
                    return this._http.post(myGlobals.Url + '/config/getcities', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.addaddress = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-address', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.getaddress = function (id) {
                    var body = { "organisationid": id };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-address', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.deleteaddress = function (id, pid) {
                    var body = { "organisationid": id, "addressid": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/delete-address', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //address ends here
                //add organizationlogo start
                ProfileService.prototype.addLogo = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-organisation-logo', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //add organizationlogo ends
                //add/edit coverpage start
                ProfileService.prototype.addorgLogo = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-organisation-coverpic', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //add/edit coverpage ends
                //website url start here
                ProfileService.prototype.updateurl = function (id, url) {
                    var body = { "organisationid": id, "websiteurl": url };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-website-url', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //website url end here
                //year of incorp start
                ProfileService.prototype.yearofinco = function (id, url) {
                    var body = { "organisationid": id, "year": url };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/established-year', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //year of incorp start
                //organization description start
                ProfileService.prototype.orgdesc = function (id, pid) {
                    var body = { "organisationid": id, "orgdescription": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/organisation-description', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //organization description ends
                //turnover apis start
                ProfileService.prototype.turnover = function (id, pid) {
                    var body = { "organisationid": id, "turnovervalue": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-turnover-value', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //turnover api end
                //headcount apis start
                ProfileService.prototype.headcount = function (id, pid) {
                    var body = { "organisationid": id, "headcountvalue": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-headcount-value', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //headcount api end
                //category apis start
                ProfileService.prototype.category = function (id, pid) {
                    var body = { "organisationid": id, "og_category": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-category', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //category api end
                //subcate apis start
                ProfileService.prototype.subcat = function (id, pid) {
                    var body = { "organisationid": id, "og_subcategory": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-subcategory', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //subcate api end
                //service sector apis start
                ProfileService.prototype.servicesec = function (id, pid) {
                    var body = { "organisationid": id, "og_servicesector": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-service-sector', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //service category api end
                //target market apis start
                ProfileService.prototype.targmark = function (id, pid) {
                    var body = { "organisationid": id, "og_targetmarket": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-target-market', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //target market api end
                //org name apis start
                ProfileService.prototype.orgname = function (id, pid) {
                    var body = { "organisationid": id, "organisationname": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-organisationname', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //orgname api end
                //orgtyupe apis start
                ProfileService.prototype.orgtype = function (id, pid) {
                    var body = { "organisationid": id, "og_types": pid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-organisation-type', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //org type api end
                //getorgdata start
                ProfileService.prototype.getorgdata = function (id) {
                    var body = { "organisationid": id };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-org-data', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //getorgdata ends
                ProfileService.prototype.social = function (data) {
                    var request = JSON.stringify(data);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/post-social-urls', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //ORGANIZATION API END
                //YOUR INFORMATION APIS--Start
                //profilepic start
                ProfileService.prototype.addPersonalpic = function (id) {
                    var body = { "organisationid": '', "coverpic": '', "coverstatus": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/add-personal-image', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.orgAdminname = function (id) {
                    var body = { "organisationid": '', "ad_firstname": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/organisation-admin-name', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updateofbth = function (id) {
                    var body = { "organisationid": '', "dateofbirth": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-dateofbirth', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updateadmsts = function (id) {
                    var body = { "organisationid": '', "ad_firstname": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-admin-status', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updategensts = function () {
                    var body = { "organisationid": '', "gender": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-gender-status', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updateadmcno = function (id, cno) {
                    var body = { "organisationid": id, "contactno": cno };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-admin-contact-no', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.changepwd = function (id) {
                    var body = { "organisationid": '', "email": '', "oldpassword": '', "newpassword": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-admin-password', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updatedesig = function () {
                    var body = { "organisationid": '', "designation": '' };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-admin-designation', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updatedescrip = function (id, des) {
                    var body = { "organisationid": id, "admindescription": des };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-admin-description', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.updatealtemail = function (id, eid) {
                    var body = { "organisationid": id, "alternateemail": eid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/update-admin-alternate-email', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService.prototype.getdatayouinfo = function (eid, id) {
                    var body = { "organisationid": id, "email": eid };
                    var request = JSON.stringify(body);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    return this._http.post(myGlobals.Url + '/api/get-admin-data', request, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL3Byb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSSx3QkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO2dCQUFFLENBQUM7Z0JBQ2pDLG9CQUFvQjtnQkFDeEIsZ0NBQU8sR0FBUCxVQUFRLElBQUk7b0JBRU4sSUFBSSxPQUFPLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMseUJBQXlCLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUNoRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsbUNBQVUsR0FBVixVQUFXLElBQUk7b0JBRVQsSUFBSSxPQUFPLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUMsMEJBQTBCLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO3lCQUNqRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FB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QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFDLHFCQUFxQixFQUFDLE9BQU8sRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzt5QkFDNUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQTVZRDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkErWWIscUJBQUM7WUFBRCxDQTlZQSxBQThZQyxJQUFBO1lBOVlELDJDQThZQyxDQUFBIiwiZmlsZSI6IlNlcnZpY2VzL3Byb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzLFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCBteUdsb2JhbHMgPSByZXF1aXJlKCcuLi9nbG9iYWxzJyk7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNle1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe31cclxuICAgIC8vc3RhcnQgdGVzdGltb25pYWxzXHJcblJlcXVlc3QoZGF0YSl7XHJcbiAgICAgXHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdGVzdG1vbmlhbC1yZXF1ZXN0JyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcblBvc3RUZXN0aW0oZGF0YSl7XHJcbiAgICAgXHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvY29uZmlybS10ZXN0bW9uaWFscycscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5nZXRUZXN0aW0oZGF0YSl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6ZGF0YX07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZ2V0LXRlc3Rtb25pYWxzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbmRlbFRlc3RpbShpZCxwaWQpe1xyXG4gICAgICB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOmlkLFwidGVzdG1vbmlhbGlkXCI6cGlkfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9kZWxldGUtdGVzdG1vbmlhbCcscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG4vL2VuZCB0ZXN0aW1vbmlhbHNcclxuLy9zdGFydCBjbGllbnRzXHJcbmdldENsaWVudHMoZGF0YSl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6ZGF0YX07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZ2V0LWNsaWVudHMnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxucG9zdENsaWVudHMoZGF0YSl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6ZGF0YS5vcmdhbmlzYXRpb25pZCxcImNsaWVudG5hbWVcIjpkYXRhLmNsaWVudG5hbWUsXCJjbGllbnRsb2dvXCI6ZGF0YS5jbGllbnRsb2dvfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9hZGQtY2xpZW50cycscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5kZWxldGVDbGllbnRzKGlkLHNubyl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJjbGllbnRpZFwiOnNub307XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZGVsZXRlLWNsaWVudHMnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy9lbmQgY2xpZW50c1xyXG4vL3N0YXJ0IHBvcnRvZm9saW8gc2VydmljZXNcclxuYWRkUG9ydG9mb2xpbyhkYXRhKXtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9hZGQtcG9ydGZvbGlvJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbmdldHBvcnRvZm9saW8oaWQpe1xyXG4gICAgICB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOmlkfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9nZXQtcG9ydGZvbGlvJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbmRlbGV0ZXBvcnRvZm9saW8oaWQscGlkKXtcclxuICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcInBvcnRmb2xpb2lkXCI6cGlkfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9kZWxldGUtcG9ydGZvbGlvJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vRW5kIHBvcnRvZm9saW8gc2VydmljZXNcclxuLy9zdGFydCBhd2FyZHMgc2VydmljZXNcclxuYWRkYXdhcmRzKGRhdGEpe1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2FkZC1hY2NyZWRpYXRpb25hd2FyZHMnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuZ2V0YXdhcmRzKGlkKXtcclxuICAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWR9O1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2dldC1hd2FyZHMnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuZGVsZXRlYXdhcmRzKGlkLHBpZCl7XHJcbiB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOmlkLFwiYXdhcmRpZFwiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZGVsZXRlLWF3YXJkcycscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG4vL2VuZCBhd2FyZHMgc2VydmljZXNcclxuLy9hZGRyZXNzIHN0YXJ0cyBoZXJlXHJcbiBjb3VudHJpZXNsaXN0KCkge1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwgKyAnL2NvbmZpZy9nZXRjb3VudHJpZXMnLCAnJywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuICBzdGF0ZWxpc3QoaWQpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgdmFyIGJvZHkgPSB7IFwiY291bnRyeV9jb2RlXCI6IGlkIH07XHJcbiAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9jb25maWcvZ2V0c3RhdGVzJywgcmVxdWVzdCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuICBjaXR5bGlzdChpZCkge1xyXG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICB2YXIgYm9keSA9IHsgXCJzdGF0ZV9jb2RlXCI6IGlkIH07XHJcbiAgICBsZXQgcmVxdWVzdCA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsICsgJy9jb25maWcvZ2V0Y2l0aWVzJywgcmVxdWVzdCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuICBhZGRhZGRyZXNzKGRhdGEpe1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2FkZC1hZGRyZXNzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbmdldGFkZHJlc3MoaWQpe1xyXG4gdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZ2V0LWFkZHJlc3MnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuZGVsZXRlYWRkcmVzcyhpZCxwaWQpe1xyXG4gICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcImFkZHJlc3NpZFwiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZGVsZXRlLWFkZHJlc3MnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy9hZGRyZXNzIGVuZHMgaGVyZVxyXG4vL2FkZCBvcmdhbml6YXRpb25sb2dvIHN0YXJ0XHJcbmFkZExvZ28oZGF0YSl7XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvYWRkLW9yZ2FuaXNhdGlvbi1sb2dvJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vYWRkIG9yZ2FuaXphdGlvbmxvZ28gZW5kc1xyXG4vL2FkZC9lZGl0IGNvdmVycGFnZSBzdGFydFxyXG5hZGRvcmdMb2dvKGRhdGEpe1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2FkZC1vcmdhbmlzYXRpb24tY292ZXJwaWMnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy9hZGQvZWRpdCBjb3ZlcnBhZ2UgZW5kc1xyXG4vL3dlYnNpdGUgdXJsIHN0YXJ0IGhlcmVcclxudXBkYXRldXJsKGlkLHVybCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJ3ZWJzaXRldXJsXCI6dXJsfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtd2Vic2l0ZS11cmwnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy93ZWJzaXRlIHVybCBlbmQgaGVyZVxyXG4vL3llYXIgb2YgaW5jb3JwIHN0YXJ0XHJcbnllYXJvZmluY28oaWQsdXJsKXtcclxuICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcInllYXJcIjp1cmx9O1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2VzdGFibGlzaGVkLXllYXInLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy95ZWFyIG9mIGluY29ycCBzdGFydFxyXG4vL29yZ2FuaXphdGlvbiBkZXNjcmlwdGlvbiBzdGFydFxyXG5vcmdkZXNjKGlkLHBpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJvcmdkZXNjcmlwdGlvblwiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvb3JnYW5pc2F0aW9uLWRlc2NyaXB0aW9uJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vb3JnYW5pemF0aW9uIGRlc2NyaXB0aW9uIGVuZHNcclxuLy90dXJub3ZlciBhcGlzIHN0YXJ0XHJcbnR1cm5vdmVyKGlkLHBpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJ0dXJub3ZlcnZhbHVlXCI6cGlkfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtdHVybm92ZXItdmFsdWUnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy90dXJub3ZlciBhcGkgZW5kXHJcbi8vaGVhZGNvdW50IGFwaXMgc3RhcnRcclxuaGVhZGNvdW50KGlkLHBpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJoZWFkY291bnR2YWx1ZVwiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdXBkYXRlLWhlYWRjb3VudC12YWx1ZScscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG4vL2hlYWRjb3VudCBhcGkgZW5kXHJcbi8vY2F0ZWdvcnkgYXBpcyBzdGFydFxyXG5jYXRlZ29yeShpZCxwaWQpe1xyXG4gICAgICB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOmlkLFwib2dfY2F0ZWdvcnlcIjpwaWR9O1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL3VwZGF0ZS1jYXRlZ29yeScscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG4vL2NhdGVnb3J5IGFwaSBlbmRcclxuLy9zdWJjYXRlIGFwaXMgc3RhcnRcclxuc3ViY2F0KGlkLHBpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJvZ19zdWJjYXRlZ29yeVwiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdXBkYXRlLXN1YmNhdGVnb3J5JyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vc3ViY2F0ZSBhcGkgZW5kXHJcbi8vc2VydmljZSBzZWN0b3IgYXBpcyBzdGFydFxyXG5zZXJ2aWNlc2VjKGlkLHBpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJvZ19zZXJ2aWNlc2VjdG9yXCI6cGlkfTtcclxuICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtc2VydmljZS1zZWN0b3InLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy9zZXJ2aWNlIGNhdGVnb3J5IGFwaSBlbmRcclxuLy90YXJnZXQgbWFya2V0IGFwaXMgc3RhcnRcclxudGFyZ21hcmsoaWQscGlkKXtcclxuICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcIm9nX3RhcmdldG1hcmtldFwiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdXBkYXRlLXRhcmdldC1tYXJrZXQnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy90YXJnZXQgbWFya2V0IGFwaSBlbmRcclxuLy9vcmcgbmFtZSBhcGlzIHN0YXJ0XHJcbm9yZ25hbWUoaWQscGlkKXtcclxuICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcIm9yZ2FuaXNhdGlvbm5hbWVcIjpwaWR9O1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL3VwZGF0ZS1vcmdhbmlzYXRpb25uYW1lJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vb3JnbmFtZSBhcGkgZW5kXHJcbi8vb3JndHl1cGUgYXBpcyBzdGFydFxyXG5vcmd0eXBlKGlkLHBpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWQsXCJvZ190eXBlc1wiOnBpZH07XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdXBkYXRlLW9yZ2FuaXNhdGlvbi10eXBlJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vb3JnIHR5cGUgYXBpIGVuZFxyXG4vL2dldG9yZ2RhdGEgc3RhcnRcclxuZ2V0b3JnZGF0YShpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6aWR9O1xyXG4gICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL2dldC1vcmctZGF0YScscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG4vL2dldG9yZ2RhdGEgZW5kc1xyXG5zb2NpYWwoZGF0YSl7XHJcbiAgICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS9wb3N0LXNvY2lhbC11cmxzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbi8vT1JHQU5JWkFUSU9OIEFQSSBFTkRcclxuLy9ZT1VSIElORk9STUFUSU9OIEFQSVMtLVN0YXJ0XHJcbi8vcHJvZmlsZXBpYyBzdGFydFxyXG5hZGRQZXJzb25hbHBpYyhpZCl7XHJcbiAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6JycsXCJjb3ZlcnBpY1wiOicnLFwiY292ZXJzdGF0dXNcIjonJ307XHJcbiAgICAgIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvYWRkLXBlcnNvbmFsLWltYWdlJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbm9yZ0FkbWlubmFtZShpZCl7XHJcbiAgICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjonJyxcImFkX2ZpcnN0bmFtZVwiOicnfTtcclxuICAgICAgICAgICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL29yZ2FuaXNhdGlvbi1hZG1pbi1uYW1lJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbnVwZGF0ZW9mYnRoKGlkKXtcclxuICAgICAgICAgICB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOicnLFwiZGF0ZW9mYmlydGhcIjonJ307XHJcbiAgICAgICAgICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtZGF0ZW9mYmlydGgnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7IFxyXG59XHJcbnVwZGF0ZWFkbXN0cyhpZCl7XHJcbiAgICAgICAgIHZhciBib2R5PXtcIm9yZ2FuaXNhdGlvbmlkXCI6JycsXCJhZF9maXJzdG5hbWVcIjonJ307XHJcbiAgICAgICAgICAgICAgbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtYWRtaW4tc3RhdHVzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpOyBcclxufVxyXG51cGRhdGVnZW5zdHMoKXtcclxuICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjonJyxcImdlbmRlclwiOicnfTtcclxuICAgICAgICAgICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL3VwZGF0ZS1nZW5kZXItc3RhdHVzJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpOyAgICBcclxufVxyXG51cGRhdGVhZG1jbm8oaWQsY25vKXtcclxuICAgICAgICB2YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOmlkLFwiY29udGFjdG5vXCI6Y25vfTtcclxuICAgICAgICAgICAgICBsZXQgcmVxdWVzdD0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxucmV0dXJuIHRoaXMuX2h0dHAucG9zdChteUdsb2JhbHMuVXJsKycvYXBpL3VwZGF0ZS1hZG1pbi1jb250YWN0LW5vJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpOyAgICBcclxufVxyXG5jaGFuZ2Vwd2QoaWQpe1xyXG52YXIgYm9keT17XCJvcmdhbmlzYXRpb25pZFwiOicnLFwiZW1haWxcIjonJyxcIm9sZHBhc3N3b3JkXCI6JycsXCJuZXdwYXNzd29yZFwiOicnfTtcclxuIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdXBkYXRlLWFkbWluLXBhc3N3b3JkJyxyZXF1ZXN0LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcbnVwZGF0ZWRlc2lnKCl7XHJcbiAgICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjonJyxcImRlc2lnbmF0aW9uXCI6Jyd9O1xyXG4gbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtYWRtaW4tZGVzaWduYXRpb24nLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxudXBkYXRlZGVzY3JpcChpZCxkZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcImFkbWluZGVzY3JpcHRpb25cIjpkZXN9O1xyXG4gbGV0IHJlcXVlc3Q9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbnJldHVybiB0aGlzLl9odHRwLnBvc3QobXlHbG9iYWxzLlVybCsnL2FwaS91cGRhdGUtYWRtaW4tZGVzY3JpcHRpb24nLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxudXBkYXRlYWx0ZW1haWwoaWQsZWlkKXtcclxuICAgICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcImFsdGVybmF0ZWVtYWlsXCI6ZWlkfTtcclxuIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvdXBkYXRlLWFkbWluLWFsdGVybmF0ZS1lbWFpbCcscmVxdWVzdCx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5nZXRkYXRheW91aW5mbyhlaWQsaWQpe1xyXG4gICAgICAgdmFyIGJvZHk9e1wib3JnYW5pc2F0aW9uaWRcIjppZCxcImVtYWlsXCI6ZWlkfTtcclxuIGxldCByZXF1ZXN0PSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG5yZXR1cm4gdGhpcy5faHR0cC5wb3N0KG15R2xvYmFscy5VcmwrJy9hcGkvZ2V0LWFkbWluLWRhdGEnLHJlcXVlc3Qse2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuLy9wcm9maWxlcGljIGVuZHNcclxuLy9ZT1VSIElORk9STUFUSU9OIEFQSVMtLUVuZFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
