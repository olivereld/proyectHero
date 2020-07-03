import { Component, OnInit } from '@angular/core';
import { ComicsService } from './services/comics.service';

@Component({
  selector: 'app-comics-section',
  templateUrl: './comics-section.component.html',
  styleUrls: ['./comics-section.component.scss']
})
export class ComicsSectionComponent implements OnInit {
  listComic = [];  
  actualOffset = 0;
  limitItems = 0;
  constructor(private comicService:ComicsService) { }

  ngOnInit(): void {
    this.comicService.getComicList(20,this.actualOffset).subscribe(
      (data) => {
        let comicList:any = data;
        this.limitItems = comicList.data.total;
        console.log(comicList);
        this.listComic = comicList.data.results;
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
      this.comicService.getComicList(20,this.actualOffset).subscribe(
        (data) => {
          let comicList:any = data;        
          this.listComic = comicList.data.results;
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
      this.comicService.getComicList(20,this.actualOffset).subscribe(
        (data) => {
          let comicList:any = data;        
          console.log('teniendo data')
          this.listComic = comicList.data.results;
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
