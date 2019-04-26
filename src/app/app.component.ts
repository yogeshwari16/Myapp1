import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations'
import { ToasterConfig } from 'angular2-toaster';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  

})
export class AppComponent {
  title = 'app';
  getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation
  }
  public config:ToasterConfig =
    new ToasterConfig ({
      showCloseButton:true,
    });


}
