import {Page, NavController, NavParams,Loading} from 'ionic-angular';
import {ForgotPage} from '../forgot/forgot';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  login() {
    this.doLogin();
    console.log('do login!');
  }

  forgot() {
    this.nav.push(ForgotPage);
  }

  doLogin() {
    console.log('go to tabs!');
    this.nav.push(TabsPage);
  }

  presentLoadingDefault() {
    var self = this;
    let loading = Loading.create({
      content: '登录中...'
    });

    this.nav.present(loading);

    setTimeout(() => {
      loading.dismiss();
      self.doLogin();
    }, 5000);
  }
}
