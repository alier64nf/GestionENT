import { Injectable } from '@angular/core';
import{Proyecto} from './IProyecto/IProyecto';
import{PGestion} from './IProyecto/IPGestion';
import{PMultimedia} from './IProyecto/IPMultimedia';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyectos: Proyecto[]=[];
  constructor() { }

addProyect(name:string, descrip:string,
  timpdes: Date, precio:number,Flash?:boolean, TBdatos: string, isTresCapas?:boolean){
  if(Flash != null){
    var proyecto:Proyecto = new PMultimedia( name,descrip,timpdes,precio,Flash);
    this.proyectos.push(proyecto);

  }else{
    var proyecto:Proyecto = new PGestion( name,descrip,timpdes,precio,Tbdatos,isTresCapas);
    this.proyectos.push(proyecto);
  }
}
}
