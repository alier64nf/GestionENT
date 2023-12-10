import { Proyecto } from "./ClassProyecto";

export class PMultimedia extends Proyecto{
  private flash:boolean;
  constructor(name:string, descripcion:string, timp_des:Date, precio:number, flash: boolean){
    super(name,descripcion,timp_des,precio);
    this.flash=flash;
  }
  getIsFlash(){ return this.flash;}
}
