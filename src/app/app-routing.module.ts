import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chaild1Component } from './chaild1/chaild1.component';
import { Chaild2Component } from './chaild2/chaild2.component';
import { NewcomponentComponent } from './new-app/newcomponent/newcomponent.component';

const routes: Routes = [
  { path: '', component: Chaild1Component },
  { path: 'child2', component: Chaild2Component},
  { path: 'newModule', component: NewcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
