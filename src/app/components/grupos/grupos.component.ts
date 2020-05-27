import { Component, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/sevices/http.service';
import { Grupo } from 'src/app/models/grupo.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent{

  public grupos: Grupo [] = [];
 @Output() grupoClicado = new EventEmitter();

 private grupoTotal:Grupo = new Grupo(0,"todos");

  constructor(private http:HttpService) {

    this.http.getGrupos().subscribe(
      (data) => {
        
        this.grupos = [this.grupoTotal, ...data];
      }
    );
   }
}
