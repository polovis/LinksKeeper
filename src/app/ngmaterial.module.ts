import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatCheckboxModule, MatListModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    BrowserAnimationsModule,    
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule]
})
export class MaterialAppModule { }