import { Injectable } from '@angular/core';
import { MarvelApiService } from '../../../../../core/services/marvel-api/marvel-api.service'

@Injectable({
  providedIn: 'root'
})
export class ComicsService {  

  constructor(private api:MarvelApiService) {

   }

   
   public getComicList = (
    limit:number,
    offset:number
   ) => { 
       console.log("Enviando Peticion");
       return this.api.getComics(20,offset);
   }
   

}