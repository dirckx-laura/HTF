import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.post<string>(this.apiURL + "start/0", {'diffculty': levelNumber},  { headers, responseType: 'text' as 'json'});
  }

  public getCode(gameId: string){
    return this.http.get(this.apiURL + gameId  + "/code");
  }
}
