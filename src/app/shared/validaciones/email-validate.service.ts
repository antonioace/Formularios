import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailValidateService implements AsyncValidator {

  constructor(private http: HttpClient) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const valor = control.value
    console.log(valor)
    return this.http.get<any[]>(`http://localhost:3000/usuarios?&q=${valor}`).pipe(
      delay(3000),

      map(res => {
        return res.length > 0 ? { emailRepetido: true } : null
      })
    )
  }
}
