import { Component } from '@angular/core';

import { AddDataPage } from '../add-data/add-data';
import { HomePage } from '../home/home';
import { RawDataPage } from '../raw-data/raw-data';
import { VisualizationPage } from '../visualization/visualization';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RawDataPage;
  tab3Root = AddDataPage;
  tab4Root = VisualizationPage;

  constructor() {

  }
}
