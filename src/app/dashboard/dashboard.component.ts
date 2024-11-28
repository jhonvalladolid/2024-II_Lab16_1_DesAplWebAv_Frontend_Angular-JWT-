import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService) { }

  // Método para llamar al servicio de cierre de sesión
  logout() {
    this.authService.logout(); // Llama al método de logout que limpia el localStorage
  }
}
