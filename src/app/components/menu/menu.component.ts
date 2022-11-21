import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public profileSize = '';
  public homeSize = '';
  public gameSize = '';
  constructor(private router: Router) {}

  ngOnInit() {
    switch (this.router.url) {
      case '/home/profile':
        this.profileSize = 'scale(1.5) translateY(-5px)';
        break;
      case '/home':
        this.homeSize = 'scale(1.5) translateY(-5px)';
        break;
      case '/home/game':
        this.gameSize = 'scale(1.5) translateY(-5px)';
        break;
      default:
        break;
    }
  }
}
