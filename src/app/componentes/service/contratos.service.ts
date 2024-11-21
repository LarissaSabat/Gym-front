import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  private apiUrl = 'http://localhost:3000/api/contratos'; //olhar depois qual é a url do backend
  constructor(private http: HttpClient) { }

  criarContrato(contrato: any): Observable<any> {
    
    return this.http.post(this.apiUrl, contrato);
  }
}
