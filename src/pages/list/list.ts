import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import angulafire
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  //Variable created from all persons
  all : FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    //root path
    this.all = db.list('/all');
  }

  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  //function add in database
  add(){
    let alert = this.alertCtrl.create({
      title:"Cadastro",
      inputs: [
        {
          name: 'Name',
          placeholder: "name"
        },
        { 
          name: 'Job',
          placeholder: "job"
        },
        {
          name: 'Icon',
          placeholder: "icon"  
        }
      ],
      buttons: [
        {
          text: "save",
          role: "save",
          handler: data=> {
            //this function send the object for firebase
            this.all.push({
                'name':data.Name,
                'job':data.Job,
                'icon':data.Icon 
            })
          }
        }
      ]

    })
    alert.present();
  }
  

}
