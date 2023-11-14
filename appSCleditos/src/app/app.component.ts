import { Component } from '@angular/core';
import { EmmitterService } from './services/emitter/emitter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appSCleditos';
  constructor(public _evetEmiter: EmmitterService){
    const sytem = localStorage.getItem('system');
    if (sytem=="true") {
      this._evetEmiter.setShowUser(true)
    }else{
      this._evetEmiter.setShowUser(false)
    }
  }
}
