import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: 'loader',
    loadChildren: () => import('./pages/connection/loader/loader.module').then( m => m.LoaderPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/connection/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    redirectTo: '/loader',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/connection/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: []
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module').then( m => m.RoomPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cgv',
    loadChildren: () => import('./pages/cgv/cgv.module').then( m => m.CgvPageModule)
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
