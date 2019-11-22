import { Component, OnInit, Input, OnChanges, HostBinding, HostListener } from '@angular/core';
import { HttpService } from '../../../http.service';
import { Country } from '../../../app.component';
import { slideAnimation, changeInfo } from '../../../animations/info-box.animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [slideAnimation, changeInfo]
})
export class InfoComponent implements OnChanges {

  @Input() countryCode: string;
  public countryData: Country;

  @HostBinding('@slideAnimation')
  private animate: string;

  @HostListener('@slideAnimation.start') logNumber($event) {
    console.log(this.animate);
  }

  constructor(private http: HttpService) { }

  ngOnChanges() {
    this.getCountryDetails(this.countryCode);
  }

  getCountryDetails(code) {
    this.http.getInfoByCode(code).subscribe((data: any) => {
      this.countryData = data;
      this.animate = this.countryCode;
    });
  }

  findAnother(code) {
    this.countryCode = code;
    this.getCountryDetails(code);
    this.animate = this.countryCode;
  }

}
