import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home.component';
import {CharacterSectionComponent} from './components/character-section/character-section.component';
import { ComicsSectionComponent } from './components/comics-section/comics-section.component';
import { CreatorSectionComponent } from './components/creator-section/creator-section.component';
import { SeriesSectionComponent } from './components/series-section/series-section.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'characters', component: CharacterSectionComponent },
    { path: 'comics', component: ComicsSectionComponent },
    { path: 'creator', component: CreatorSectionComponent },
    { path: 'series', component: SeriesSectionComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }