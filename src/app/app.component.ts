import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'app';

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute.data._value.state : '';
  }
}

export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: string;
  capital: string;
  cioc: string;
  currencies: Array<Object>;
  demonym: string;
  flag: string;
  gini: number;
  languages: Array<Object>;
  latlng: Array<number>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: Array<Object>;
  subregion: string;
  timezones: Array<string>;
  topLevelDomain: string;
  translations: Object;
}
