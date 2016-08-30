System.register(['angular2/core', 'angular2/router', 'angular2/common', '../Services/profile.Service', '../Validations/error.messages'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, profile_Service_1, error_messages_1;
    var TestimonialComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (profile_Service_1_1) {
                profile_Service_1 = profile_Service_1_1;
            },
            function (error_messages_1_1) {
                error_messages_1 = error_messages_1_1;
            }],
        execute: function() {
            TestimonialComponent = (function () {
                function TestimonialComponent(router, _httpservice, params) {
                    var _this = this;
                    this.router = router;
                    this._httpservice = _httpservice;
                    this.Data = {};
                    this.getfile = function (evt) {
                        var files = evt.target.files;
                        var file = files[0];
                        if (files && file) {
                            var reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = (function () {
                                //var binaryString = readerEvt.target.result;
                                localStorage.setItem('imgsrc', reader.result);
                                _this.passwordForm.value.profilepic = reader.result;
                                _this.imgSrc = reader.result;
                            });
                        }
                    };
                    var data = params.get('id');
                    data = atob(data);
                    this.Data = JSON.parse(data);
                    this.passwordForm = new common_1.ControlGroup({
                        organisationid: new common_1.Control(this.Data.organisationid, common_1.Validators.nullValidator),
                        email: new common_1.Control(this.Data.emailid, common_1.Validators.nullValidator),
                        comment: new common_1.Control('', common_1.Validators.required),
                        profilepic: new common_1.Control('', common_1.Validators.nullValidator)
                    });
                }
                TestimonialComponent.prototype.submit = function () {
                    var _this = this;
                    // this.passwordForm.value.profilepic=localStorage.getItem('imgsrc');
                    this._httpservice.PostTestim(this.passwordForm.value)
                        .subscribe(function (data) {
                        if (data.response.status == 1) {
                            _this.router.navigateByUrl('/');
                        }
                    }, function (error) { return alert('something went wrong please fill again and click submit'); }, function () { return console.log("everything going good"); });
                };
                TestimonialComponent = __decorate([
                    core_1.Component({
                        selector: 'trt',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, error_messages_1.ErrorMessages],
                        templateUrl: "views/Profile/testimonial.html",
                        providers: [profile_Service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, profile_Service_1.ProfileService, router_1.RouteParams])
                ], TestimonialComponent);
                return TestimonialComponent;
            }());
            exports_1("TestimonialComponent", TestimonialComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2ZpbGUvdGVzdGltb25pYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBSUksOEJBQW9CLE1BQWMsRUFBVSxZQUE0QixFQUFFLE1BQW1CO29CQUpqRyxpQkFnREM7b0JBNUN1QixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtvQkFEeEUsU0FBSSxHQUFDLEVBQUUsQ0FBQztvQkFZUixZQUFPLEdBQUMsVUFBQyxHQUFHO3dCQUNULElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNoQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXBCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUVoQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDOzRCQUN0QyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUNsQixNQUFNLENBQUMsTUFBTSxHQUFFLENBQUM7Z0NBQ1osNkNBQTZDO2dDQUNoRCxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzlDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dDQUNyRCxLQUFJLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBRXRCLENBQUMsQ0FBQyxDQUFDO3dCQUdQLENBQUM7b0JBQ0wsQ0FBQyxDQUFBO29CQTVCTyxJQUFJLElBQUksR0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixJQUFJLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxxQkFBWSxDQUFDO3dCQUNqQyxjQUFjLEVBQUUsSUFBSSxnQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLG1CQUFVLENBQUMsYUFBYSxDQUFDO3dCQUMvRSxLQUFLLEVBQUUsSUFBSSxnQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFVLENBQUMsYUFBYSxDQUFDO3dCQUMvRCxPQUFPLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDN0MsVUFBVSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxhQUFhLENBQUM7cUJBQ3hELENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQW9CRCxxQ0FBTSxHQUFOO29CQUFBLGlCQWFDO29CQVpDLHFFQUFxRTtvQkFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7eUJBQ2hELFNBQVMsQ0FDVixVQUFBLElBQUk7d0JBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25DLENBQUM7b0JBQ0wsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLEVBQWhFLENBQWdFLEVBQ3pFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEVBQXBDLENBQW9DLENBQ3pDLENBQUM7Z0JBRVYsQ0FBQztnQkF0REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx3QkFBZSxFQUFFLDhCQUFhLENBQUM7d0JBQy9ELFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzlCLENBQUM7O3dDQUFBO2dCQWtERiwyQkFBQztZQUFELENBaERBLEFBZ0RDLElBQUE7WUFoREQsdURBZ0RDLENBQUEiLCJmaWxlIjoiUHJvZmlsZS90ZXN0aW1vbmlhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciwgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbmltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwLCBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZPUk1fQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvcHJvZmlsZS5TZXJ2aWNlJ1xyXG5pbXBvcnQge0Vycm9yTWVzc2FnZXN9IGZyb20gJy4uL1ZhbGlkYXRpb25zL2Vycm9yLm1lc3NhZ2VzJ1xyXG5pbXBvcnQge0Zvcm1zVmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uL3ZhbGlkYXRpb25zL3JlcXVpcmVkLnZhbGlkYXRvcidcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RydCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgRXJyb3JNZXNzYWdlc10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9Qcm9maWxlL3Rlc3RpbW9uaWFsLmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW1Byb2ZpbGVTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwYXNzd29yZEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIGltZ1NyYztcclxuICAgIERhdGE9e307XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9odHRwc2VydmljZTogUHJvZmlsZVNlcnZpY2UsIHBhcmFtczogUm91dGVQYXJhbXMpIHtcclxuICAgICAgICB2YXIgZGF0YT1wYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGRhdGE9YXRvYihkYXRhKTtcclxuICAgICAgICB0aGlzLkRhdGE9SlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkRm9ybSA9IG5ldyBDb250cm9sR3JvdXAoe1xyXG4gICAgICAgICAgICBvcmdhbmlzYXRpb25pZDogbmV3IENvbnRyb2wodGhpcy5EYXRhLm9yZ2FuaXNhdGlvbmlkLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3IpLFxyXG4gICAgICAgICAgICBlbWFpbDogbmV3IENvbnRyb2wodGhpcy5EYXRhLmVtYWlsaWQsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvciksXHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgcHJvZmlsZXBpYzogbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldGZpbGU9KGV2dCk9PntcclxuICAgICAgIHZhciBmaWxlcyA9IGV2dC50YXJnZXQuZmlsZXM7XHJcbiAgICB2YXIgZmlsZSA9IGZpbGVzWzBdO1xyXG5cclxuICAgIGlmIChmaWxlcyAmJiBmaWxlKSB7XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxucmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcclxuICAgICAgICByZWFkZXIub25sb2FkID0oKCk9PiB7XHJcbiAgICAgICAgICAgIC8vdmFyIGJpbmFyeVN0cmluZyA9IHJlYWRlckV2dC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1nc3JjJyxyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkRm9ybS52YWx1ZS5wcm9maWxlcGljPXJlYWRlci5yZXN1bHQ7XHJcbiAgICB0aGlzLmltZ1NyYz1yZWFkZXIucmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIC8vIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XHJcbiAgICB9XHJcbn1cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgLy8gdGhpcy5wYXNzd29yZEZvcm0udmFsdWUucHJvZmlsZXBpYz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1nc3JjJyk7XHJcbiAgICAgICAgdGhpcy5faHR0cHNlcnZpY2UuUG9zdFRlc3RpbSh0aGlzLnBhc3N3b3JkRm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5zdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoJ3NvbWV0aGluZyB3ZW50IHdyb25nIHBsZWFzZSBmaWxsIGFnYWluIGFuZCBjbGljayBzdWJtaXQnKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJldmVyeXRoaW5nIGdvaW5nIGdvb2RcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
