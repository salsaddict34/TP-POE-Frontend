import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeComponent } from './poe.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PoeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PoeModule { }
