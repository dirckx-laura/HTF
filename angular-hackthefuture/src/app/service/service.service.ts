import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private apiURL: string;

  //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');



  constructor(private http: HttpClient) {

    this.apiURL = 'https://hackthefuture.dev.freebility.be/fellowship/'
  
  }

  public startLevel(levelNumber : number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.apiURL + "start/0", {'diffculty': levelNumber},  { headers, responseType: 'text'});


  }

  public getCode(gameId: string){
    
    return this.http.get(this.apiURL + gameId  + "/code");
  }

  public getState(gameId: string){
    return this.http.get(this.apiURL + gameId + "/state")
  }


}
