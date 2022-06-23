import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  minutos: number = 0;
  segundos: number = 0;
  horas: number = 0;

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noPuedeSerStrider]],
    /*     email: ['', [Validators.required]],
    codigo: ['', [Validators.required]],
    contrasenia: ['', [Validators.required]], */
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  noPuedeSerStrider(control: FormControl) {
    const valor = control.value;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
