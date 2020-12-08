import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchDataProvider {
    constructor(public http: HttpClient) {
        console.log('Hello MyDataProvider Provider');
      }
    
      last = 0;

      getFirstData(itemList, id, event,title,genre) {
        this.last=0;
        console.log("I'll get the data")
        this.http.get('http://02555f7d258b.ngrok.io/findByFilter?id=' + this.last + '&title='+ title+'&genre='+genre).subscribe((data: any) => {
          for (let i = 0; i < data.length; i++) {
            itemList.push(data[i]);
            this.last = data[data.length-1]['id']
          }
          if (id != 0) {
            event.complete();
          }
        });
      };
    
      getData(itemList, id, event,title,genre) {
        console.log("I'll get the data")
        this.http.get('http://02555f7d258b.ngrok.io/findByFilter?id=' + this.last + '&title='+ title+'&genre='+genre).subscribe((data: any) => {
          for (let i = 0; i < data.length; i++) {
            itemList.push(data[i]);
            this.last = data[data.length-1]['id']
          }
          if (id != 0) {
            event.complete();
          }
        });
      };

    }
    