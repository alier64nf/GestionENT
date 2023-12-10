import { Employer } from './ClassEmployer';

export class Programador extends Employer {
  private lenguajes_programacion: string[];
  private categoria: string;

  constructor(name: string, edad: number,
    sexo: string, Sb: number, CI:string,
    lenguajes_programacion: string[], categoria: string ){

      super(name,edad,sexo,Sb,CI);
      this.categoria=categoria;
      this.lenguajes_programacion=lenguajes_programacion;
  }
  getL_Program(){return this.lenguajes_programacion;}
  getCantdLP(){return this.lenguajes_programacion.length; }
  getCatgoria(){return this.categoria;}
}
