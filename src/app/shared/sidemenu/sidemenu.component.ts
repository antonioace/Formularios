import { Component, OnInit } from '@angular/core';


interface MenuItem {

  texto: string;
  ruta: string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
  
  li:hover{

cursor:pointer;
  }
  
  
  `
  ]
})
export class SidemenuComponent implements OnInit {


  templateMenu: MenuItem[] = [{
    texto: 'Básicos',
    ruta: './template/basicos'


  },


  {
    texto: 'Dinámicos',
    ruta: './template/dinamicos'


  }

    ,

  {
    texto: 'Switches',
    ruta: './template/switches'


  }]

  reactiveMenu: MenuItem[] = [{
    texto: 'Básicos',
    ruta: './reactive/basicos'


  },


  {
    texto: 'Dinámicos',
    ruta: './reactive/dinamicos'


  }

    ,

  {
    texto: 'Switches',
    ruta: './reactive/switches'


  }]



  constructor() { }

  ngOnInit(): void {
  }

}
