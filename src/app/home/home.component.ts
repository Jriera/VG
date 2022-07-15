import { Component, OnInit } from '@angular/core';
import {HttpService} from "../core/services/http.service";
import {map, Observable} from "rxjs";
import {Game} from "../shared/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games$!:Observable<Game[]>

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.games$= this.http.getGames().pipe(
      map(response=>response.results)
    );
  }

}
