import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  doLogin() {
    console.log('do login!');
  }
}
