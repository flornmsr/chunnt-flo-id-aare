import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { InstaComponent } from './insta/insta.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/chunnt-flo-id-aare',
    pathMatch: 'full'
  },
  {
    path: 'flinsta',
    component: InstaComponent
  },
  {
    path: 'chunnt-flo-id-aare',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }