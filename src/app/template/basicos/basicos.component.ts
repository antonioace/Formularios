import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {


  @ViewChild ('miFormulario') miFormulario!:NgForm

initForm={


  producto:'RTX 4080t1',
  precio:10,
  existencias:10
}
  constructor() { }

  guardar(){
console.log(this.miFormulario)
this.miFormulario.resetForm({
  producto:'algo',
  precio:0,
  existencias:0
})

  }


  nombeValido():boolean{
   return this.miFormulario?.controls['producto']?.invalid &&  this.miFormulario?.controls['producto']?.touched


  }


  cantidadValida():boolean{

    return this.miFormulario?.controls['precio']?.value<0 &&  this.miFormulario?.controls['precio']?.touched

  }



  }



  


