import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() typeOfSearch:string;
  @Input() searchData:any;
  @Input() listItems = [];
  @Input() offset = 0;
  @Input() limit = 0;
  @Output() paginate = new EventEmitter<any>();
  @Output() goIndex = new EventEmitter<any>();
  
  listOfPositions = [];
  listVisiblePositions = [];
  actualIndex = 1;
  min = 2;
  max = 10;

  constructor() { }

  ngOnInit(): void {
    this.calculateNumbers();
  }

  calculateNumbers(){
    let totalIndex = Math.round(this.limit/20);
    let itemsSobrantes = (this.limit-(totalIndex*20));
    if(itemsSobrantes > 0){
      totalIndex += 1;
    }
    console.log(totalIndex);
    for (let index = 2; index <= totalIndex; index++) {
      this.listOfPositions.push(index);      
    }
    this.showPositions(this.min,this.max);
    console.log(this.min,this.max);
  }
  rotateIndex(){
    if(this.actualIndex <= this.min+3 && this.max >= 10){
      //<---
      this.min = this.actualIndex-4;
      this.max = this.actualIndex+4;
      if(this.max < 10){
        this.min = 2;
        this.max = 10;
        this.showPositions(2,10);
      }else{
        this.showPositions(this.min,this.max);
      }
     
    }else if( this.actualIndex >= this.max-3){
      this.min = this.actualIndex-4;
      this.max = this.actualIndex+4;
      if(this.max > (this.listOfPositions.length+1)-4){
        this.min = (this.listOfPositions.length+1) -8;
        this.max = (this.listOfPositions.length+1) -1;
        this.showPositions(2,10);
      }else{
        this.showPositions(this.min,this.max);
      }
      console.log(this.min,this.max);
      this.showPositions(this.min,this.max);
    }
  }
  showPositions(min:number,max:number){
    this.listVisiblePositions = [];
    for (let index = min; index <= max; index++) {
      console.log(index);
      this.listVisiblePositions.push(min);
      min++;      
    }    
  }
  nextPage(){
    if(this.actualIndex <= this.listVisiblePositions.length){
      this.actualIndex +=1;
      this.paginate.emit(20);
      this.rotateIndex();
    }
    
  }
  previousPage(){
    if(this.actualIndex >= 1){
      this.actualIndex -=1;
      this.paginate.emit(-20);
      this.rotateIndex();
    }
    
  }

  searchPerNumber(value:number){
    console.log((value-1)*20,'offset');
    this.goIndex.emit((value-1)*20);
    this.actualIndex = value;
    this.rotateIndex();
  }

  

}
