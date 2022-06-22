import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }



  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)],],
    favoritos: this.fb.array([['MegaDeth'], ['Fiesta Pagana'], ['Iron']], [Validators.required])

  })


  get FavoritosArr() {


    return this.miFormulario.get('favoritos') as FormArray
  }
  validarNombre() {

    return this.miFormulario.controls['nombre'].errors && this.miFormulario.controls['nombre'].touched
  }


  guardar() {


    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log('Esta entrando por aca')

  }


  ngOnInit(): void {
  }


}
