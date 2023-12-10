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
  NgbCollapse,
NgbCollapseConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'content-form-empleado',
  standalone:true,
  imports:[
    NgbModalModule,
    NgbAccordionModule,
    NgbAccordionBody,
    NgbAccordionCollapse,
    NgbCollapseModule,
    NgbCollapse,NgFor],

  templateUrl: './form-empleado.component.html',

})
export class FormEmpleadoContent {
  activeModal = inject(NgbActiveModal);
  constructor(){}
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

