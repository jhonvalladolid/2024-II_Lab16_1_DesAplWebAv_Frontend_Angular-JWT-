import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:4000/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  // Método para registrar al usuario
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  
  // Método para hacer login
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
    this.router.navigate(['/login']); // Redirigir al usuario a la página de login
  }
}
