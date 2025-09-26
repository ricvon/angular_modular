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
      pathMatch:'full'
    },
    {
      path: 'lugares',
      loadChildren: () => import('../lugares/lugares-module').then(m=>m.LugaresModule),
      pathMatch:'full'
    },
    {
      path: 'galeria',
      loadChildren: () => import('../galeria/galeria-module').then(m=>m.GaleriaModule),
      pathMatch:'full'
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
