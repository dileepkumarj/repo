System.register(['angular2/core', 'angular2/router', 'angular2/common', '../Services/register.Service', '../Validations/error.messages'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, register_Service_1, error_messages_1;
    var PasswordComponent;
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
            function (register_Service_1_1) {
                register_Service_1 = register_Service_1_1;
            },
            function (error_messages_1_1) {
                error_messages_1 = error_messages_1_1;
            }],
        execute: function() {
            PasswordComponent = (function () {
                function PasswordComponent(router, _httpservice, params) {
                    this.router = router;
                    this._httpservice = _httpservice;
                    this.data = [];
                    this.organisationid = params.get('organisationid');
                    this.organisationid = atob(this.organisationid);
                    this.passwordForm = new common_1.ControlGroup({
                        password1: new common_1.Control('', common_1.Validators.required),
                        password2: new common_1.Control('', common_1.Validators.required)
                    });
                    //this.customValidator = this.customValidator.bind(this); 
                }
                PasswordComponent.prototype.customValidator = function (val1, val2) {
                    // check if control is equal to the password1 control
                    if (val1.value == val2.value) {
                        this.matched = true;
                    }
                    else {
                        this.matched = false;
                        return { 'equal': true };
                    }
                };
                PasswordComponent.prototype.submit = function (orgid, val) {
                    var _this = this;
                    this.data.organisationid = orgid;
                    this.data.password = val.password1;
                    this._httpservice.setpassword(this.data)
                        .subscribe(function (data) {
                        if (data.response.status == 1) {
                            _this.router.navigate(['Connections']);
                        }
                    }, function (error) { return alert(error); }, function () { return console.log("everything going good"); });
                };
                PasswordComponent = __decorate([
                    core_1.Component({
                        selector: 'password',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, error_messages_1.ErrorMessages],
                        templateUrl: "views/login&register/password.html",
                        providers: [register_Service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, register_Service_1.RegisterService, router_1.RouteParams])
                ], PasswordComponent);
                return PasswordComponent;
            }());
            exports_1("PasswordComponent", PasswordComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luJnJlZ2lzdGVyL3Bhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlFLDJCQUFvQixNQUFjLEVBQVUsWUFBNkIsRUFBRSxNQUFtQjtvQkFBMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7b0JBbUJ6RSxTQUFJLEdBQUcsRUFBRSxDQUFDO29CQWxCUixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkscUJBQVksQ0FBQzt3QkFDbkMsU0FBUyxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQy9DLFNBQVMsRUFBRSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUNoRCxDQUFDLENBQUM7b0JBQ0gsMERBQTBEO2dCQUM1RCxDQUFDO2dCQUVELDJDQUFlLEdBQWYsVUFBZ0IsSUFBSSxFQUFFLElBQUk7b0JBQ3hCLHFEQUFxRDtvQkFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsQ0FBQztnQkFDSCxDQUFDO2dCQUdELGtDQUFNLEdBQU4sVUFBTyxLQUFLLEVBQUUsR0FBRztvQkFBakIsaUJBY0M7b0JBYkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO29CQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNyQyxTQUFTLENBQ1YsVUFBQSxJQUFJO3dCQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFwQyxDQUFvQyxDQUN6QyxDQUFDO2dCQUVOLENBQUM7Z0JBOUNIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHdCQUFlLEVBQUUsOEJBQWEsQ0FBQzt3QkFDL0QsV0FBVyxFQUFFLG9DQUFvQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztxQkFDN0IsQ0FBQzs7cUNBQUE7Z0JBMENGLHdCQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtZQXhDRCxpREF3Q0MsQ0FBQSIsImZpbGUiOiJsb2dpbiZyZWdpc3Rlci9wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciwgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbmltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwLCBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZPUk1fQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IHtSZWdpc3RlclNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL3JlZ2lzdGVyLlNlcnZpY2UnXHJcbmltcG9ydCB7RXJyb3JNZXNzYWdlc30gZnJvbSAnLi4vVmFsaWRhdGlvbnMvZXJyb3IubWVzc2FnZXMnXHJcbmltcG9ydCB7Rm9ybXNWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vdmFsaWRhdGlvbnMvcmVxdWlyZWQudmFsaWRhdG9yJ1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Bhc3N3b3JkJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgRXJyb3JNZXNzYWdlc10sXHJcbiAgdGVtcGxhdGVVcmw6IFwidmlld3MvbG9naW4mcmVnaXN0ZXIvcGFzc3dvcmQuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1JlZ2lzdGVyU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCB7XHJcbiAgcHVibGljIHBhc3N3b3JkRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gIG1hdGNoZWQ7XHJcbiAgb3JnYW5pc2F0aW9uaWQ7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfaHR0cHNlcnZpY2U6IFJlZ2lzdGVyU2VydmljZSwgcGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgdGhpcy5vcmdhbmlzYXRpb25pZCA9IHBhcmFtcy5nZXQoJ29yZ2FuaXNhdGlvbmlkJyk7XHJcbiAgICB0aGlzLm9yZ2FuaXNhdGlvbmlkID0gYXRvYih0aGlzLm9yZ2FuaXNhdGlvbmlkKTtcclxuICAgIHRoaXMucGFzc3dvcmRGb3JtID0gbmV3IENvbnRyb2xHcm91cCh7XHJcbiAgICAgIHBhc3N3b3JkMTogbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICBwYXNzd29yZDI6IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgfSk7XHJcbiAgICAvL3RoaXMuY3VzdG9tVmFsaWRhdG9yID0gdGhpcy5jdXN0b21WYWxpZGF0b3IuYmluZCh0aGlzKTsgXHJcbiAgfVxyXG5cclxuICBjdXN0b21WYWxpZGF0b3IodmFsMSwgdmFsMikge1xyXG4gICAgLy8gY2hlY2sgaWYgY29udHJvbCBpcyBlcXVhbCB0byB0aGUgcGFzc3dvcmQxIGNvbnRyb2xcclxuICAgIGlmICh2YWwxLnZhbHVlID09IHZhbDIudmFsdWUpIHtcclxuICAgICAgdGhpcy5tYXRjaGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4geyAnZXF1YWwnOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRhdGEgPSBbXTtcclxuXHJcbiAgc3VibWl0KG9yZ2lkLCB2YWwpIHtcclxuICAgIHRoaXMuZGF0YS5vcmdhbmlzYXRpb25pZCA9IG9yZ2lkO1xyXG4gICAgdGhpcy5kYXRhLnBhc3N3b3JkID0gdmFsLnBhc3N3b3JkMTtcclxuICAgIHRoaXMuX2h0dHBzZXJ2aWNlLnNldHBhc3N3b3JkKHRoaXMuZGF0YSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2Uuc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnQ29ubmVjdGlvbnMnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZXZlcnl0aGluZyBnb2luZyBnb29kXCIpXHJcbiAgICAgICk7XHJcblxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
