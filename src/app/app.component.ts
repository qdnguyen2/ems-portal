import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //CSS Selector style
  templateUrl: './app.component.html',
  /* This inline style will take over the style define in the app.component.css
  styles:[`
    h2 {
      color: red;
    }
  `]
  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ems-sample with Angular CLI 9.0';
}
