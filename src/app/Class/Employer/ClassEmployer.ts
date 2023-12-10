export class Employer {
  private name:String;
  private edad:number;
  private sexo:string;
  private SalarioBasic: number;
  private CI:string;

  constructor(name: string, edad: number, sexo: string, Sb: number, CI:string){
    this.CI=CI;
    this.edad=edad;
    this.sexo=sexo;
    this.SalarioBasic=Sb;
    this.name=name;
  }
  getName(){return this.name;}
  getEdad(){return this.edad;}
  getsexo(){return this.sexo;}
  getSalarioBAsic(){return this.SalarioBasic;}
  getCI(){return this.CI;}
}
