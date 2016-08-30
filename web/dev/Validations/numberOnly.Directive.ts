import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map'
@Injectable()
export class NumbersOnlyDirective {
    constructor() { }
    year(evt, val) {
        if (evt.keyCode >= 48 && evt.keyCode <= 57) {

        }
        else {
            evt.preventDefault();
        }
        if (val.length > 3) {
            evt.preventDefault();
            return;
        }
        if (val.length < 3) {
            return { 'numberOnly': true };
        }
    }
     phonenumber(evt, val) {
        if (evt.keyCode >= 48 && evt.keyCode <= 57) {

        }
        else {
            evt.preventDefault();
        }
        if (val.length > 9) {
            evt.preventDefault();
            return;
        }
        if (val.length < 9) {
            return { 'numberOnly': true };
        }
    }
    pincode(evt, val) {
        if (evt.keyCode >= 48 && evt.keyCode <= 57) {

        }
        else {
            evt.preventDefault();
        }
        if (val.length > 5) {
            evt.preventDefault();
        }
        if (val.length < 5) {
            return { 'numberOnly': true };
        }
    }
}