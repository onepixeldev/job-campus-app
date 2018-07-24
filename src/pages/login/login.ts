import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
    .then(res => {
      this.navCtrl.setRoot('DashboardPage');
    }, err => {
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/wrong-password":
          msg= "Email or Password is wrong.";
          break;
  
        case "auth/user-not-found":
          msg= 'User not found.'
          break;
  
        case "auth/invalid-email":
          msg= 'Email or Password is wrong.';
          break;
      }
  
      alert(msg);
    });


    /*try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot('DashboardPage');
      }
      else {
        let msg;

        switch (Error['code']) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
          case "auth/wrong-password":
            msg= "Email or Password is wrong.";
            break;

          case "auth/user-not-found":
            msg= 'User not found.'
            break;

          case "auth/invalid-email":
            msg= 'Email or Password is wrong.';
            break;
        }

        msg.present();
      }
    }
    catch(e) {
      console.error(e);
    }*/
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }
}
