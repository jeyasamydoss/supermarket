import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

baseUrl ="http://localhost:8080/"

public get(path:any):Observable<any>{
  return this.http.get<any>(this.baseUrl+path);
}

}
