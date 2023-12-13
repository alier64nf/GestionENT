
import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Employer } from '../IEmployer/IEmployer';
import { Programador } from '../IEmployer/IProgramador';
import { EmpleadosService } from '../empleados.service';
import { NgbdSortableHeader, SortEvent } from '../sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-table-complete',
	standalone: true,
	imports: [
    DecimalPipe,
    FormsModule, AsyncPipe,
    NgbHighlight, NgbdSortableHeader,
    NgbPaginationModule,NgFor,NgIf],
	templateUrl: './employer-tab.component.html',
	providers: [DecimalPipe,EmpleadosService],
})
export class EmployerTableComponent {
	empleados: Observable<Programador[]>;
	total$: Observable<number>;

	@ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;
ngb: any;
highlight: any;

	constructor(public service: EmpleadosService) {
		this.empleados = service._EmpleadosList;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}
