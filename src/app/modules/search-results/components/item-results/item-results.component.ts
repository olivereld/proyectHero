import { Component, OnInit, Input } from '@angular/core';


interface I_hero {
  id:string;
  name:string;
  description:string;
  comics:number;
  series:number;
  urlDetails:string;
  image:string;
}



@Component({
  selector: 'app-item-results',
  templateUrl: './item-results.component.html',
  styleUrls: ['./item-results.component.scss']
})
export class ItemResultsComponent implements OnInit {
  @Input() typeItem:any;
  @Input() attributes:any;

  heroInfo:I_hero;
  comicInfo;
  seriesInfo;
  creatorInfo;
  constructor() { }

  ngOnInit(): void {
    switch (this.typeItem) {
      case 'characters':{
        this.heroInfo = {
          id:this.attributes.id,
          name:this.attributes.name,
          comics: this.attributes.comics.items.length,
          series: this.attributes.series.items.length,
          description:this.attributes.description,
          urlDetails:this.attributes.urls[0].url,
          image:this.attributes.thumbnail.path+'.'+this.attributes.thumbnail.extension
        }
        break;
      } 
      case 'series':{
        this.seriesInfo = {
          id:this.attributes.id,
          name:this.attributes.title,
          image:this.attributes.thumbnail.path+'.'+this.attributes.thumbnail.extension
        }
        break;
      } 
      case 'comics':{
        this.comicInfo = {
          id:this.attributes.id,
          name:this.attributes.title,
          image:this.attributes.thumbnail.path+'.'+this.attributes.thumbnail.extension
        }
        break;
      }
      case 'creators':{
        this.creatorInfo = {
          id:this.attributes.id,
          name:this.attributes.firstName + ' ' + this.attributes.lastName,
          image:this.attributes.thumbnail.path+'.'+this.attributes.thumbnail.extension
        }
        break;
      }                 
    
      default:
        break;
    }
  }

}
