import { Component, OnInit, Input } from "@angular/core";
import { Produtos } from "src/app/models/produtos.model";
import { Grupo } from "src/app/models/grupo.model";
import { EditarProdutoComponent } from 'src/app/editar-produto/editar-produto.component';

@Component({
  selector: "app-lista-de-produtos",
  templateUrl: "./lista-de-produtos.component.html",
  styleUrls: ["./lista-de-produtos.component.css"]
})
export class ListaDeProdutosComponent implements OnInit {
  @Input() grupoAtivo: Grupo;
  public produtos: Produtos[] = [];
  public produtosExibidos: Produtos[] = [];
  lista:string[] = [];

  constructor() {

  }

  ngOnInit(){
   this.lista = JSON.parse(window.sessionStorage.getItem('listProdutos'));
   console.log(this.lista);
  }


  deleteLista(prod:any){
    this.lista.forEach((prd)=> {
      if(prd == prod){
        this.lista.pop();
        sessionStorage.setItem('listProdutos', JSON.stringify(this.lista));
      }
    });
  }

}
