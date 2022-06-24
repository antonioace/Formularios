import { Component, OnInit } from '@angular/core';
import { EmailValidateService } from '../../../shared/validaciones/email-validate.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private emailService: EmailValidateService) { }


  get emailError(): string {


    if (this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched) {
      return 'El email debe ser ingresado'
    } else if (this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched) {
      return 'El email debe tener el formato adecuado'
    } else if (this.miFormulario.get('email')?.errors?.['emailRepetido'] && this.miFormulario.get('email')?.touched) {
      return 'El email esta repetido'
    }

    return ''

  }

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
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)], [this.emailService]],
    username: ['', [Validators.required, this.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
    /*     email: ['', [Validators.required]],
    codigo: ['', [Validators.required]],
    contrasenia: ['', [Validators.required]], */
  },

    {

      validators: [this.camposIguales('password', 'password2')]

    });



  ngOnInit(): void { }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  noPuedeSerStrider(control: FormControl) {
    const valor = control.value?.trim().toLowerCase();
    if (valor == 'strider') {
      return { noStrider: true }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {


      const pass1 = formGroup.get(campo1)?.value
      const pass2 = formGroup.get(campo2)?.value
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }
      formGroup.get(campo2)?.setErrors(null)
      return null
    }
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  /*   emailRequired() {
  
  
      return this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched
  
  
    }
    emailFormato() {
  
      return this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched
  
    }
  
  
    emailTomado() {
  
      return this.miFormulario.get('email')?.errors?.['emailRepetido'] && this.miFormulario.get('email')?.touched
    } */
}
