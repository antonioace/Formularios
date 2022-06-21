import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Persona{


  nombre:string;

  favoritos:Favorito[];

}


interface Favorito{

id:number;
nombre:string;

}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


juego:string=''
  persona:Persona={

    nombre:'Victor',
    favoritos:[

      {

        id:1,
        nombre:'Metal Gear'
      }
      ,

      
      {

        id:2,
        nombre:'Megadeth'
      }


    ]
  }

  constructor() { }
@ViewChild('miFormulario')miFormulario!:NgForm


  ngOnInit(): void {
  }
guardar(){


  console.log('Formulario Posteado')
}

nombreValido(){
return this.miFormulario?.controls['nombre']?.touched && this.miFormulario?.controls['nombre']?.invalid


}


eliminar(indice:number){
  this.persona.favoritos.splice(indice,1)
}



agregarJuego(){

  const nuevoJuego:Favorito={

    id:this.persona.favoritos.length+1,
    nombre:this.juego
  }

  this.persona.favoritos.push({...nuevoJuego})
  this.juego=''
}


}
