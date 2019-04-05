// NOTE: "Shared" module - conventional name for an NgModule that houses components, directives, and pipes used everywhere in your app
//  *SEE: https://angular.io/guide/ngmodule-faq#sharedmodule
//  *CAUTION: be sure to import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// AngularMaterial - AVAILABLE COMPONENTS: https://material.angular.io/components/categories
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule
  ]
})
export class SharedModule { }
