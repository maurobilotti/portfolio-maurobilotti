import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, slideInAnimation } from './modules/app-routing/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  }
}
