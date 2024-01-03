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

public post(path:any,data:any):Observable<any>{
  return this.http.post<any>(this.baseUrl+path,data);
}

public put(path:any,data:any):Observable<any>{
  return this.http.put<any>(this.baseUrl+path,data);
}


}
