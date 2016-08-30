import {Injectable} from 'angular2/core';
import {OnInit,ElementRef} from 'angular2/core';
import 'rxjs/add/operator/map'
@Injectable()
export class NumbersOnlyDirective implements OnInit{
    constructor(private elRef:ElementRef) { }
    ngOnInit():any{}
    
}