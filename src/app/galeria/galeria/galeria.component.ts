import { LugarService } from './../../lugares/lugar.service';
import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';


@Component({
  selector: 'app-galeria.component',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{
  lugares: Lugar[]=[];
  categoriasFiltro: Categoria[]=[];
  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ){}

  ngOnInit(): void {
    this.categoriaService.ObterTodas()
    .subscribe(categorias => this.categoriasFiltro=categorias);

    this.lugarService.ObterTodos()
    .subscribe(lugaresResposta => this.lugares=lugaresResposta)
  }

  getTotalEstrelas(lugar:Lugar):string{
    return '&#9733;'.repeat(lugar.avaliacao||0)+'&#9734;'.repeat(5 - (lugar.avaliacao||0));
  }
}
