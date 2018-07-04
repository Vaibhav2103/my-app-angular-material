import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormControlComponent } from '../demo-form-control/demo-form-control.component';
import { DemoCardComponent } from '../demo-card/demo-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: DemoFormControlComponent },
  { path: 'card', component: DemoCardComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
