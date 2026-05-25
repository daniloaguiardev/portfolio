import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  groups = [1, 2];
  marqueeItems = Array(40).fill('DANILO AGUIAR');

  mostrarBotaoTopo = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mostrarBotaoTopo.set(window.scrollY > 500);
  }

  voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}