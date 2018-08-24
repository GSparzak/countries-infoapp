import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class HttpService {

  public country$ = new BehaviorSubject<Array<Object>>([]);

  constructor(private http: HttpClient, private router: Router) {
  }

  getInfo(country: string) {
    return this.http.get<Array<Object>>('https://restcountries.eu/rest/v2/name/' + country).subscribe(
      data => {
        this.country$.next(data);
        console.log(this.country$);
        this.router.navigate(['list']);
      },
      err => {
        console.log(err);
      }
    );
  }

  getInfoByCode(code: string) {
    return this.http.get<Array<Object>>('https://restcountries.eu/rest/v2/alpha/' + code);
  }

  getCountriesByContinents(region) {
    return this.http.get<Array<Object>>('https://restcountries.eu/rest/v2/region/' + region).subscribe(
      data => {
        this.country$.next(data);
        console.log(this.country$);
        this.router.navigate(['list']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
