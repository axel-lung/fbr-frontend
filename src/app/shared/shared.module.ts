import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ScrollingModule
  ],
  exports:[
    MenuComponent,
    RouterModule,
    HeaderComponent,
    ScrollingModule
  ]
})
export class SharedModule { }
