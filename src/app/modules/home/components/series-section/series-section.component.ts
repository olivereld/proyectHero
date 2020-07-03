import { Component, OnInit } from '@angular/core';
import { SeriesService } from './services/series.service';

@Component({
  selector: 'app-series-section',
  templateUrl: './series-section.component.html',
  styleUrls: ['./series-section.component.scss']
})
export class SeriesSectionComponent implements OnInit {
  listSeries = [];  
  actualOffset = 0;
  limitItems = 0;
  constructor(private seriesServices:SeriesService) { }

  ngOnInit(): void {
    this.seriesServices.getSeriesList(20,this.actualOffset).subscribe(
      (data) => {
        let seriesList:any = data;
        this.limitItems = seriesList.data.total;
        console.log(seriesList);
        this.listSeries = seriesList.data.results;
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
      this.seriesServices.getSeriesList(20,this.actualOffset).subscribe(
        (data) => {
          let seriesList:any = data;        
          this.listSeries = seriesList.data.results;
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
      this.seriesServices.getSeriesList(20,this.actualOffset).subscribe(
        (data) => {
          let seriesList:any = data;        
          console.log('teniendo data')
          this.listSeries = seriesList.data.results;
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
