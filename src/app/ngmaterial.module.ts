import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatCheckboxModule, MatListModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,    
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule],
  exports: [
    MatButtonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule]
})
export class MaterialAppModule { }