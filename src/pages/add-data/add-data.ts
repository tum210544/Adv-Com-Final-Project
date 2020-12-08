import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { AddingProvider } from '../../providers/adding/adding'


@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {
  itemListData=[]
  title;
  genre;
  listed_in;director;country;date_added;release_year;duration;description




  constructor(private addingProvider: AddingProvider,public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController) {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Finish Adding',
      buttons: ['OK']
    });

    await alert.present();
  }

  onCancel(){
    this.title = ""
    this.genre = ""
    this.listed_in = ""
    this.director = ""
    this.country = ""
    this.duration = ""
    this.description = ""
    this.date_added = ""
    this.release_year = ""
  }

  addMovie(title:string,genre:string,listed_in:string,director:string,
    country:string,date_added:string,release_year:number,duration:number,description:string){
    this.addingProvider.insertMovies(this.itemListData,title,genre,listed_in,director,country,date_added,release_year,duration,description);
    this.presentAlert()
  }

}
