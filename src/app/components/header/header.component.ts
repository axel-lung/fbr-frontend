import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public date: string;
  constructor() { }

  async ngOnInit() {
    this.date = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  }

}
