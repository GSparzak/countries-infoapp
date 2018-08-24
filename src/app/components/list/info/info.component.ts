import { Component, OnInit, Input, OnChanges, HostBinding } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Country } from '../../../app.component';
import { slideAnimation } from '../../../animations/slide.animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [slideAnimation]
})
export class InfoComponent implements OnChanges {

  @Input() countryCode: string;
  public countryData: Country;

  @HostBinding('@slideAnimation')
  private animate = true;

  constructor(private http: HttpService) { }

  ngOnChanges() {
    this.getCountryDetails(this.countryCode);
  }

  getCountryDetails(code) {
    this.http.getInfoByCode(code).subscribe((data: any) => {
      this.countryData = data;
    });
  }

  findAnother(code) {
    this.countryCode = code;
    this.getCountryDetails(code);
  }

}
