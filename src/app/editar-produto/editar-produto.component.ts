import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editar-produto",
  templateUrl: "./editar-produto.component.html",
  styleUrls: ["./editar-produto.component.css"],
})
export class EditarProdutoComponent implements OnInit {
 
  sort: any;
  formProduto:FormGroup;
  lista:any[] = [];
  produto:any;
  prod:any;
  sessionStorage: any;
 
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private _location: Location) {

    this.formProduto = formBuilder.group({
      cod: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      descricao: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      regAnvisa: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      preco: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      qtd: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      categoria: ['', Validators.compose([Validators.minLength(1), Validators.required])],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log("params",params);
      this.sort = params["propertyName"];
    });

    this.lista = JSON.parse(window.sessionStorage.getItem('listProdutos'));
    console.log(this.lista);
  
    this.getProdutos();
  }

  getProdutos(){
  
    this.produto = this.lista[0];
      if(this.produto.cod == this.sort){
        this.lista.pop();
        this.prod = this.produto;
      }
  }
  enviar(){
    this.lista.push(this.produto)
    sessionStorage.setItem('listProdutos', JSON.stringify(this.lista));
    window.alert("Produto Alterado com Sucesso!");
  }

}
