System.register(['angular2/core', 'angular2/common', './required.validator'], function(exports_1, context_1) {
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
    var core_1, common_1, required_validator_1;
    var ErrorMessages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (required_validator_1_1) {
                required_validator_1 = required_validator_1_1;
            }],
        execute: function() {
            ErrorMessages = (function () {
                function ErrorMessages(_formDir) {
                    this._formDir = _formDir;
                }
                Object.defineProperty(ErrorMessages.prototype, "errorMessage", {
                    get: function () {
                        // Find the control in the Host (Parent) form
                        var c = this._formDir.form.find(this.controlName);
                        for (var propertyName in c.errors) {
                            // If control has a error
                            if (c.errors.hasOwnProperty(propertyName) && (c.touched || c.dirty)) {
                                // Return the appropriate error message from the Validation Service
                                return required_validator_1.FormsValidationService.getValidatorErrorMessage(propertyName);
                            }
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                ErrorMessages = __decorate([
                    core_1.Component({
                        selector: 'error-messages',
                        inputs: ['controlName: control'],
                        template: "<span class=\"label label-danger\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</span>"
                    }), 
                    __metadata('design:paramtypes', [common_1.NgFormModel])
                ], ErrorMessages);
                return ErrorMessages;
            }());
            exports_1("ErrorMessages", ErrorMessages);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbGlkYXRpb25zL2Vycm9yLm1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBRUksdUJBQW9CLFFBQXFCO29CQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO2dCQUFJLENBQUM7Z0JBRTlDLHNCQUFJLHVDQUFZO3lCQUFoQjt3QkFDSSw2Q0FBNkM7d0JBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRWxELEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNuQyx5QkFBeUI7NEJBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN0RSxtRUFBbUU7Z0NBQzlELE1BQU0sQ0FBQywyQ0FBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDekUsQ0FBQzt3QkFDTCxDQUFDO3dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7OzttQkFBQTtnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDaEMsUUFBUSxFQUFFLDRGQUF3RjtxQkFDckcsQ0FBQzs7aUNBQUE7Z0JBbUJGLG9CQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx5Q0FrQkMsQ0FBQSIsImZpbGUiOiJWYWxpZGF0aW9ucy9lcnJvci5tZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm1Nb2RlbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7Rm9ybXNWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi9yZXF1aXJlZC52YWxpZGF0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Vycm9yLW1lc3NhZ2VzJyxcclxuICAgIGlucHV0czogWydjb250cm9sTmFtZTogY29udHJvbCddLFxyXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+e3tlcnJvck1lc3NhZ2V9fTwvc3Bhbj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvck1lc3NhZ2VzIHtcclxuICAgIGNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtRGlyOiBOZ0Zvcm1Nb2RlbCkgeyB9XHJcblxyXG4gICAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcclxuICAgICAgICAvLyBGaW5kIHRoZSBjb250cm9sIGluIHRoZSBIb3N0IChQYXJlbnQpIGZvcm1cclxuICAgICAgICBsZXQgYyA9IHRoaXMuX2Zvcm1EaXIuZm9ybS5maW5kKHRoaXMuY29udHJvbE5hbWUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gYy5lcnJvcnMpIHtcclxuXHQgICAgICAgIC8vIElmIGNvbnRyb2wgaGFzIGEgZXJyb3JcclxuICAgICAgICAgICAgaWYgKGMuZXJyb3JzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgKGMudG91Y2hlZCB8fGMuZGlydHkpKSB7XHJcbiBcdFx0ICAgICAgICAvLyBSZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgVmFsaWRhdGlvbiBTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRm9ybXNWYWxpZGF0aW9uU2VydmljZS5nZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UocHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
