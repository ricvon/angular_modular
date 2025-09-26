import { CategoriasModule } from './../categorias/categorias-module';
import { CategoriaComponent } from '../categorias/categoria/categoria.component';
import { Layout } from './layout/layout';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component:  Layout,
  children: [
    {
      path: 'categorias',
      loadChildren: () => import('../categorias/categorias-module').then(m=>m.CategoriasModule),
      pathMatch:'full',
      data: {titulo:'Categorias', subTitulo:'Realize o cadastro de novas categorias'}
    },
    {
      path: 'lugares',
      loadChildren: () => import('../lugares/lugares-module').then(m=>m.LugaresModule),
      pathMatch:'full',
      data: {titulo:'Lugares', subTitulo:'Realize o cadastro de novos lugares'}
    },
    {
      path: 'galeria',
      loadChildren: () => import('../galeria/galeria-module').then(m=>m.GaleriaModule),
      pathMatch:'full',
      data: {titulo:'Lista de indicação de lugares.', subTitulo:'Descobra os melhores lugares para visitar.'}
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
