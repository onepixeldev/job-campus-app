import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: string, openTab?: any}>;
  rootPage = 'IndexPage';
 
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Home', component: 'IndexPage' },
      { title: 'Login', component: 'LoginPage' },
      { title: 'Register', component: 'RegisterPage' },
    ];
  }

  signin() {
    this.navCtrl.push('LoginPage');
  }

  openPage(page) {
    this.nav.setRoot(page.component, {  openTab: page.openTab });
  }
}
