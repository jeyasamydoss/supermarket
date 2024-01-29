import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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

public getid(path:any):Observable<any>{
  return this.http.get<any>(this.baseUrl+path);
}

public put(path:any,data:any):Observable<any>{
  return this.http.put<any>(this.baseUrl+path,data);
}
public delete(path:any):Observable<any>{
  return this.http.delete<any>(this.baseUrl+path);
}

public postWithBody(path: any, data: any): Observable<any> {
  return this.http.post<any>(this.baseUrl + path, data);
}
// private cartUpdatedSource = new EventEmitter<void>();
//   cartUpdated$ = this.cartUpdatedSource.asObservable();
//   cartItemCount: number = 0
// notifyCartUpdate() {
//   this.cartItemCount++; // Increment the cart item count
//   this.cartUpdatedSource.emit();
// }


}
