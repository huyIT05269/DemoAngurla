import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-root',
    templateUrl : './demo1.component.html',

})
export class Demo1Component implements OnInit
{
    username : string ;
    status : boolean;
    price : number;
    quality : number;
    phone : any;
    photo : string;
    width : number;
    height : number;
    ngOnInit() {
    this.username = 'abc';
    this.status = true;
    this.price = 5;
    this.quality= 4;
    this.phone = '12323';
    this.photo = 'a.png';
    this.width = 150;
    this.height = 150;
    }
}