export class Proyecto{
 private name:string;
 private descripcion:string;
 private tiempo_desarrollo:Date;
 private precio:number;

 constructor(name:string, descripcion:string, timp_des:Date, precio:number){
  this.descripcion=descripcion;
  this.name=name;
  this.precio=precio;
  this.tiempo_desarrollo=timp_des;
 }
public getName(){return this.name}
public getDescription(){return this.descripcion}
public getTdesarrollo(){return this.tiempo_desarrollo}
public getPrecio(){return this.precio}
}
