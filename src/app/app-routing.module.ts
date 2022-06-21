import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [


  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m =>  m.ReactiveModule )
  },

  {
    path: 'template',

    loadChildren: () => import('./template/template.module').then(m =>  m.TemplateModule )
  },
  {

    path:'**',
    redirectTo:'reactive'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(rutas)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
