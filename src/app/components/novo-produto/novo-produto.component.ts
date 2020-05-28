import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Produtos } from "src/app/models/produtos.model";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-novo-produto",
  templateUrl: "./novo-produto.component.html",
  styleUrls: ["./novo-produto.component.css"]
})
export class NovoProdutoComponent implements OnInit {
  public lista: any[] = [];

  formProduto: FormGroup;
  produto: Produtos;
  listProdutos:Produtos[];


  constructor(public formBuilder: FormBuilder) {

    this.formProduto = formBuilder.group({
      cod: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      desc: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      regAnvisa: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      preco: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      qtd: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      categoria: ['', Validators.compose([Validators.minLength(1), Validators.required])],
    });
    this.produto = new Produtos();
    this.listProdutos = new Array<Produtos>();
  
  }

  ngOnInit() {
  }

  enviarProduto() {
    this.produto.cod = this.formProduto.get('cod').value;
    this.produto.descricao = this.formProduto.get('desc').value;
    this.produto.preco = this.formProduto.get('preco').value;
    this.produto.qtd = this.formProduto.get('qtd').value;
    this.produto.categoria = this.formProduto.get('categoria').value;
    this.produto.regAnvisa = this.formProduto.get('regAnvisa').value;

    this.listProdutos.push(this.produto)
    console.log(this.listProdutos);
    
    this.produto = new Produtos();
    
    window.alert("Produto Adicionado!");

  }

  enviar(){
    sessionStorage.setItem('listProdutos', JSON.stringify(this.listProdutos));

    window.alert("Produto Cadastrado com Sucesso!");
  }
}
