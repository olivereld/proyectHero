import { Injectable } from '@angular/core';
import { MarvelApiService } from '../../../../../core/services/marvel-api/marvel-api.service'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {  

  constructor(private api:MarvelApiService) {

   }

   
   public getHeroList = () => {       
       return this.api.getHeros();
   }
   

}