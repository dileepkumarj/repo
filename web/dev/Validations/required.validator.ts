export class FormsValidationService {

    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required ..!',
            'invalidEmail': 'Invalid email address ..!',
            'numberOnly':'Year should be atleast Four Digits!',
            'url':'Enter correct url..!',
            'equal':'Please Match Password'
        };
        return config[code];
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }
        static numberonly(control) {
        // RFC 2822 compliant regex
        var pattern=new RegExp('^\\d{4}$');
        if (control.value.match(pattern)) {
            return null;
        } else {
            return { 'numberOnly': true };
        }
    }
    static url(control){
        var pattern=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        if (control.value.match(pattern)) {
            return null;
        }else if(control.value==""){
            return null;
        }else{
            return {'url':true}
        }
    }
    static Phonenumber(control){
        
    }
}