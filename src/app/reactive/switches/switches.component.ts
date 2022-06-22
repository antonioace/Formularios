import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [true, [Validators.requiredTrue]],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };
  ngOnInit(): void {
    this.miFormulario.reset(this.persona);
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    if (this.miFormulario.invalid) {
      return;
    }
    console.log(formValue);
  }
}
