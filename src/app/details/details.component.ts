import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../core/services/http.service";
import {Observable} from "rxjs";
import {Game} from "../shared/models";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  gameId!:number;
  game$!:Observable<Game>;



  constructor(private router:ActivatedRoute,private http:HttpService) { }

  ngOnInit(): void {
    this.gameId = this.router.snapshot.params['id'];
    this.game$=this.http.getGame(this.gameId);


  }

  getColor(rating:number):string{
    if(rating>=8){
      return 'green';
    }
    else if(rating>=6){
      return 'orange';
    }
    else{
      return 'red';
    }
  }


}
