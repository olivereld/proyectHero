import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

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
  @Output() abecedaryResult = new EventEmitter<any>();
  
  listOfPositions = [];
  listVisiblePositions = [];
  abecedary = [];
  actualIndex = 1;
  actualLetter = '';
  min = 2;
  max = 10;

  constructor() { }

  ngOnInit(): void {    
    this.abecedary = this.generateAbecedary();
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.limit){
      this.min = 2;
      this.max = 10;
      this.calculateNumbers();
    }
    // changes.prop contains the old and the new value...
  }

  generateAbecedary(){
    let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    return alphabet;
  }

  calculateNumbers(){
    let totalIndex = Math.round(this.limit/20);
    let itemsSobrantes = (this.limit-(totalIndex*20));
    this.listOfPositions = [];
    if(itemsSobrantes > 0){
      totalIndex += 1;
    }
    console.log(totalIndex);

    if(totalIndex <= this.max){
      for (let index = 2; index <= totalIndex; index++) {
        this.listOfPositions.push(index);      
      }
      if(this.listOfPositions.length+1 === this.max){
        this.max = totalIndex-1;
      }else{
        this.max = totalIndex;
      }
      
      this.showPositions(this.min,this.max);
    }else{
      for (let index = 2; index <= totalIndex; index++) {
        this.listOfPositions.push(index);      
      }
      this.showPositions(this.min,this.max);
    }
    
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
     
    }else if( this.actualIndex >= this.max-3 && this.min+4 === this.max-4 && this.max < this.listOfPositions.length){
      this.min = this.actualIndex-4;
      this.max = this.actualIndex+4;
      if(this.max > (this.listOfPositions.length+1)-4){
        this.min = (this.listOfPositions.length+1) -8;
        this.max = (this.listOfPositions.length+1) -1;
        this.showPositions(2,10);
      }else{
        this.showPositions(this.min,this.max);
      }     
      this.showPositions(this.min,this.max);
    }
  }
  showPositions(min:number,max:number){
    this.listVisiblePositions = [];
    for (let index = min; index <= max; index++) {      
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
    if(this.actualLetter === ''){
      this.goIndex.emit((value-1)*20);
      this.actualIndex = value;
      this.rotateIndex();
    }else{
      this.abecedaryResult.emit({
        letter:this.actualLetter,
        page:((value-1)*20)        
      });
      this.actualIndex = value;
      this.rotateIndex();
    }    
  }

  findForLetter(letter:string){
    if(this.actualLetter != letter){
      this.actualLetter = letter;
      this.abecedaryResult.emit({
        letter,
        page:0
      });
    }else{
      this.actualLetter = '';      
      this.goIndex.emit(0);
    }
  }

  

}
