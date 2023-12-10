import { Proyecto } from "./ClassProyecto";

export class PGestion extends Proyecto{
 private tipoBD:string;
 private tres_capas:boolean;

 constructor(name:string, descripcion:string, timp_des:Date, precio:number, tipobd:string, tresCapas:boolean){

  super(name,descripcion,timp_des,precio);
  this.tipoBD=tipobd;
  this.tres_capas=tresCapas;
 }
 getTipoBD(){return this.tipoBD;}
 getIsTres_Capas(){return this.tres_capas;}
}
