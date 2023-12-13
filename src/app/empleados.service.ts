import { Empresa } from './Class/Empresa';
import { provideRouter } from '@angular/router';
import { Injectable, inject, PipeTransform, Inject } from '@angular/core';
// import { Employer } from './Class/Employer/ClassEmployer';
// import { Lider } from './Class/Employer/ClassLider';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
// import { EMPLEADOS } from './Empresa';
// import { Programador } from './Class/Employer/ClassProgramador';

import {PROGRAMADORES} from "./Programadores";
import { Programador } from './IEmployer/IProgramador';
import { LIDERES } from './lideres';
import { Employer } from './IEmployer/IEmployer';

interface SearchResult {
	empleados: Employer[];
	total: number;
}

interface State {
	page: number;
	pageSize: number;
	searchTerm: string;
  sortColumn: SortColumn;
	sortDirection: SortDirection;
}

const compare = (v1: string| number |string [], v2: string | number | string[]) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(empleados: Employer[], column: SortColumn, direction: string): Employer[] {
	if (direction === '' || column === '') {
		return empleados;
	} else {
		return [...empleados].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}
function matches(empleado: Employer, term: String, pipe: PipeTransform) {
	return (
		empleado.name.toLowerCase().includes(term.toLowerCase()) //||
		// pipe.transform(empleado.name.includes(term))
    );
}

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {
  private _Empresa;
  private EmpleadosList= new BehaviorSubject<Employer[]>([]);
  private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _total$ = new BehaviorSubject<number>(0);

	private _state: State = {
		page: 1,
		pageSize: 4,
		searchTerm: '',
    sortColumn: '',
	  sortDirection: '',
	};

  constructor(private pipe: DecimalPipe ) {
    this._search$
    .pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false)),
    )
    .subscribe((result) => {
      this.EmpleadosList.next(result.empleados);
      this._total$.next(result.total);
    });

  this._search$.next();
  this._Empresa= new Empresa(PROGRAMADORES,LIDERES);

  }



  get _EmpleadosList(){
    return this.EmpleadosList.asObservable();
  }

	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}

	private _set(patch: Partial<State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
  set sortColumn(sortColumn: SortColumn) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}
  setEmpleado(name: string, edad:number, sexo:string, SB:number, CI: string,
    lenguajes_programacion?:string[],categoria?:string, anioXP?:number, proyectDirig?:number){
    this._Empresa.AddProgramador(name, edad, sexo, SB, CI,
      lenguajes_programacion,categoria, anioXP, proyectDirig);
  }
  private _search(): Observable<SearchResult> {
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort
		let empleados = sort(this._Empresa._ListEmpleados, sortColumn, sortDirection);

		// 2. filter
		empleados = empleados.filter((empleado) => matches(empleado, searchTerm, this.pipe));
		const total = empleados.length;

		// 3. paginate
		empleados = empleados.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		  return of({ empleados, total });
	}

}
