System.register(['angular2/core', './login&register/login.component', 'angular2/router', './login&register/password.component', './Connections/connections.component', './Feeds/feeds.component', './Home/home.components', './Requirement/requirement.component', './login&register/linkedinform.component', './login&register/validatelink.component', './Profile/profile.component', './Profile/testimonial.component', './Activities/activities.Component'], function(exports_1, context_1) {
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
    var core_1, login_component_1, router_1, router_2, password_component_1, connections_component_1, feeds_component_1, home_components_1, requirement_component_1, linkedinform_component_1, validatelink_component_1, profile_component_1, testimonial_component_1, activities_Component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (password_component_1_1) {
                password_component_1 = password_component_1_1;
            },
            function (connections_component_1_1) {
                connections_component_1 = connections_component_1_1;
            },
            function (feeds_component_1_1) {
                feeds_component_1 = feeds_component_1_1;
            },
            function (home_components_1_1) {
                home_components_1 = home_components_1_1;
            },
            function (requirement_component_1_1) {
                requirement_component_1 = requirement_component_1_1;
            },
            function (linkedinform_component_1_1) {
                linkedinform_component_1 = linkedinform_component_1_1;
            },
            function (validatelink_component_1_1) {
                validatelink_component_1 = validatelink_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (testimonial_component_1_1) {
                testimonial_component_1 = testimonial_component_1_1;
            },
            function (activities_Component_1_1) {
                activities_Component_1 = activities_Component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/signup', name: 'LinkedinReg', component: linkedinform_component_1.LinkedinRegComponent },
                        { path: '/user-confirmation-password/:organisationid', name: 'Password', component: password_component_1.PasswordComponent },
                        { path: '/connections', name: 'Connections', component: connections_component_1.ConnectionsComponent },
                        { path: '/feeds', name: 'Feeds', component: feeds_component_1.FeedsComponent },
                        { path: '/home', name: 'Home', component: home_components_1.HomeComponent },
                        { path: '/requirements', name: 'Requirements', component: requirement_component_1.RequirementsComponent },
                        { path: '/validate', name: 'Validate', component: validatelink_component_1.ValidateLinkedin },
                        { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent },
                        { path: '/guesttest/:id', name: 'PostTestim', component: testimonial_component_1.TestimonialComponent },
                        { path: '/activity', name: 'Activity', component: activities_Component_1.ActivityComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw2Q0FFVDt3QkFDRCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBQyxnQ0FBYyxDQUFDO3FCQUNoRCxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ2IsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGdDQUFjLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQzt3QkFDbkUsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLDZDQUFvQixFQUFDO3dCQUNsRSxFQUFDLElBQUksRUFBQyw2Q0FBNkMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxzQ0FBaUIsRUFBQzt3QkFDaEcsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLDRDQUFvQixFQUFDO3dCQUN4RSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsZ0NBQWMsRUFBQzt3QkFDckQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLCtCQUFhLEVBQUM7d0JBQ2xELEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyw2Q0FBcUIsRUFBQzt3QkFDMUUsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLHlDQUFnQixFQUFDO3dCQUM3RCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsb0NBQWdCLEVBQUM7d0JBQzNELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLDRDQUFvQixFQUFDO3dCQUN4RSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsd0NBQWlCLEVBQUM7cUJBQzdELENBQ0E7O2dDQUFBO2dCQUdELG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4mcmVnaXN0ZXIvbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXHJcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHtQYXNzd29yZENvbXBvbmVudH0gZnJvbSAnLi9sb2dpbiZyZWdpc3Rlci9wYXNzd29yZC5jb21wb25lbnQnXHJcbmltcG9ydCB7Q29ubmVjdGlvbnNDb21wb25lbnR9IGZyb20gJy4vQ29ubmVjdGlvbnMvY29ubmVjdGlvbnMuY29tcG9uZW50J1xyXG5pbXBvcnQge0ZlZWRzQ29tcG9uZW50fSBmcm9tICcuL0ZlZWRzL2ZlZWRzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL0hvbWUvaG9tZS5jb21wb25lbnRzJ1xyXG5pbXBvcnQge1JlcXVpcmVtZW50c0NvbXBvbmVudH0gZnJvbSAnLi9SZXF1aXJlbWVudC9yZXF1aXJlbWVudC5jb21wb25lbnQnXHJcbmltcG9ydCB7TGlua2VkaW5SZWdDb21wb25lbnR9IGZyb20gJy4vbG9naW4mcmVnaXN0ZXIvbGlua2VkaW5mb3JtLmNvbXBvbmVudCdcclxuaW1wb3J0IHtWYWxpZGF0ZUxpbmtlZGlufSBmcm9tICcuL2xvZ2luJnJlZ2lzdGVyL3ZhbGlkYXRlbGluay5jb21wb25lbnQnXHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSAnLi9Qcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50J1xyXG5pbXBvcnQge1Rlc3RpbW9uaWFsQ29tcG9uZW50fSBmcm9tICcuL1Byb2ZpbGUvdGVzdGltb25pYWwuY29tcG9uZW50J1xyXG5pbXBvcnQge0FjdGl2aXR5Q29tcG9uZW50fSBmcm9tICcuL0FjdGl2aXRpZXMvYWN0aXZpdGllcy5Db21wb25lbnQnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUyxMb2dpbkNvbXBvbmVudF0sXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbntwYXRoOicvJyxuYW1lOidMb2dpbicsY29tcG9uZW50OkxvZ2luQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6dHJ1ZX0sXHJcbntwYXRoOicvc2lnbnVwJyxuYW1lOidMaW5rZWRpblJlZycsY29tcG9uZW50OkxpbmtlZGluUmVnQ29tcG9uZW50fSxcclxue3BhdGg6Jy91c2VyLWNvbmZpcm1hdGlvbi1wYXNzd29yZC86b3JnYW5pc2F0aW9uaWQnLG5hbWU6J1Bhc3N3b3JkJyxjb21wb25lbnQ6UGFzc3dvcmRDb21wb25lbnR9LFxyXG57cGF0aDonL2Nvbm5lY3Rpb25zJywgbmFtZTonQ29ubmVjdGlvbnMnLGNvbXBvbmVudDpDb25uZWN0aW9uc0NvbXBvbmVudH0sXHJcbntwYXRoOicvZmVlZHMnLG5hbWU6J0ZlZWRzJyxjb21wb25lbnQ6RmVlZHNDb21wb25lbnR9LFxyXG57cGF0aDonL2hvbWUnLG5hbWU6J0hvbWUnLGNvbXBvbmVudDpIb21lQ29tcG9uZW50fSxcclxue3BhdGg6Jy9yZXF1aXJlbWVudHMnLG5hbWU6J1JlcXVpcmVtZW50cycsY29tcG9uZW50OlJlcXVpcmVtZW50c0NvbXBvbmVudH0sXHJcbntwYXRoOicvdmFsaWRhdGUnLG5hbWU6J1ZhbGlkYXRlJyxjb21wb25lbnQ6VmFsaWRhdGVMaW5rZWRpbn0sXHJcbntwYXRoOicvcHJvZmlsZScsbmFtZTonUHJvZmlsZScsY29tcG9uZW50OlByb2ZpbGVDb21wb25lbnR9LFxyXG57cGF0aDonL2d1ZXN0dGVzdC86aWQnLG5hbWU6J1Bvc3RUZXN0aW0nLGNvbXBvbmVudDpUZXN0aW1vbmlhbENvbXBvbmVudH0sXHJcbntwYXRoOicvYWN0aXZpdHknLG5hbWU6J0FjdGl2aXR5Jyxjb21wb25lbnQ6QWN0aXZpdHlDb21wb25lbnR9XHJcbl1cclxuKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
