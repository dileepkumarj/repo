import {Component} from 'angular2/core';
import {LoginComponent} from './login&register/login.component'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig} from 'angular2/router'
import {PasswordComponent} from './login&register/password.component'
import {ConnectionsComponent} from './Connections/connections.component'
import {FeedsComponent} from './Feeds/feeds.component'
import {HomeComponent} from './Home/home.components'
import {RequirementsComponent} from './Requirement/requirement.component'
import {LinkedinRegComponent} from './login&register/linkedinform.component'
import {ValidateLinkedin} from './login&register/validatelink.component'
import {ProfileComponent} from './Profile/profile.component'
import {TestimonialComponent} from './Profile/testimonial.component'
import {ActivityComponent} from './Activities/activities.Component'
@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES,LoginComponent],
})
@RouteConfig([
{path:'/',name:'Login',component:LoginComponent, useAsDefault:true},
{path:'/signup',name:'LinkedinReg',component:LinkedinRegComponent},
{path:'/user-confirmation-password/:organisationid',name:'Password',component:PasswordComponent},
{path:'/connections', name:'Connections',component:ConnectionsComponent},
{path:'/feeds',name:'Feeds',component:FeedsComponent},
{path:'/home',name:'Home',component:HomeComponent},
{path:'/requirements',name:'Requirements',component:RequirementsComponent},
{path:'/validate',name:'Validate',component:ValidateLinkedin},
{path:'/profile',name:'Profile',component:ProfileComponent},
{path:'/guesttest/:id',name:'PostTestim',component:TestimonialComponent},
{path:'/activity',name:'Activity',component:ActivityComponent}
]
)
export class AppComponent { 
    
}