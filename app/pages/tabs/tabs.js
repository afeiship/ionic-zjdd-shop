import {Page, NavController, NavParams,Loading} from 'ionic-angular';
import {TabOrdersPage} from '../orders/orders';
import {TabToolsPage} from '../tools/tools';
import {TabChatPage} from '../chat/chat';
import {TabGoodsPage} from '../goods/goods';
import {TabStorePage} from '../store/store';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  constructor() {
    this.tabOrders = TabOrdersPage;
    this.tabTools = TabToolsPage;
    this.tabChat = TabChatPage;
    this.tabGoods = TabGoodsPage;
    this.tabStore = TabStorePage;
  }
}
