System.register(['angular2/core', '../Services/profile.Service', '../validations/numberOnly.Directive'], function(exports_1, context_1) {
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
    var core_1, profile_Service_1, numberOnly_Directive_1;
    var InformationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_Service_1_1) {
                profile_Service_1 = profile_Service_1_1;
            },
            function (numberOnly_Directive_1_1) {
                numberOnly_Directive_1 = numberOnly_Directive_1_1;
            }],
        execute: function() {
            InformationComponent = (function () {
                function InformationComponent(_service, numonly) {
                    this._service = _service;
                    this.numonly = numonly;
                    this.editdesc = 0;
                    this.alemedit = 0;
                    this.conedit = 0;
                    this.dobedt = 0;
                    this.genedt = 0;
                    this.emailid = localStorage.getItem('authemail');
                    this.orgid = localStorage.getItem('orgid');
                    this.getdetails();
                }
                InformationComponent.prototype.getdetails = function () {
                    var _this = this;
                    this._service.getdatayouinfo(this.emailid, this.orgid)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.data = data.response.orgdata[0];
                        _this.firstname = _this.data.ad_firstname;
                        _this.lastname = _this.data.ad_lastname;
                        _this.gender = _this.data.ad_gender;
                        _this.emailid = _this.data.ad_email;
                        _this.profilepic = _this.data.ad_profilepic;
                        _this.alternate_email = _this.data.ad_alternate_email;
                        _this.contactno = _this.data.ad_contactno;
                        _this.dateofbirth = _this.data.ad_dateofbirth;
                        _this.description = _this.data.ad_description;
                        _this.designation = _this.data.ad_designation;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                InformationComponent.prototype.updatedesc = function () {
                    var _this = this;
                    this._service.updatedescrip(this.orgid, this.description)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.editdesc = 0;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                InformationComponent.prototype.updateamail = function () {
                    var _this = this;
                    this._service.updatealtemail(this.orgid, this.alternate_email)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.alemedit = 0;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                InformationComponent.prototype.pheventHandler = function (evt, val) {
                    this.numonly.phonenumber(evt, val);
                };
                InformationComponent.prototype.updatecont = function () {
                    var _this = this;
                    this._service.updateadmcno(this.orgid, this.contactno)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.conedit = 0;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                InformationComponent.prototype.updatedob = function () {
                    var _this = this;
                    this._service.updateofbth(this.orgid, this.dateofbirth)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.dobedt = 0;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                InformationComponent.prototype.updategend = function () {
                    var _this = this;
                    this._service.updategensts(this.orgid, this.gender)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.genedt = 0;
                    }, function (error) { return console.log(error); }, function () { return console.log('good'); });
                };
                InformationComponent = __decorate([
                    core_1.Component({
                        selector: 'information',
                        templateUrl: 'views/Profile/information.html',
                    }), 
                    __metadata('design:paramtypes', [profile_Service_1.ProfileService, numberOnly_Directive_1.NumbersOnlyDirective])
                ], InformationComponent);
                return InformationComponent;
            }());
            exports_1("InformationComponent", InformationComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2ZpbGUvSW5mb3JtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBYUMsOEJBQW9CLFFBQXVCLEVBQVMsT0FBNEI7b0JBQTVELGFBQVEsR0FBUixRQUFRLENBQWU7b0JBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7b0JBMEJoRixhQUFRLEdBQUMsQ0FBQyxDQUFDO29CQVlYLGFBQVEsR0FBQyxDQUFDLENBQUM7b0JBWVgsWUFBTyxHQUFDLENBQUMsQ0FBQztvQkFlVixXQUFNLEdBQUMsQ0FBQyxDQUFDO29CQVlULFdBQU0sR0FBQyxDQUFDLENBQUM7b0JBNUVSLElBQUksQ0FBQyxPQUFPLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLEtBQUssR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0EseUNBQVUsR0FBVjtvQkFBQSxpQkFvQkQ7b0JBbkJBLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDcEQsU0FBUyxDQUNELFVBQUEsSUFBSTt3QkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM5QixLQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsU0FBUyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUNwQyxLQUFJLENBQUMsTUFBTSxHQUFDLEtBQUksQ0FBQyxJQUFJ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cG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL3Byb2ZpbGUuU2VydmljZSc7XHJcbmltcG9ydCB7TnVtYmVyc09ubHlEaXJlY3RpdmV9IGZyb20gJy4uL3ZhbGlkYXRpb25zL251bWJlck9ubHkuRGlyZWN0aXZlJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdpbmZvcm1hdGlvbicsXHJcblx0dGVtcGxhdGVVcmw6ICd2aWV3cy9Qcm9maWxlL2luZm9ybWF0aW9uLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mb3JtYXRpb25Db21wb25lbnR7XHJcblx0ZGF0YTtcclxuXHRlbWFpbGlkO1xyXG5cdG9yZ2lkO1xyXG5cdHByb2ZpbGVwaWM7XHJcblx0bGFzdG5hbWU7XHJcblx0Zmlyc3RuYW1lO1xyXG5cdGdlbmRlcjtcclxuXHRhbHRlcm5hdGVfZW1haWw7XHJcblx0Y29udGFjdG5vO1xyXG5cdGRhdGVvZmJpcnRoO1xyXG5cdGRlc2NyaXB0aW9uO1xyXG5cdGRlc2lnbmF0aW9uO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6UHJvZmlsZVNlcnZpY2UscHJpdmF0ZSBudW1vbmx5Ok51bWJlcnNPbmx5RGlyZWN0aXZlKSB7XHJcblx0XHR0aGlzLmVtYWlsaWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhlbWFpbCcpO1xyXG5cdFx0dGhpcy5vcmdpZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JnaWQnKTtcclxudGhpcy5nZXRkZXRhaWxzKCk7XHJcblx0IH1cclxuXHQgXHRnZXRkZXRhaWxzKCkge1xyXG5cdFx0dGhpcy5fc2VydmljZS5nZXRkYXRheW91aW5mbyh0aGlzLmVtYWlsaWQsIHRoaXMub3JnaWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5kYXRhPWRhdGEucmVzcG9uc2Uub3JnZGF0YVswXTtcclxuXHRcdFx0XHR0aGlzLmZpcnN0bmFtZT10aGlzLmRhdGEuYWRfZmlyc3RuYW1lO1xyXG5cdFx0XHRcdHRoaXMubGFzdG5hbWU9dGhpcy5kYXRhLmFkX2xhc3RuYW1lO1xyXG5cdFx0XHRcdHRoaXMuZ2VuZGVyPXRoaXMuZGF0YS5hZF9nZW5kZXI7XHJcblx0XHRcdFx0dGhpcy5lbWFpbGlkPXRoaXMuZGF0YS5hZF9lbWFpbDtcclxuXHRcdFx0XHR0aGlzLnByb2ZpbGVwaWM9dGhpcy5kYXRhLmFkX3Byb2ZpbGVwaWM7XHJcblx0XHRcdFx0dGhpcy5hbHRlcm5hdGVfZW1haWw9dGhpcy5kYXRhLmFkX2FsdGVybmF0ZV9lbWFpbDtcclxuXHRcdFx0XHR0aGlzLmNvbnRhY3Rubz10aGlzLmRhdGEuYWRfY29udGFjdG5vO1xyXG5cdFx0XHRcdHRoaXMuZGF0ZW9mYmlydGg9dGhpcy5kYXRhLmFkX2RhdGVvZmJpcnRoO1xyXG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb249dGhpcy5kYXRhLmFkX2Rlc2NyaXB0aW9uO1xyXG5cdFx0XHRcdHRoaXMuZGVzaWduYXRpb249dGhpcy5kYXRhLmFkX2Rlc2lnbmF0aW9uO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnb29kJylcclxuICAgICAgICAgICAgKTtcclxuXHR9XHJcblx0ZWRpdGRlc2M9MDtcclxuXHR1cGRhdGVkZXNjKCl7XHJcblx0XHR0aGlzLl9zZXJ2aWNlLnVwZGF0ZWRlc2NyaXAodGhpcy5vcmdpZCx0aGlzLmRlc2NyaXB0aW9uKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR0aGlzLmVkaXRkZXNjPTA7XHJcblx0XHRcdFx0IH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2dvb2QnKVxyXG4gICAgICAgICAgICApO1xyXG5cdH1cclxuXHRhbGVtZWRpdD0wO1xyXG5cdHVwZGF0ZWFtYWlsKCl7XHJcblx0XHR0aGlzLl9zZXJ2aWNlLnVwZGF0ZWFsdGVtYWlsKHRoaXMub3JnaWQsdGhpcy5hbHRlcm5hdGVfZW1haWwpXHJcblx0XHQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR0aGlzLmFsZW1lZGl0PTA7XHJcblx0XHRcdFx0IH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2dvb2QnKVxyXG4gICAgICAgICAgICApO1xyXG5cdH1cclxuXHRjb25lZGl0PTA7XHJcblx0ICAgICAgcGhldmVudEhhbmRsZXIoZXZ0LHZhbCkge1xyXG50aGlzLm51bW9ubHkucGhvbmVudW1iZXIoZXZ0LHZhbClcclxuIH1cclxuXHR1cGRhdGVjb250KCl7XHJcblx0XHR0aGlzLl9zZXJ2aWNlLnVwZGF0ZWFkbWNubyh0aGlzLm9yZ2lkLHRoaXMuY29udGFjdG5vKVxyXG5cdFx0LnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5jb25lZGl0PTA7XHJcblx0XHRcdFx0IH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2dvb2QnKVxyXG4gICAgICAgICAgICApO1xyXG5cdH1cclxuXHRkb2JlZHQ9MDtcclxuXHR1cGRhdGVkb2IoKXtcclxuXHRcdHRoaXMuX3NlcnZpY2UudXBkYXRlb2ZidGgodGhpcy5vcmdpZCx0aGlzLmRhdGVvZmJpcnRoKVxyXG5cdFx0LnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5kb2JlZHQ9MDtcclxuXHRcdFx0XHQgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ29vZCcpXHJcbiAgICAgICAgICAgICk7XHJcblx0fVxyXG5cdGdlbmVkdD0wO1xyXG5cdHVwZGF0ZWdlbmQoKXtcclxuXHRcdHRoaXMuX3NlcnZpY2UudXBkYXRlZ2Vuc3RzKHRoaXMub3JnaWQsdGhpcy5nZW5kZXIpXHJcblx0XHQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR0aGlzLmdlbmVkdD0wO1xyXG5cdFx0XHRcdCB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdnb29kJylcclxuICAgICAgICAgICAgKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
