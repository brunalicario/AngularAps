import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { ContatosComponent } from "./components/contatos/contatos.component";
import { NovoProdutoComponent } from "./components/novo-produto/novo-produto.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'lista-de-produtos', component: ListaDeProdutosComponent },
  { path: 'editar-produto', component: EditarProdutoComponent },
  { path: 'novo-produto', component: NovoProdutoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
