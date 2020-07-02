import { Component, OnInit, Input } from '@angular/core';


interface I_hero {
  id:string;
  name:string;
  description:string;
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
  constructor() { }

  ngOnInit(): void {
    switch (this.typeItem) {
      case 'characters':{
        this.heroInfo = {
          id:this.attributes.id,
          name:this.attributes.name,
          description:this.attributes.description,
          urlDetails:this.attributes.urls[0].url,
          image:this.attributes.thumbnail.path+'.'+this.attributes.thumbnail.extension
        }
        break;
      } 
      case 'series':{
        break;
      } 
      case 'comics':{
        break;
      }
      case 'creators':{
        break;
      }                 
    
      default:
        break;
    }
  }

}
