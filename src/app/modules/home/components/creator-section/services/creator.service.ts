import { Injectable } from '@angular/core';
import { MarvelApiService } from '../../../../../core/services/marvel-api/marvel-api.service'

@Injectable({
  providedIn: 'root'
})
export class CreatorService {  

  constructor(private api:MarvelApiService) {

   }
   public getCreatorList = (
    limit:number,
    offset:number
   ) => { 
       console.log("Enviando Peticion");
       return this.api.getCreators(20,offset);
   }
   

}