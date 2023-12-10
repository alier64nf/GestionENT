import { Employer } from './ClassEmployer';


export class Lider extends Employer {
  private anioxp: number;
  private proyectDirigidos: number;

  constructor(name: string, edad: number,
    sexo: string, Sb: number, CI:string, anioxp: number,proyectDirigidos: number ){
      super(name,edad,sexo,Sb,CI);
      this.anioxp=anioxp;
      this.proyectDirigidos=proyectDirigidos;

  }
  getAnoXp(){return this.anioxp;}
  getProyectDirig(){return this.proyectDirigidos;}
}
