import {Page, NavController, NavParams,Loading} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/orders/orders.html'
})
export class TabOrdersPage {
  constructor() {
    console.log('tabs orders page');
    this.topItems = this.getTopItems();
  }

  getTopItems() {
    var items = [
      {
        text: '待接单',
        state: 0
      },
      {
        text: '待配送',
        state: 1
      },
      {
        text: '配送中',
        state: 2
      },
      {
        text: '已配送',
        state: 3
      },
      {
        text: '已完成',
        state: 4
      },
      {
        text: '已拒绝',
        state: 5
      }
    ];

    items.forEach(function (item, index) {
      item.active = !index;
    });

    return items;
  }

  itemClick(inItem){
    this.topItems.forEach(function(item){
      item.active=false;
    });
    inItem.active=true;
  }
}
