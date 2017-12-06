import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import angulafire
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  //Variable created from all persons to display
  all: Observable<any[]>;
  // list to apply modifications to:
  private allRef: AngularFireList<any>;
  isRemove: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    //root path
    this.allRef = db.list('/all');
    this.all = this.allRef.valueChanges();
    //console.log(this.all.lift );
  }

  refreshPage() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  //function add in database
  add(){
    //create a popup
    let alert = this.alertCtrl.create({
      title:"Register",
      //inputs of popup
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
          placeholder: "iconUrl"
        }
      ],
      buttons: [
        {
          text: "save",
          role: "save",
          handler: data=> {
            //this function send the object to firebase
            this.allRef.push({
                'name':data.Name,
                'job':data.Job,
                'iconUrl':data.Icon
            })
          }
        }
      ]

    })
    alert.present();
  }

  setRemove(){
    //show or not show the right icon
    this.isRemove = !this.isRemove
  }
  //function of remove
  //i get the object person
  remove(person:any){
    //remove the objetc person
    this.allRef.remove(person);
    this.setRemove();
  }

}
