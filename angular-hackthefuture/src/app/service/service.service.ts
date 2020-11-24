import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private apiURL: string;



  constructor(private http: HttpClient) {

    this.apiURL = 'https://hackthefuture.dev.freebility.be/fellowship/'
  
  }

  public startLevel(levelNumber : number){
    return this.http.put<any>(this.apiURL + "start/0", {diffculty : levelNumber});
  }
}
