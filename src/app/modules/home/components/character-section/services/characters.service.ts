import { Injectable } from '@angular/core';
import { MarvelApiService } from '../../../../../core/services/marvel-api/marvel-api.service'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {  

  constructor(private api:MarvelApiService) {

   }

   
   public getHeroList = (
    limit:number,
    offset:number
   ) => {       
       return this.api.getHeros(20,offset);
   }

   public getHeroByFirstFilter = (
    letter:string,
    offset:number
   ) => {       
       return this.api.getHerosByNameStart(letter,offset);
   }
   

}