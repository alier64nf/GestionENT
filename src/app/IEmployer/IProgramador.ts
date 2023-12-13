import { Employer } from './IEmployer';

export interface Programador extends Employer {

   lenguajes_programacion?: string[];
   categoria?: string;

}
