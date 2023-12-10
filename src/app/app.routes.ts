import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerTabComponent } from './employer-tab/employer-tab.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'empleados',
    component: EmployerTabComponent,
    title: 'Dashboard'
  }



  // {
  //   path: '**',
  //   component: PageNotFoundComponent  }
];
