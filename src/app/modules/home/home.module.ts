import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { NewSectionComponent } from './components/new-section/new-section.component';
import { CharacterSectionComponent } from './components/character-section/character-section.component';
import { ComicsSectionComponent } from './components/comics-section/comics-section.component';
import { CreatorSectionComponent } from './components/creator-section/creator-section.component';
import { SeriesSectionComponent } from './components/series-section/series-section.component';


@NgModule({
  declarations: [HomeComponent,NewSectionComponent, CharacterSectionComponent, ComicsSectionComponent, CreatorSectionComponent, SeriesSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
