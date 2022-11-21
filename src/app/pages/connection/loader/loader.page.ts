import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  public progress = 0;
  public loadingCount = 0;

  constructor(private router: Router) {}

  ngOnInit() {

    setTimeout(() => {
      setTimeout(() => {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }, 5000);

      setInterval(() => {
        this.progress += 0.01;
        if(this.loadingCount < 100) {
          this.loadingCount += 1;
        }

      }, 50);
    }, 1500);




  }

}
