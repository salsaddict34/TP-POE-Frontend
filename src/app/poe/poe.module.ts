import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeComponent } from './poe.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PoeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PoeModule { }
