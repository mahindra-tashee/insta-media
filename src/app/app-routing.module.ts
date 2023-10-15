import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramMediaComponent } from './component/instagram-media/instagram-media.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'instagram',
    component:InstagramMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
