System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormsValidationService;
    return {
        setters:[],
        execute: function() {
            FormsValidationService = (function () {
                function FormsValidationService() {
                }
                FormsValidationService.getValidatorErrorMessage = function (code) {
                    var config = {
                        'required': 'Required ..!',
                        'invalidEmail': 'Invalid email address ..!',
                        'numberOnly': 'Year should be atleast Four Digits!',
                        'url': 'Enter correct url..!',
                        'equal': 'Please Match Password'
                    };
                    return config[code];
                };
                FormsValidationService.emailValidator = function (control) {
                    // RFC 2822 compliant regex
                    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return null;
                    }
                    else {
                        return { 'invalidEmail': true };
                    }
                };
                FormsValidationService.numberonly = function (control) {
                    // RFC 2822 compliant regex
                    var pattern = new RegExp('^\\d{4}$');
                    if (control.value.match(pattern)) {
                        return null;
                    }
                    else {
                        return { 'numberOnly': true };
                    }
                };
                FormsValidationService.url = function (control) {
                    var pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                    if (control.value.match(pattern)) {
                        return null;
                    }
                    else if (control.value == "") {
                        return null;
                    }
                    else {
                        return { 'url': true };
                    }
                };
                FormsValidationService.Phonenumber = function (control) {
                };
                return FormsValidationService;
            }());
            exports_1("FormsValidationService", FormsValidationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbGlkYXRpb25zL3JlcXVpcmVkLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7Z0JBMkNBLENBQUM7Z0JBekNVLCtDQUF3QixHQUEvQixVQUFnQyxJQUFZO29CQUN4QyxJQUFJLE1BQU0sR0FBRzt3QkFDVCxVQUFVLEVBQUUsY0FBYzt3QkFDMUIsY0FBYyxFQUFFLDJCQUEyQjt3QkFDM0MsWUFBWSxFQUFDLHFDQUFxQzt3QkFDbEQsS0FBSyxFQUFDLHNCQUFzQjt3QkFDNUIsT0FBTyxFQUFDLHVCQUF1QjtxQkFDbEMsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVNLHFDQUFjLEdBQXJCLFVBQXNCLE9BQU87b0JBQ3pCLDJCQUEyQjtvQkFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUlBQXVJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9KLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUNwQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ1UsaUNBQVUsR0FBakIsVUFBa0IsT0FBTztvQkFDekIsMkJBQTJCO29CQUMzQixJQUFJLE9BQU8sR0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQztnQkFDTCxDQUFDO2dCQUNNLDBCQUFHLEdBQVYsVUFBVyxPQUFPO29CQUNkLElBQUksT0FBTyxHQUFDLG1GQUFtRixDQUFDO29CQUNoRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUE7b0JBQ3ZCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDTSxrQ0FBVyxHQUFsQixVQUFtQixPQUFPO2dCQUUxQixDQUFDO2dCQUNMLDZCQUFDO1lBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtZQTNDRCwyREEyQ0MsQ0FBQSIsImZpbGUiOiJWYWxpZGF0aW9ucy9yZXF1aXJlZC52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRm9ybXNWYWxpZGF0aW9uU2VydmljZSB7XHJcblxyXG4gICAgc3RhdGljIGdldFZhbGlkYXRvckVycm9yTWVzc2FnZShjb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnUmVxdWlyZWQgLi4hJyxcclxuICAgICAgICAgICAgJ2ludmFsaWRFbWFpbCc6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MgLi4hJyxcclxuICAgICAgICAgICAgJ251bWJlck9ubHknOidZZWFyIHNob3VsZCBiZSBhdGxlYXN0IEZvdXIgRGlnaXRzIScsXHJcbiAgICAgICAgICAgICd1cmwnOidFbnRlciBjb3JyZWN0IHVybC4uIScsXHJcbiAgICAgICAgICAgICdlcXVhbCc6J1BsZWFzZSBNYXRjaCBQYXNzd29yZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjb25maWdbY29kZV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICAvLyBSRkMgMjgyMiBjb21wbGlhbnQgcmVnZXhcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaCgvW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/LykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRFbWFpbCc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgc3RhdGljIG51bWJlcm9ubHkoY29udHJvbCkge1xyXG4gICAgICAgIC8vIFJGQyAyODIyIGNvbXBsaWFudCByZWdleFxyXG4gICAgICAgIHZhciBwYXR0ZXJuPW5ldyBSZWdFeHAoJ15cXFxcZHs0fSQnKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaChwYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnbnVtYmVyT25seSc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXJsKGNvbnRyb2wpe1xyXG4gICAgICAgIHZhciBwYXR0ZXJuPS9bLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV17MiwyNTZ9XFwuW2Etel17Miw0fVxcYihcXC9bLWEtekEtWjAtOUA6JV9cXCsufiM/Ji8vPV0qKT8vZ2k7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2UgaWYoY29udHJvbC52YWx1ZT09XCJcIil7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4geyd1cmwnOnRydWV9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIFBob25lbnVtYmVyKGNvbnRyb2wpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
