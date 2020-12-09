import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchDataProvider } from '../../providers/searchData/searchData'

@IonicPage()
@Component({
  selector: 'page-raw-data',
  templateUrl: 'raw-data.html',
})
export class RawDataPage {
  itemListData =[];
  pageNumber = 0;
  title="";
  genre="";
  unit=""
  constructor(private searchDataProvider: SearchDataProvider,public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController) {
  }

  async getDetail(item) {
    if (item.genre == "Movie"){
        this.unit="min"
    }else{
      this.unit="season"
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Title: '+ item.title+'<br/>'
      +'Genre: '+item.genre+'<br/>'
      +'Listed in: '+item.listed_in+'<br/>'
      +'Country: '+item.country+'<br/>'
      +'Duration: '+item.duration+" "+this.unit+'<br/>'
      +'Director: '+item.director+'<br/>'
      +'Release Year: '+item.release_year+'<br/>'
      +'Date added to netflix: '+item.date_added+'<br/>'
      +'Description: '+item.description,
      buttons: ['OK']
    });

    await alert.present();
  }

  onSearch() {
    this.itemListData =[];
    this.searchDataProvider.getFirstData(this.itemListData,0,"",this.title,this.genre);
  }

  doInfinite(event) {
    this.pageNumber++;
    this.searchDataProvider.getData(this.itemListData,this.pageNumber*20,event,this.title,this.genre);
  }
}
