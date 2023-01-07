import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsBackendComponent } from './commits-backend/commits-backend.component';
import { CommitsFrontendComponent } from './commits-frontend/commits-frontend.component';

const routes: Routes = [
  { path: '', redirectTo: 'commits', pathMatch: 'full', },
  { path: 'commits', component: CommitsBackendComponent },
  { path: 'commits/frontend', component: CommitsFrontendComponent },
  { path: 'commits/backend', component: CommitsBackendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
