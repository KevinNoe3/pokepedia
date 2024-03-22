import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{


  miFormulario: FormGroup;
  
  correoIngresado!: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.miFormulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@utcv\.edu\.mx$/)]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    })
   }

  submitForm() {
    if (this.miFormulario.valid) {
      console.log('Formulario valido', this.miFormulario.value)
    } else {
      console.log('Formulario invalido')
    }
  }

  get email() {
    return this.miFormulario.get('email');
  }

  get password() {
    return this.miFormulario.get('password');
  }

  navigateToWelcome() {
    this.router.navigate(['/home', { email: this.correoIngresado }]);
  }
  

}
