import { Injectable } from '@angular/core';
import { MarvelApiService } from '../../../../../core/services/marvel-api/marvel-api.service'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {  

  constructor(private api:MarvelApiService) {

   }

   
   public getSeriesList = (
    limit:number,
    offset:number
   ) => { 
       console.log("Enviando Peticion");
       return this.api.getSeries(20,offset);
   }
   

}