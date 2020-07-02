import { Component, OnInit } from '@angular/core';
import {CharactersService} from './services/characters.service';
@Component({
  selector: 'app-character-section',
  templateUrl: './character-section.component.html',
  styleUrls: ['./character-section.component.scss']
})
export class CharacterSectionComponent implements OnInit {
  listHero = [];
  constructor(private characterService:CharactersService) { }

  ngOnInit(): void {
    this.characterService.getHeroList().subscribe(
      (data) => {
        let heroList:any = data;
        console.log(heroList.data);
        this.listHero = heroList.data.results;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
