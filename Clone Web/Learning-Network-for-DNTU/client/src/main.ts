import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Add Preline UI initialization
import 'preline/preline';

declare global {
  interface Window {
    HSStaticMethods: any;
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ],
}).then(() => {
  // Initialize Preline components after Angular bootstraps
  if (typeof window !== 'undefined' && window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});
