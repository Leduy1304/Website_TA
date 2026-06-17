import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => (window as any).HSStaticMethods?.autoInit(), 100);
      }
    });
  }
}
