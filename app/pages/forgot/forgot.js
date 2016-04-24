import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/forgot/forgot.html'
})
export class ForgotPage {

  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  findPass() {
    console.log('find pass logi');
    this.nav.pop();
  }
}
