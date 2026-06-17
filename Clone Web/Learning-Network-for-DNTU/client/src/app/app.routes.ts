import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home-main/home-main.component').then(
        (m) => m.HomeMainComponent
      ),
  },
  {
    path: 'english-tests',
    loadComponent: () =>
      import(
        './features/english-mocking-tests/english-mocking-tests-main/english-mocking-tests-main.component'
      ).then((m) => m.EnglishMockingTestsMainComponent),
  },
];
