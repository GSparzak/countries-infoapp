import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    findCountry: FormGroup;

    constructor(private http: HttpService) { }

    ngOnInit() {
      this.findCountry = new FormGroup({
          'country': new FormControl(null)
      });
    }

    submit() {
      const country = this.findCountry.value.country;
      this.http.getInfo(country);
    }

    searchByContinents(region) {
      this.http.getCountriesByContinents(region);
    }

}
