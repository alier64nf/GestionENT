import { Programador } from '../../IEmployer/IProgramador';
import { Component, inject, Input, Output } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { CommonModule, NgFor } from '@angular/common';

import {
    NgbModal,
    NgbActiveModal,

    NgbModalModule,
    NgbAccordionModule,
    NgbAccordionBody,
    NgbAccordionCollapse,
    NgbCollapseModule,
    NgbCollapse,
  NgbCollapseConfig,
  NgbPaginationModule,
  NgbHighlight} from '@ng-bootstrap/ng-bootstrap';


@Component({
selector: 'sub-form',
standalone: true,
imports:[
  NgbPaginationModule,NgbHighlight,NgFor,
],
template:`
<div class="modal-header">
  <h4 class="modal-title">Crea tu Equipo</h4>
  <button type="button" class="btn-close" aria-label="Close" (click)="activeModal2.dismiss('Cross click')"></button>
</div>
 <table class="table table-striped">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Programador</th>
			<th scope="col">Categoria</th>
			<th scope="col">Lenguajes Que Domina</th>
		</tr>
	</thead>
	<tbody>
		@for (programador of  Programadores; track programador.name; let i = $index) {
			<tr>
				<th scope="row">{{ i + 1 }}</th>
				<td>
					{{ programador.name }}
				</td>
				<td>{{ programador.categoria }}</td>
        <td>
          <tr *ngFor="let item of programador.lenguajes_programacion">{{item}}</tr>

        </td>
			</tr>
		}
	</tbody>
</table>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal2.close('Close click')">Agregar</button>
</div>



`,

})
export class SubFormComponent{
@Input() Programadores?: any;
activeModal2 = inject(NgbActiveModal);

}

@Component({
  selector: 'content-form-equipo',
  standalone: true,
  imports:[
    CommonModule,
    NgbModalModule,
    NgbAccordionModule,
    NgbAccordionBody,
    NgbAccordionCollapse,
    NgbCollapseModule,
    NgbCollapse,NgFor],
  templateUrl: './form-equipo.component.html',

})
export class FormEquipoContent {
  activeModal = inject(NgbActiveModal);
  isCollapsed = true;
  empleados= inject(EmpleadosService);
  Programadores=this.empleados.getProgramadorList();
  lideres=this.empleados.getProgramadorList();
  Progs_Selects?: Programador[];

  private modalService2 = inject(NgbModal);
  constructor(){}
  OpenListProgamdrs(){
		const modalRef2 = this.modalService2.open(SubFormComponent,{fullscreen:true});
    modalRef2.componentInstance.Programadores=this.Programadores;
  }
}

@Component({
  selector: 'app-form-equipo',
  template: `<button class="dropdown-item btn btn-lg btn-outline-primary" (click)="open()">{{title}}</button>`,

})
export class FormEquipoComponent {
	private modalService = inject(NgbModal);
  @Input() title!: string;

	open() {
		const modalRef = this.modalService.open(FormEquipoContent);
	}
}

