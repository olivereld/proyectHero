import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from '../modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    HomeModule,
    CommonModule,
    HttpClientModule
  ],
  exports:[HomeModule,NavbarComponent]
})
export class CoreModule { }
