import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeftNavBarComponent } from '../left-nav-bar/left-nav-bar.component';
import { PaginatorComponent } from '../../../shared/paginator/paginator.component';

@Component({
  selector: 'app-home-main',
  imports: [LeftNavBarComponent, PaginatorComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMainComponent {}
