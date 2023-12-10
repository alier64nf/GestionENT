import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive,RouterModule,AppModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionENT';
}
