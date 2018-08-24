import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public countryToShow: string;
  public countriesList: Array<Object>;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.http.country$.subscribe(list => {
      this.countriesList = list;
    });
  }

  showInfo(code) {
    this.countryToShow = code;
  }
}
