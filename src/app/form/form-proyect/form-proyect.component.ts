import { FormControlName, FormGroup, NgModelGroup } from '@angular/forms';
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
  selector: 'content-form-proyect',
  standalone:true,
  imports:[
    NgbModalModule,
    NgbAccordionModule,
    NgbAccordionBody,
    NgbAccordionCollapse,
    NgbCollapseModule,
    NgbCollapse,NgFor],
  templateUrl: './form-proyect.component.html',

})
export class FormProyectContent {
  activeModal = inject(NgbActiveModal);
  @Input() name?: string;

  constructor(){}
}

@Component({
  selector: 'app-form-proyect',
  template: `<button class="dropdown-item btn btn-lg btn-outline-primary" (click)="open()">{{title}}</button>`,

})
export class FormProyectComponent {
	private modalService = inject(NgbModal);
  @Input() title!: string;

	open() {
		const modalRef = this.modalService.open(FormProyectContent,{centered: true});
		modalRef.componentInstance.name = 'Form Proyect';
	}
}
