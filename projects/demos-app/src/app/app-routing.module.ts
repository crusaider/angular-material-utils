import { OverlaySpinnerDemoComponent } from './overlay-spinner-demo/overlay-spinner-demo.component';
import { SortedTableDemoComponent } from './sorted-table-demo/sorted-table-demo.component';
import { HomeComponent } from './navigation/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sorted-table',
    component: SortedTableDemoComponent
  },
  {
    path: 'overlay-spinner',
    component: OverlaySpinnerDemoComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
