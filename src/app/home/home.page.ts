import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
	const browser = this.iab.create('http://therandomlesson.com/', 'defaults', { location: 'no' });
 browser.on('loadstart').subscribe(event => {
 });

 browser.on('exit').subscribe(event => {
 browser.close();
 });
  }

}
