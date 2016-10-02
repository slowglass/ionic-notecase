import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { ItemDetailsPage } from '../item-details/item-details';

import {DropboxService} from '../../services/dropbox/dropbox';
import {Note} from '../../note';

@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  token: string;
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dropboxService: DropboxService) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

    for (let i = 1; i < 3; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
