import { Component, OnInit } from 'angular2/core';
import {HeaderComponent} from '../Common/header.component';
import {OrganisationComponent} from './organization.component'
import {ProjectportComponent} from './projectport.component'
import {InformationComponent} from './information.component'
import {AccessComponent} from './adminAcess.component'
import {ProfileService} from '../Services/profile.Service'
import {NumbersOnlyDirective} from '../validations/numberOnly.Directive'
@Component({
    selector: 'selector',
    template: `<div>
     <headsec></headsec>
     <div class="requirement">
        <div class="banner">
            <div class="row">
                <div class=" col-md-12 col-sm-12 col-lg-12">
                    <a class="img_section"> <img [src]="cvrimg">
                        <div class="company-profile">
                            <div>
                                <div> <img [src]="orgimg"> </div>
                                <div *ngIf="cnedt==0">
                                    <h4>{{companyname}}</h4>
                                    <a href="javascript:void(0)" (click)="cnedt=1">Edit</a>
                                    </div>
                                    <div *ngIf="cnedt==1">
                                    <input type="text" [(ngModel)]="companyname">
                                    <a href="javascript:void(0)" (click)="cnedt=0">cancel</a>
                                    <a href="javascript:void(0)" (click)="updateorgname()">save</a>
                                    </div>
                            </div>
                        </div>
                    </a>
                    <div class="child-header">
                        <ul>
                            <li [class.active]="profile==0" (click)="profile=0"><a>Organization</a></li>
                            <li [class.active]="profile==1" (click)="profile=1"><a>Project Portfolio</a></li>
                            <li [class.active]="profile==2" (click)="profile=2"><a>Your Information</a></li>
                            <li [class.active]="profile==3" (click)="profile=3"><a>Administration Settings</a></li>
                        </ul>
                    </div>
                    <input type="file" id="f" accept="image/*" (change)="getfile($event,'client')"><button type="button" class="btn btn-default" [disabled]="orgimg==undefined" (click)="addlogo()">orgpic</button><button type="button" class="btn btn-default" [disabled]="orgimg!==undefined" (click)="addlogo(0)">del</button>
                    <input type="file" id="f" accept="image/*" (change)="getfile($event,'port')"><button type="button" class="btn btn-default" [disabled]="cvrimg==undefined" (click)="orglogo()">cvrpic</button><button type="button" class="btn btn-default" [disabled]="cvrimg!==undefined" (click)="orglogo(0)">del</button>
                </div>
            </div>
        </div>
        </div>
        <div *ngIf="profile==0">
        <orgprofile></orgprofile>
        </div>
         <div *ngIf="profile==1">
        <projectport></projectport>
        </div>
         <div *ngIf="profile==2">
        <information></information>
        </div>
         <div *ngIf="profile==3">
        <access></access>
        </div>
     </div>`,
    directives: [HeaderComponent, OrganisationComponent, ProjectportComponent, InformationComponent, AccessComponent],
    providers: [ProfileService, NumbersOnlyDirective]
})
export class ProfileComponent implements OnInit {
    orgid;
    profile: number;
    orgimg;
    cvrimg;
    companyname='';
    constructor(private _service: ProfileService) {
        this.profile = 0;
        this.orgid = localStorage.getItem('orgid');
        this.getval();
    }

    ngOnInit() {

    }
    getfile = (evt, cont) => {
        var files = evt.target.files;
        var file = files[0];

        if (files && file) {

            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (() => {
                //var binaryString = readerEvt.target.result;
                if (cont == 'client') {
                    this.orgimg = reader.result;
                } else if (cont == 'port') {
                    this.cvrimg = reader.result;
                }
            });
            // reader.readAsBinaryString(file);
        }
    }
    //logo start
    addlogo(atn) {
         var cs;
        if(atn==0){
            cs=0;
        }else{
            cs=1;
        }
        var data={"organisationid":this.orgid,"coverpic":this.orgimg,"coverstatus":1};
        this._service.addLogo(data)
            .subscribe(
            data => {
                console.log(data);
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }

    //logo end
    //cover pic start
    orglogo(atn) {
        var cs;
        if(atn==0){
            cs=0;
        }else{
            cs=1;
        }
        var body={"organisationid":this.orgid,"coverpic":this.cvrimg,"coverstatus":cs};
        
        this._service.addorgLogo(body)
            .subscribe(
            data => {
                console.log(data);
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    //cover pic end
    //orgname update start
    cnedt=0;
    updateorgname(){
        this._service.orgname(this.orgid,this.companyname)
         .subscribe(
            data => {
                console.log(data);
                this.cnedt=0;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
    }
    //org name update ends
    getval(){
    this._service.getorgdata(this.orgid)
     .subscribe(
            data => {
          var test=data.response.orgdata;
          this.orgimg=test.og_logo;
          this.cvrimg=test.og_coverpic;
          this.companyname=test.og_name;
            },
            error => alert(error),
            () => console.log('everything going good')

            );
}
}