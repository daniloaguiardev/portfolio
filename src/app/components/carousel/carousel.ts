import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full overflow-hidden rounded-lg"
         (mouseenter)="isHovered.set(true)"
         (mouseleave)="isHovered.set(false)"
         (touchstart)="isHovered.set(true)"
         (touchend)="isHovered.set(false)">
         
      @if (images.length > 0) {
        <div class="flex w-full h-auto transition-transform duration-800 ease-in-out"
             [style.transform]="'translateX(-' + (currentIndex() * 100) + '%)'">
             
          @for (img of images; track $index) {
            <div class="w-full flex-shrink-0">
              <img [src]="img" alt="Screenshot do projeto" class="w-full h-64 object-cover sm:h-72 md:h-96">
            </div>
          }
        </div>

        @if (images.length > 1) {
          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            @for (dot of images; track $index) {
              <div class="w-1.5 h-1.5 rounded-full"
                   [class.bg-white]="$index === currentIndex()"
                   [class.bg-white/40]="$index !== currentIndex()">
              </div>
            }
          </div>
        }
      } @else {
        <div class="w-full h-64 bg-white/5 flex items-center justify-center sm:h-72 md:h-96">
          <span class="text-white/20 text-lg">Em breve</span>
        </div>
      }
    </div>
  `
})
export class Carousel implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  
  currentIndex = signal(0);
  isHovered = signal(false);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (!this.isHovered() && this.images.length > 1) {
        this.currentIndex.update(i => (i + 1) % this.images.length);
      }
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
