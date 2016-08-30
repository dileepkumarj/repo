import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router,RouteConfig} from 'angular2/router';
import {ConnectionsService} from '../Services/connections.service';
import {HeaderComponent} from '../Common/header.component';


@Component({
    selector: 'connections',
    directives:[ROUTER_DIRECTIVES,HeaderComponent],
    templateUrl:"views/Connections/connections.html",
    providers:[ConnectionsService],
   // styleUrls:['html/build/css/style.css']
})
export class ConnectionsComponent {
    Orgid;
    showcon=0;
    connectionList;
    followersList;
    followingList;
    recommendations=[{'name':'TechSimplified','orgid':'ORG00null'},{'name':'Hewlett Packard','orgid':'ORG00332'},{'name':'Dell','orgid':'ORG00342'},{'name':'Cognizant','orgid':'ORG00352'},{'name':'Tech Mahindra','orgid':'ORG00362'},{'name':'TCS','orgid':'ORG00372'},{'name':'IBM','orgid':'ORG00372'},{'name':'CSC','orgid':'ORG00382'},{'name':'NCR','orgid':'ORG00392'},{'name':'V Splash','orgid':'ORG00402'},{'name':'Crocodile','orgid':'ORG00412'},{'name':'Lion','orgid':'ORG0422'}]
    selected={orgid:'',message:'Hi,I would like to have you in my connections.Please accept my request..!',name:''}
    constructor(private router:Router,private _service:ConnectionsService) {
        this.Orgid=localStorage.getItem('orgid');
        if(this.Orgid!==(undefined||null)){
this.getconnections(this.Orgid);
this.getfollowers(this.Orgid);
this.getfollowing(this.Orgid);
        }else{
            router.navigateByUrl('/');
        }
    }
   getconnections(id){
       this._service.getConnection(id)
       .subscribe(
            data => {
            this.connectionList = data.response.connection;
            console.log(this.connectionList);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
   }
   connectionpop=(selected)=>{
       this.selected.orgid=selected.orgid;
       this.selected.name=selected.name;
   }
   getfollowers(id){
       this._service.getfollowers(id)
       .subscribe(
            data => {
            this.followersList = data.response.followers;
            console.log(data);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
   }
    getfollowing(id){
       this._service.getfollowing(id)
       .subscribe(
            data => {
            this.followingList = data.response.followings;
            console.log(data);
            },
            error => alert(error),
            () => console.log("everything going good")
            );
   }
   deleteconnection(orgid,conid){
       this._service.deleteconnection(orgid,conid)
       .subscribe(
           data=>{console.log(data);
               this.getconnections(orgid)},
           error=>console.log(error),
           ()=>console.log("everything going good")
       );
   }
    confirm(orgid,conid){
       this._service.confirmconnection(orgid,conid)
       .subscribe(
           data=>{console.log(data);
               this.getconnections(orgid)
               this.getfollowers(orgid);
            },
           error=>console.log(error),
           ()=>console.log("everything going good")
       );
   }
    connect(sel){
       this._service.addconnection(this.Orgid,sel.orgid,sel.message)
       .subscribe(
           data=>{console.log(data);
               this.getconnections(this.Orgid)
                this.getfollowing(this.Orgid);
                this.getfollowers(this.Orgid);
            },
           error=>console.log(error),
           ()=>console.log("everything going good")
       );
   }
}