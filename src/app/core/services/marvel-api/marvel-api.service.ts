import { Injectable } from '@angular/core';

import {ApikeyModels} from './models/credentials.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';

const credentials:ApikeyModels = {
  "public-key":"cde345ddfa71a216ab099ba6dfb9322a",
  "private-key":"c0134092824af080f4e568993988ee32a256cc32"
}

const URL = {
  "URL_CHARACTERS":"https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=",
  "URL_COMICS":"https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=",
  "URL_CREATORS":"https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=",
  "URL_SERIES":"https://gateway.marvel.com:443/v1/public/series?ts=1&apikey="
}

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {  
  hash:string;
  constructor(private http: HttpClient) {
    let md5 = new Md5();
    md5.appendStr('1'+credentials['private-key']+credentials['public-key']);
    this.hash = ''+md5.end();
    console.log(this.hash);
   }

  public getHeros = ()=>{
    console.log(this.hash);
    let request = URL["URL_CHARACTERS"]+credentials['public-key']+'&hash='+this.hash;
    return this.http.get(request);
  }

  public getComics = ()=>{
    console.log(this.hash);
    let request = URL["URL_COMICS"]+credentials['public-key']+'&hash='+this.hash;
    return this.http.get(request);
  }

  public getCreators = ()=>{
    console.log(this.hash);
    let request = URL["URL_CREATORS"]+credentials['public-key']+'&hash='+this.hash;
    return this.http.get(request);
  }

  public getSeries = ()=>{
    console.log(this.hash);
    let request = URL["URL_SERIES"]+credentials['public-key']+'&hash='+this.hash;
    return this.http.get(request);
  }
}