import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results.component';
import { ItemResultsComponent } from './components/item-results/item-results.component';



@NgModule({
  declarations: [SearchResultsComponent, ItemResultsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SearchResultsComponent
  ]
})
export class SearchResultsModule { }
