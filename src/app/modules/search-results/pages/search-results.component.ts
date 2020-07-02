import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() typeOfSearch:string;
  @Input() searchData:any;
  @Input() listItems = [];
  constructor() { }

  ngOnInit(): void {
  }

}
