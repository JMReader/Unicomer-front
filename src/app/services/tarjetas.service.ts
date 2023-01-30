import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {
  url: string = 'http://localhost:3000/'
  constructor(private _http: HttpClient,) { }


  public getTarjetas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-control-allow-origin': 'http://localhost:4200/',
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({

      }),
    };
    var urla = this.url + 'tarjetas/user/'+sessionStorage.getItem("_id");
    return this._http.get(urla, httpOptions);
  }

  public getTransacciones(): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'access-control-allow-origin': 'http://localhost:4200/',
        'Content-Type': 'application/json',
      }),
      params: ({
      }),
    };
    var urlb = this.url + 'transacciones/user/ultimasemana?b='+sessionStorage.getItem("_id");
    return this._http.get(urlb, httpOptions);
  }
}
