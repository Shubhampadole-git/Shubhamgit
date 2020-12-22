import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgbModal,
    BrowserModule,
  ]
})
export class HomeModule { }
