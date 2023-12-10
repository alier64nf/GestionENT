import { Programador } from '././IEmployer/IProgramador';
import { Injectable, inject, } from '@angular/core';
import { Employer } from '././IEmployer/IEmployer';
import { LIDERES } from './lideres';
import { Lider } from '././IEmployer/ILider';
import { PROGRAMADORES } from './Programadores';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private EmpleadosList: Employer[]=[];
  private LiderList: Lider[]= LIDERES;
  private ProgramadorList: Programador[]=PROGRAMADORES;
  constructor() {
    this.EmpleadosList=this.LiderList;
    this.EmpleadosList.concat(this.ProgramadorList);
  }

  getProgramadorByID(ID: String):any{
    for (let empleado of this.EmpleadosList){
      if ( empleado as Programador){
        if(empleado.CI== ID){
          return empleado;
        }
      }
    }

  }

   getLiderList():Lider[]{
    return this.LiderList;
  }
  getProgramadorList():Programador[]{
    return this.ProgramadorList;
  }
}
