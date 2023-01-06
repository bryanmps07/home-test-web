import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsListComponent } from './commits-list/commits-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'commits', pathMatch: 'full', },
  { path: 'commits', component: CommitsListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
