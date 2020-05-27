import { Sugestao } from './../../models/sugestao.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  formLogin : FormGroup;
  sugestao:Sugestao;
  constructor( private formBuilder: FormBuilder) { 

    this.formLogin = formBuilder.group({
      nome: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      mensagem:['', Validators.compose([Validators.minLength(3), Validators.required])],
    });

    this.sugestao = new Sugestao();
  }
 

  ngOnInit(){

  }

  enviarSugestao(){
 this.sugestao.nome = this.formLogin.get('nome').value;
 this.sugestao.email = this.formLogin.get('email').value;
 this.sugestao.mensagem = this.formLogin.get('mensagem').value;
 console.log(this.sugestao);

 sessionStorage.setItem('sugestao', JSON.stringify(this.sugestao));

  }
  // fazerLogin(){
  //   // console.log(this.login);
  //   this.loginAuthService.verificarUsuario(this.formLogin).subscribe((data: string[] )=>{
  //     this.loginAuthService.fazerLogin(data);
  //   });
  // }
}
