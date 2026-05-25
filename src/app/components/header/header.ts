import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header {
  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update(estado => !estado);
  }
}