import { Component } from 'angular2/core';
import {ProfileService} from '../Services/profile.Service';
import {NumbersOnlyDirective} from '../validations/numberOnly.Directive';
@Component({
	selector: 'information',
	templateUrl: 'views/Profile/information.html',
})
export class InformationComponent{
	data;
	emailid;
	orgid;
	profilepic;
	lastname;
	firstname;
	gender;
	alternate_email;
	contactno;
	dateofbirth;
	description;
	designation;
	constructor(private _service:ProfileService,private numonly:NumbersOnlyDirective) {
		this.emailid=localStorage.getItem('authemail');
		this.orgid=localStorage.getItem('orgid');
this.getdetails();
	 }
	 	getdetails() {
		this._service.getdatayouinfo(this.emailid, this.orgid)
			.subscribe(
            data => {
                console.log(data);
				this.data=data.response.orgdata[0];
				this.firstname=this.data.ad_firstname;
				this.lastname=this.data.ad_lastname;
				this.gender=this.data.ad_gender;
				this.emailid=this.data.ad_email;
				this.profilepic=this.data.ad_profilepic;
				this.alternate_email=this.data.ad_alternate_email;
				this.contactno=this.data.ad_contactno;
				this.dateofbirth=this.data.ad_dateofbirth;
				this.description=this.data.ad_description;
				this.designation=this.data.ad_designation;
            },
            error => console.log(error),
            () => console.log('good')
            );
	}
	editdesc=0;
	updatedesc(){
		this._service.updatedescrip(this.orgid,this.description)
			.subscribe(
            data => {
				console.log(data);
				this.editdesc=0;
				 },
            error => console.log(error),
            () => console.log('good')
            );
	}
	alemedit=0;
	updateamail(){
		this._service.updatealtemail(this.orgid,this.alternate_email)
		.subscribe(
            data => {
				console.log(data);
				this.alemedit=0;
				 },
            error => console.log(error),
            () => console.log('good')
            );
	}
	conedit=0;
	      pheventHandler(evt,val) {
this.numonly.phonenumber(evt,val)
 }
	updatecont(){
		this._service.updateadmcno(this.orgid,this.contactno)
		.subscribe(
            data => {
				console.log(data);
				this.conedit=0;
				 },
            error => console.log(error),
            () => console.log('good')
            );
	}
	dobedt=0;
	updatedob(){
		this._service.updateofbth(this.orgid,this.dateofbirth)
		.subscribe(
            data => {
				console.log(data);
				this.dobedt=0;
				 },
            error => console.log(error),
            () => console.log('good')
            );
	}
	genedt=0;
	updategend(){
		this._service.updategensts(this.orgid,this.gender)
		.subscribe(
            data => {
				console.log(data);
				this.genedt=0;
				 },
            error => console.log(error),
            () => console.log('good')
            );
	}
}