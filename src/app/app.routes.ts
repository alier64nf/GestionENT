import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerTableComponent } from './employer-tab/employer-tab.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'empleados',
    component: EmployerTableComponent,
    title: 'Dashboard'
  }



  // {
  //   path: '**',
  //   component: PageNotFoundComponent  }
];
