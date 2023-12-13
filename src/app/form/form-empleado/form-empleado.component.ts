import { LengGProg } from './../../LenguagesProgramming';
import { NgFor } from '@angular/common';
import { Component, inject, Input, Output } from '@angular/core';
import {
  NgbModal,
  NgbActiveModal,

  NgbModalModule,
  NgbAccordionModule,
  NgbAccordionBody,
  NgbAccordionCollapse,
  NgbCollapseModule,
  NgbCollapse,NgbDropdownModule,
NgbCollapseConfig} from '@ng-bootstrap/ng-bootstrap';
import { EmpleadosService } from '../../empleados.service';
import { LENGUAJES_PROGRAM } from '../../LenguagesProgramming';
import { getActiveElement } from '@ng-bootstrap/ng-bootstrap/util/util';
import { DomElementSchemaRegistry } from '@angular/compiler';
@Component({
  selector: 'content-form-empleado',
  standalone:true,
  imports:[
    NgbModalModule,
    NgbAccordionModule,
    NgbAccordionBody,
    NgbAccordionCollapse,
    NgbCollapseModule,
    NgbCollapse,NgFor,NgbDropdownModule],

  templateUrl: './form-empleado.component.html',

})
export class FormEmpleadoContent {
[x: string]: any;
  activeModal = inject(NgbActiveModal);
  nuevoEmpleado=inject(EmpleadosService);
  lenguajesProgram= LENGUAJES_PROGRAM;
  lgp?:string[]=['Angular'];


  constructor(){}

  Submit(name: string,lastname:string, edad:number, sexo:string, SB:number, CI: string,
    lenguajes_programacion?:string[],categoria?:string, anioXP?:number, proyectDirig?:number)
    {

      this.nuevoEmpleado.setEmpleado(name+lastname, edad, sexo, SB, CI,
      lenguajes_programacion,categoria, anioXP, proyectDirig);

    this.activeModal.close('Close click');
  }

  Seleccion(){
    let attribut= inject(DomElementSchemaRegistry);
    let Seleccionado= attribut.allKnownAttributesOfElement('selected');

  }
}

@Component({
  selector: 'app-form-empleado',
  template: `<button class="dropdown-item btn btn-lg btn-outline-primary" (click)="open()"> {{title}}</button>`,

})
export class FormEmpleadoComponent {
	private modalService = inject(NgbModal);
  @Input() title!: string;


	open() {
		const modalRef = this.modalService.open(FormEmpleadoContent,{centered: true});
	}

}

