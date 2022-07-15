import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {APIResponse, Game} from "../../shared/models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BASE_URL;
  constructor(private http:HttpClient) { }

  getGames():Observable<APIResponse<Game>> {
    return this.http.get<APIResponse<Game>>(`${this.BaseUrl}/games`);
  }
  getGame(id:number):Observable<Game> {
    return this.http.get<Game>(`${this.BaseUrl}/games/${id}`);
  }
}
