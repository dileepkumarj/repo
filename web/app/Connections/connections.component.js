System.register(['angular2/core', 'angular2/router', '../Services/connections.service', '../Common/header.component'], function(exports_1, context_1) {
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
    var core_1, router_1, connections_service_1, header_component_1;
    var ConnectionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (connections_service_1_1) {
                connections_service_1 = connections_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            ConnectionsComponent = (function () {
                function ConnectionsComponent(router, _service) {
                    var _this = this;
                    this.router = router;
                    this._service = _service;
                    this.showcon = 0;
                    this.recommendations = [{ 'name': 'TechSimplified', 'orgid': 'ORG00null' }, { 'name': 'Hewlett Packard', 'orgid': 'ORG00332' }, { 'name': 'Dell', 'orgid': 'ORG00342' }, { 'name': 'Cognizant', 'orgid': 'ORG00352' }, { 'name': 'Tech Mahindra', 'orgid': 'ORG00362' }, { 'name': 'TCS', 'orgid': 'ORG00372' }, { 'name': 'IBM', 'orgid': 'ORG00372' }, { 'name': 'CSC', 'orgid': 'ORG00382' }, { 'name': 'NCR', 'orgid': 'ORG00392' }, { 'name': 'V Splash', 'orgid': 'ORG00402' }, { 'name': 'Crocodile', 'orgid': 'ORG00412' }, { 'name': 'Lion', 'orgid': 'ORG0422' }];
                    this.selected = { orgid: '', message: 'Hi,I would like to have you in my connections.Please accept my request..!', name: '' };
                    this.connectionpop = function (selected) {
                        _this.selected.orgid = selected.orgid;
                        _this.selected.name = selected.name;
                    };
                    this.Orgid = localStorage.getItem('orgid');
                    if (this.Orgid !== (undefined || null)) {
                        this.getconnections(this.Orgid);
                        this.getfollowers(this.Orgid);
                        this.getfollowing(this.Orgid);
                    }
                    else {
                        router.navigateByUrl('/');
                    }
                }
                ConnectionsComponent.prototype.getconnections = function (id) {
                    var _this = this;
                    this._service.getConnection(id)
                        .subscribe(function (data) {
                        _this.connectionList = data.response.connection;
                        console.log(_this.connectionList);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                ConnectionsComponent.prototype.getfollowers = function (id) {
                    var _this = this;
                    this._service.getfollowers(id)
                        .subscribe(function (data) {
                        _this.followersList = data.response.followers;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                ConnectionsComponent.prototype.getfollowing = function (id) {
                    var _this = this;
                    this._service.getfollowing(id)
                        .subscribe(function (data) {
                        _this.followingList = data.response.followings;
                        console.log(data);
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                ConnectionsComponent.prototype.deleteconnection = function (orgid, conid) {
                    var _this = this;
                    this._service.deleteconnection(orgid, conid)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.getconnections(orgid);
                    }, function (error) { return console.log(error); }, function () { return console.log("everything going good"); });
                };
                ConnectionsComponent.prototype.confirm = function (orgid, conid) {
                    var _this = this;
                    this._service.confirmconnection(orgid, conid)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.getconnections(orgid);
                        _this.getfollowers(orgid);
                    }, function (error) { return console.log(error); }, function () { return console.log("everything going good"); });
                };
                ConnectionsComponent.prototype.connect = function (sel) {
                    var _this = this;
                    this._service.addconnection(this.Orgid, sel.orgid, sel.message)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.getconnections(_this.Orgid);
                        _this.getfollowing(_this.Orgid);
                        _this.getfollowers(_this.Orgid);
                    }, function (error) { return console.log(error); }, function () { return console.log("everything going good"); });
                };
                ConnectionsComponent = __decorate([
                    core_1.Component({
                        selector: 'connections',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent],
                        templateUrl: "views/Connections/connections.html",
                        providers: [connections_service_1.ConnectionsService],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, connections_service_1.ConnectionsService])
                ], ConnectionsComponent);
                return ConnectionsComponent;
            }());
            exports_1("ConnectionsComponent", ConnectionsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQVFJLDhCQUFvQixNQUFhLEVBQVMsUUFBMkI7b0JBUnpFLGlCQXVGQztvQkEvRXVCLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7b0JBTnJFLFlBQU8sR0FBQyxDQUFDLENBQUM7b0JBSVYsb0JBQWUsR0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFBO29CQUM3ZCxhQUFRLEdBQUMsRUFBQyxL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QyxJQUFJLENBQUMsQ0FBQzt3QkFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxFQUNGLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDekIsY0FBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBcEMsQ0FBb0MsQ0FDM0MsQ0FBQztnQkFDTixDQUFDO2dCQTdGSjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBQyxrQ0FBZSxDQUFDO3dCQUM5QyxXQUFXLEVBQUMsb0NBQW9DO3dCQUNoRCxTQUFTLEVBQUMsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFFakMsQ0FBQzs7d0NBQUE7Z0JBd0ZGLDJCQUFDO1lBQUQsQ0F2RkEsQUF1RkMsSUFBQTtZQXZGRCx1REF1RkMsQ0FBQSIsImZpbGUiOiJDb25uZWN0aW9ucy9jb25uZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsUm91dGVyLFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0Nvbm5lY3Rpb25zU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvY29ubmVjdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuLi9Db21tb24vaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Nvbm5lY3Rpb25zJyxcclxuICAgIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTLEhlYWRlckNvbXBvbmVudF0sXHJcbiAgICB0ZW1wbGF0ZVVybDpcInZpZXdzL0Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLmh0bWxcIixcclxuICAgIHByb3ZpZGVyczpbQ29ubmVjdGlvbnNTZXJ2aWNlXSxcclxuICAgLy8gc3R5bGVVcmxzOlsnaHRtbC9idWlsZC9jc3Mvc3R5bGUuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25zQ29tcG9uZW50IHtcclxuICAgIE9yZ2lkO1xyXG4gICAgc2hvd2Nvbj0wO1xyXG4gICAgY29ubmVjdGlvbkxpc3Q7XHJcbiAgICBmb2xsb3dlcnNMaXN0O1xyXG4gICAgZm9sbG93aW5nTGlzdDtcclxuICAgIHJlY29tbWVuZGF0aW9ucz1beyduYW1lJzonVGVjaFNpbXBsaWZpZWQnLCdvcmdpZCc6J09SRzAwbnVsbCd9LHsnbmFtZSc6J0hld2xldHQgUGFja2FyZCcsJ29yZ2lkJzonT1JHMDAzMzInfSx7J25hbWUnOidEZWxsJywnb3JnaWQnOidPUkcwMDM0Mid9LHsnbmFtZSc6J0NvZ25pemFudCcsJ29yZ2lkJzonT1JHMDAzNTInfSx7J25hbWUnOidUZWNoIE1haGluZHJhJywnb3JnaWQnOidPUkcwMDM2Mid9LHsnbmFtZSc6J1RDUycsJ29yZ2lkJzonT1JHMDAzNzInfSx7J25hbWUnOidJQk0nLCdvcmdpZCc6J09SRzAwMzcyJ30seyduYW1lJzonQ1NDJywnb3JnaWQnOidPUkcwMDM4Mid9LHsnbmFtZSc6J05DUicsJ29yZ2lkJzonT1JHMDAzOTInfSx7J25hbWUnOidWIFNwbGFzaCcsJ29yZ2lkJzonT1JHMDA0MDInfSx7J25hbWUnOidDcm9jb2RpbGUnLCdvcmdpZCc6J09SRzAwNDEyJ30seyduYW1lJzonTGlvbicsJ29yZ2lkJzonT1JHMDQyMid9XVxyXG4gICAgc2VsZWN0ZWQ9e29yZ2lkOicnLG1lc3NhZ2U6J0hpLEkgd291bGQgbGlrZSB0byBoYXZlIHlvdSBpbiBteSBjb25uZWN0aW9ucy5QbGVhc2UgYWNjZXB0IG15IHJlcXVlc3QuLiEnLG5hbWU6Jyd9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIscHJpdmF0ZSBfc2VydmljZTpDb25uZWN0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLk9yZ2lkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmdpZCcpO1xyXG4gICAgICAgIGlmKHRoaXMuT3JnaWQhPT0odW5kZWZpbmVkfHxudWxsKSl7XHJcbnRoaXMuZ2V0Y29ubmVjdGlvbnModGhpcy5PcmdpZCk7XHJcbnRoaXMuZ2V0Zm9sbG93ZXJzKHRoaXMuT3JnaWQpO1xyXG50aGlzLmdldGZvbGxvd2luZyh0aGlzLk9yZ2lkKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIGdldGNvbm5lY3Rpb25zKGlkKXtcclxuICAgICAgIHRoaXMuX3NlcnZpY2UuZ2V0Q29ubmVjdGlvbihpZClcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25MaXN0ID0gZGF0YS5yZXNwb25zZS5jb25uZWN0aW9uO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbm5lY3Rpb25MaXN0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImV2ZXJ5dGhpbmcgZ29pbmcgZ29vZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICB9XHJcbiAgIGNvbm5lY3Rpb25wb3A9KHNlbGVjdGVkKT0+e1xyXG4gICAgICAgdGhpcy5zZWxlY3RlZC5vcmdpZD1zZWxlY3RlZC5vcmdpZDtcclxuICAgICAgIHRoaXMuc2VsZWN0ZWQubmFtZT1zZWxlY3RlZC5uYW1lO1xyXG4gICB9XHJcbiAgIGdldGZvbGxvd2VycyhpZCl7XHJcbiAgICAgICB0aGlzLl9zZXJ2aWNlLmdldGZvbGxvd2VycyhpZClcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvbGxvd2Vyc0xpc3QgPSBkYXRhLnJlc3BvbnNlLmZvbGxvd2VycztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgfVxyXG4gICAgZ2V0Zm9sbG93aW5nKGlkKXtcclxuICAgICAgIHRoaXMuX3NlcnZpY2UuZ2V0Zm9sbG93aW5nKGlkKVxyXG4gICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9sbG93aW5nTGlzdCA9IGRhdGEucmVzcG9uc2UuZm9sbG93aW5ncztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgfVxyXG4gICBkZWxldGVjb25uZWN0aW9uKG9yZ2lkLGNvbmlkKXtcclxuICAgICAgIHRoaXMuX3NlcnZpY2UuZGVsZXRlY29ubmVjdGlvbihvcmdpZCxjb25pZClcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgZGF0YT0+e2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmdldGNvbm5lY3Rpb25zKG9yZ2lkKX0sXHJcbiAgICAgICAgICAgZXJyb3I9PmNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAoKT0+Y29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICk7XHJcbiAgIH1cclxuICAgIGNvbmZpcm0ob3JnaWQsY29uaWQpe1xyXG4gICAgICAgdGhpcy5fc2VydmljZS5jb25maXJtY29ubmVjdGlvbihvcmdpZCxjb25pZClcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgZGF0YT0+e2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmdldGNvbm5lY3Rpb25zKG9yZ2lkKVxyXG4gICAgICAgICAgICAgICB0aGlzLmdldGZvbGxvd2VycyhvcmdpZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgZXJyb3I9PmNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAoKT0+Y29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICk7XHJcbiAgIH1cclxuICAgIGNvbm5lY3Qoc2VsKXtcclxuICAgICAgIHRoaXMuX3NlcnZpY2UuYWRkY29ubmVjdGlvbih0aGlzLk9yZ2lkLHNlbC5vcmdpZCxzZWwubWVzc2FnZSlcclxuICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgZGF0YT0+e2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmdldGNvbm5lY3Rpb25zKHRoaXMuT3JnaWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldGZvbGxvd2luZyh0aGlzLk9yZ2lkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Zm9sbG93ZXJzKHRoaXMuT3JnaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGVycm9yPT5jb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgKCk9PmNvbnNvbGUubG9nKFwiZXZlcnl0aGluZyBnb2luZyBnb29kXCIpXHJcbiAgICAgICApO1xyXG4gICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
