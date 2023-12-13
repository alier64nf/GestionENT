import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet,RouterLink,RouterLinkActive, RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// ***********Services*****************//
import { NavbarComponent } from './navbar/navbar.component';
import { EmpleadosService } from './empleados.service';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { FormModule } from './form/form.module';
import { FormEmpleadoComponent } from './form/form-empleado/form-empleado.component';
import { FormEquipoComponent } from './form/form-equipo/form-equipo.component';
import { FormProyectComponent } from './form/form-proyect/form-proyect.component';


@NgModule({
  declarations: [
      NavbarComponent,
      DashboardComponent,
      FormEmpleadoComponent,
      FormProyectComponent,
      FormEquipoComponent



   ],
   imports: [
    CommonModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    NgbModalModule,


   ],

  exports:[  NavbarComponent,
  ],

  providers:[
    EmpleadosService,
  ],
  bootstrap:[]
})
export class AppModule { }
