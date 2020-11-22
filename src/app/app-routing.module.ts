import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlantlistComponent} from './plantlist/plantlist.component';
const routes: Routes = [
  {
    path: 'plants',
    component: PlantlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
