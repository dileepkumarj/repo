import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteConfig, RouteParams} from 'angular2/router'
import {Control, ControlGroup, FORM_DIRECTIVES, Validators, FORM_BINDINGS} from 'angular2/common'
import {ProfileService} from '../Services/profile.Service'
import {ErrorMessages} from '../Validations/error.messages'
import {FormsValidationService} from '../validations/required.validator'
@Component({
    selector: 'trt',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, ErrorMessages],
    templateUrl: "views/Profile/testimonial.html",
    providers: [ProfileService]
})

export class TestimonialComponent {
    public passwordForm: ControlGroup;
    imgSrc;
    Data={};
    constructor(private router: Router, private _httpservice: ProfileService, params: RouteParams) {
        var data=params.get('id');
        data=atob(data);
        this.Data=JSON.parse(data);
        this.passwordForm = new ControlGroup({
            organisationid: new Control(this.Data.organisationid, Validators.nullValidator),
            email: new Control(this.Data.emailid, Validators.nullValidator),
            comment: new Control('', Validators.required),
            profilepic: new Control('', Validators.nullValidator)
        });
    }
    getfile=(evt)=>{
       var files = evt.target.files;
    var file = files[0];

    if (files && file) {
       
        var reader = new FileReader();
reader.readAsDataURL(file)
        reader.onload =(()=> {
            //var binaryString = readerEvt.target.result;
         localStorage.setItem('imgsrc',reader.result);
        this.passwordForm.value.profilepic=reader.result;
    this.imgSrc=reader.result;
        
        });

       // reader.readAsBinaryString(file);
    }
}
    submit() {
      // this.passwordForm.value.profilepic=localStorage.getItem('imgsrc');
        this._httpservice.PostTestim(this.passwordForm.value)
            .subscribe(
            data => {
                if (data.response.status == 1) {
                    this.router.navigateByUrl('/');
                }
            },
            error => alert('something went wrong please fill again and click submit'),
            () => console.log("everything going good")
            );

    }
}
