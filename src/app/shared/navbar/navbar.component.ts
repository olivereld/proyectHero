import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelApiService} from '../../core/services/marvel-api/marvel-api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private api:MarvelApiService
  ) { }

  ngOnInit(): void {
    //this.api.getHeros()
    //.subscribe(
    //  (data) =>{
    //    console.log(data);
    //  },
    //  (error) =>{
    //    console.log(error);
    //  }
    //)
  }

  navigate(route:string){
    this.router.navigate([route]);
  }
}
