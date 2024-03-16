import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredenrials(email:string, password:string): void{
    console.log('hola que tal->',email, password);
  }
}
