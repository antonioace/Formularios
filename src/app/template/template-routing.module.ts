import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const ruta:Routes=[

  {path:'',
children:[{

  path:'basicos',
component:BasicosComponent,

},
{

  path:'dinamicos',
  component:DinamicosComponent
},
{
  path:'switches',
  component:SwitchesComponent
},
{path:'**',
redirectTo:'basicos'}
]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(ruta),
  ],
  exports:[RouterModule]
})
export class TemplateRoutingModule { }
