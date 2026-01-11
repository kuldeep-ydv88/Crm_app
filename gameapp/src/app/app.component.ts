import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isCollapsed = false;
  showLayout = true;

  menuItems = [
    { name: 'Home', icon: 'fas fa-home', path: "" },
    { name: 'Billing', icon: 'fas fa-file-invoice-dollar', path: "billing" },  
    { name: 'Activity', icon: 'fas fa-tasks', path: "activity" },  
    { name: 'Offers', icon: 'fas fa-layer-group', path: "offers" },  
    { name: 'Inventory', icon: 'fas fa-boxes', path: "inventory" }, 
    { name: 'Inventory Category', icon: 'fas fa-layer-group', path: "inventory-category" } 
  ];

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.showLayout = !url.startsWith('/login') && !url.startsWith('/register');
      }
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
