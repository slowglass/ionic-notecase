import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';

import { DropboxService } from '../../services/dropbox/dropbox';

@Component({
  templateUrl: 'hello-ionic.html',
  providers: [DropboxService]
})

export class HelloIonicPage {
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private dropboxService: DropboxService) {
    this.dropboxService.updateTree(this.moveOn);
  }

  moveOn() {
    this.navCtrl.push(ListPage);
  }
}
