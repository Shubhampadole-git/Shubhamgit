import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { TrainingComponent } from './training/training.component';
import {CarrierComponent }from './carrier/carrier.component'


const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'internship',component:InternshipComponent},
  { path:'contact',component:ContactComponent},
  { path:'training',component:TrainingComponent},
  {path:'carrier',component:CarrierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
