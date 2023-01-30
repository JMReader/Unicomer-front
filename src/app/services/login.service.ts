import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostBase: string;
  constructor(private _http: HttpClient) {
    this.hostBase = "http://localhost:3000/user/";
  }
  public login(dni: string, password: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'access-control-allow-origin': 'http://localhost:4200',
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({ dni: dni, clave: password});
    console.log(body);
    return this._http.post(this.hostBase + 'login', body, httpOption);
  }


  public obtenerMenu(): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'access-control-allow-origin': 'http://localhost:4200',
        'Content-Type': 'application/json'
      })
    }   
    return this._http.get("http://localhost:3000/menu/completo", httpOption);
  }
  public userLogged() {
    console.log("usuario");
    var usuario = sessionStorage.getItem("username");
    console.log("usuario");
    return usuario;
  }
}
