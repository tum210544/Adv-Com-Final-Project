import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../../config/keys';


/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddingProvider {
  constructor(public http: HttpClient) {
    console.log('Hello ScoreProvider Provider');
  }

  insertMovies(itemList,title:string,genre:string,listed_in:string,director:string,
    country:string,date_added:string,release_year:number,duration:number,description:string) {
    console.log(config.URL+'/insertmovie?movie=' +title+';'+genre+';'+listed_in+';'+director+';'+country+';'+date_added+';'+release_year+';'+duration+';'+description)
    this.http.get(config.URL+'/insertmovie?movie=' +title+';'+genre+';'+listed_in+';'+director+';'+country+';'+date_added+';'+release_year+';'+duration+';'+description).subscribe((data: any) => {
      itemList.push(data[0])
    });
  };

}
