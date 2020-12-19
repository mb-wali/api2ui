import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdmComponent } from './rdm/rdm.component';

const routes: Routes = [
  { path: '', component: RdmComponent },
  { path: 'rdm', component: RdmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
