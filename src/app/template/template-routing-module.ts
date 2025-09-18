import { CategoriasModule } from './../categorias/categorias-module';
import { Categoria } from './../categorias/categoria/categoria';
import { Layout } from './layout/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component:  Layout,
  children: [{
      path: 'categorias',
      loadChildren: () => import('../categorias/categorias-module').then(m=>m.CategoriasModule)
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
