import { Employer } from '../IEmployer/IEmployer';
import { Programador } from '../IEmployer/IProgramador';
import { Lider } from '../IEmployer/ILider';

export class Empresa{
 private empleados: Employer[];
  //empleadosOcupados: Employer[];

  constructor(programadores:Programador[], lideres:Lider[]){
    this.empleados=programadores;
    this.empleados.concat(lideres);

  }

  public AddProgramador(name: string, edad:number, sexo:string, SB:number, CI: string,
    lenguajes_programacion?:string[],categoria?:string, anioXP?:number, proyectDirig?:number){
    let programador: Programador={
      name:name,
      edad:edad,
      sexo:sexo,
      SalarioBasic:SB,
      CI:CI,
      lenguajes_programacion:lenguajes_programacion,
      categoria: categoria,

    }
    let lider: Lider={
      name:name,
      edad:edad,
      sexo:sexo,
      SalarioBasic:SB,
      CI:CI,
      anioxp: anioXP,
      proyectDirigidos: proyectDirig,
    }
    if(programador.categoria != null){
      this.empleados.push(programador);
    }else{
      this.empleados.push(lider);

    }
  }

  public get _ListEmpleados(){
    return this.empleados;
  }

  public getProgramadorByID(ID: string):any{
    for (let empleado of this.empleados ){
      if ( empleado as Programador){
        if(empleado.CI== ID){
          return empleado;
        }
      }
    }
  }

  public getList_Programador():Programador[]{
    let programadores: Programador[]=[];
    for (let empleado of this.empleados){
      if ( empleado as Programador){
        programadores.push(empleado);
      }
    }
    return programadores;
  }

  public  getList_Lideres(): Lider[]{
    let lideres: Lider[]=[];
    for (let empleado of this.empleados){
      if ( empleado as Lider){
        lideres.push(empleado);
      }
    }
    return lideres;
  }

  }



