import { Lugar } from './lugar/lugar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
    constructor(private http: HttpClient){ }

      salvar(lugar: Lugar) : Observable<Lugar>{
        return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
      }

  ObterTodos():Observable<Lugar[]>{
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }
}
