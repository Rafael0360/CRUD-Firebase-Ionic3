import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import angulafire
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  //Variable created from all persons
  all : FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    //root path
    this.all = db.list('/all');
  }

}
