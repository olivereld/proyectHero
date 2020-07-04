import { Component, OnInit } from '@angular/core';
import { CreatorService } from './services/creator.service';

@Component({
  selector: 'app-creator-section',
  templateUrl: './creator-section.component.html',
  styleUrls: ['./creator-section.component.scss']
})
export class CreatorSectionComponent implements OnInit {
  listCreator = [];
  actualOffset = 0;
  limitItems = 0;

  constructor(private creatorService:CreatorService) { }

  ngOnInit(): void {
    this.creatorService.getCreatorList(20,this.actualOffset).subscribe(
      (data) => {
        let creatorList:any = data;
        this.limitItems = creatorList.data.total;
        console.log(creatorList);
        this.listCreator = creatorList.data.results;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  nextPage(plusPage:number){
    this.actualOffset += plusPage;
    console.log(this.actualOffset)
    if( this.actualOffset <= this.limitItems && this.actualOffset >= 0){
      this.creatorService.getCreatorList(20,this.actualOffset).subscribe(
        (data) => {
          let creatorList:any = data;        
          this.listCreator = creatorList.data.results;
        },
        (err) => {
          console.log(err);
        }
      );
    }else if(this.actualOffset < 0 ){
      this.actualOffset = 0;
      console.log(this.actualOffset);
    }else{
      console.log(this.actualOffset);
    }    
  }

  setOffset(page){
    this.actualOffset = page;
    if( this.actualOffset <= this.limitItems && this.actualOffset >= 0){
      this.creatorService.getCreatorList(20,this.actualOffset).subscribe(
        (data) => {
          let creatorList:any = data;        
          console.log('teniendo data')
          this.listCreator = creatorList.data.results;
        },
        (err) => {
          console.log(err);
        }
      );
    }else if(this.actualOffset < 0 ){
      this.actualOffset = 0;
      console.log(this.actualOffset);
    }else{
      console.log(this.actualOffset);
    }    
  }


}
