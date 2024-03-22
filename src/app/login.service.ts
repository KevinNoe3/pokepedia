import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logeago: boolean = false;

  constructor() { }

  iniciarSesion(email: String, contrasena: String) {

    if(email == 'admin' && contrasena == 'admin') {
      this.logeago = true;
    }
    else{
      //this.token
    }
  } 

  cerrarSesion() {
    
  }


}
