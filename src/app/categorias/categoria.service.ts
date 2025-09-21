import { Categoria } from './categoria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient){ }

  salvar(Categoria: Categoria) : Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:3000/categorias',Categoria);
  }

  ObterTodas():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:3000/categorias');
  }
}
