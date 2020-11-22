import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plants } from './plants';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http:HttpClient) { }

  url: string = "https://data.sfgov.org/resource/vmnk-skih.json";
  getPlants(){
    return this.http.get<Plants[]>(this.url);
  }
}
