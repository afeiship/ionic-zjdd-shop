import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';


@App({
  templateUrl: 'build/app.html',
  config: {
    mode: 'ios',
    backButtonText: '返回'
  }
})
class MyApp {

  static get parameters() {
    return [[IonicApp], [Platform]];
  }

  constructor(app, platform) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // make HelloIonicPage the root (or first) page
    this.rootPage = LoginPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
