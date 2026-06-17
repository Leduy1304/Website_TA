import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly _isOpen = signal(false);

  readonly isOpen = this._isOpen.asReadonly();

  toggle() {
    this._isOpen.update((isOpen) => !isOpen);
  }

  close() {
    this._isOpen.set(false);
  }

  open() {
    this._isOpen.set(true);
  }
}
