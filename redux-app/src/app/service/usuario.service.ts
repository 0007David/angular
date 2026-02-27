import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApi: string = 'https://gorest.co.in/public/v2/users';
  tokenApi: string = '4538c9805ddc7514712eadbb7f0f78c36185983f06bcf05285bb5174ca2af389';
  page: number = 0;
  perPage: number = 20;

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenApi}` } );
    return this.http.get(
      `${this.urlApi}?page=${this.page}&per_page=${this.perPage}`,
      { headers }
    );
  }

  public getUsuario(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenApi}` } );
    return this.http.get(`${this.urlApi}/${id}`,
      { headers }
    );
  }
}
