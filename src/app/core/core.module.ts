import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from '../modules/home/home.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    HomeModule,
    CommonModule
  ],
  exports:[HomeModule,NavbarComponent]
})
export class CoreModule { }
