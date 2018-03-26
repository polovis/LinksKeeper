import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule, MatMenuModule, MatCheckboxModule, MatListModule } from '@angular/material';


@NgModule({
  imports: [    
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule],
  exports: [
    MatButtonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule]
})
export class MaterialAppModule { }