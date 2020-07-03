import { Component, OnInit } from '@angular/core';
import {CharactersService} from './services/characters.service';
@Component({
  selector: 'app-character-section',
  templateUrl: './character-section.component.html',
  styleUrls: ['./character-section.component.scss']
})
export class CharacterSectionComponent implements OnInit {
  listHero = [];  
  actualOffset = 0;
  limitItems = 0;

  constructor(private characterService:CharactersService) { }

  ngOnInit(): void {
    this.characterService.getHeroList(20,this.actualOffset).subscribe(
      (data) => {
        let heroList:any = data;
        this.limitItems = heroList.data.total;
        console.log(heroList);
        this.listHero = heroList.data.results;
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
      this.characterService.getHeroList(20,this.actualOffset).subscribe(
        (data) => {
          let heroList:any = data;        
          this.listHero = heroList.data.results;
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
      this.characterService.getHeroList(20,this.actualOffset).subscribe(
        (data) => {
          let heroList:any = data;        
          this.listHero = heroList.data.results;
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
