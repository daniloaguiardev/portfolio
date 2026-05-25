import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './contact.html',
})
export class Contact {}