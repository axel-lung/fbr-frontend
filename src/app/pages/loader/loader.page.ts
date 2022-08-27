import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {}, 5000);
    this.router.navigateByUrl('/tab1', { replaceUrl: true });
  }
}
