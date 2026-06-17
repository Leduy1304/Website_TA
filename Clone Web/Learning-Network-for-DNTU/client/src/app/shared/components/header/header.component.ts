import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly sidebarService = inject(SidebarService);

  protected readonly isSidebarOpen = this.sidebarService.isOpen;
  protected readonly isMobileSearchOpen = signal(false);

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  toggleMobileSearch() {
    this.isMobileSearchOpen.update((isOpen) => !isOpen);
  }
}
