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
  isRemove: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    //root path
    this.all = db.list('/all');
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
            this.all.push({
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
    this.all.remove(person);
    this.setRemove();
  }

}
