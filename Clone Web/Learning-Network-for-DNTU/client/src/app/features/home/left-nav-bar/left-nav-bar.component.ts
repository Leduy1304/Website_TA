import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarService } from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-left-nav-bar',
  imports: [],
  templateUrl: './left-nav-bar.component.html',
  styleUrl: './left-nav-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftNavBarComponent {
  private readonly sidebarService = inject(SidebarService);

  readonly isOpen = this.sidebarService.isOpen;

  onBackdropClick() {
    this.sidebarService.close();
  }

  // Tự động đóng sidebar khi chuyển sang desktop
  ngOnInit() {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        this.sidebarService.close();
      }
    };
    mq.addEventListener('change', handler);
    // Đảm bảo đóng khi vừa load ở desktop
    if (mq.matches) {
      this.sidebarService.close();
    }
  }
}
