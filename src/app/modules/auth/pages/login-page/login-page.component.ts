import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});

  constructor(){}

  ngOnInit(): void {
      this.formLogin = new FormGroup(
        {
          email: new FormControl('',[
            Validators.required, //Debe existir
            Validators.email //Tipo email
          ]),
          password: new FormControl('',[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      });
  }

  sendLogin(): void{
    const body = this.formLogin.value
    //TODO: Realizar envio de datos
  }
}