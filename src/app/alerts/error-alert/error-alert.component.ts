import { OnInit, Component } from '@angular/core';

@Component({
    selector:'app-error-alert',
    templateUrl: './error-alert.component.html',
    //styleUrls:['./error-alert.component.css']
    styles:[`
        p {
            color: red;
            padding: 20px;
            background-color: yellow;
        }
    `]
})
export class ErrorAlertComponent implements OnInit{
    
    constructor(){}

    ngOnInit():void{

    }
}