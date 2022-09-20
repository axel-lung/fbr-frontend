import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CgvPage } from './cgv.page';

const routes: Routes = [
  {
    path: '',
    component: CgvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CgvPageRoutingModule {}
