import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';

interface TechItem {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.html',
})
export class About {
  techRow1: TechItem[] = [
    { name: 'Java', icon: 'assets/icons/tech/Java.svg' },
    { name: 'JavaScript', icon: 'assets/icons/tech/JavaScript.svg' },
    { name: 'TypeScript', icon: 'assets/icons/tech/TypeScript.svg' },
    { name: 'Python', icon: 'assets/icons/tech/Python.svg' },
    { name: 'HTML', icon: 'assets/icons/tech/HTML.svg' },
    { name: 'CSS', icon: 'assets/icons/tech/CSS.svg' },
    { name: 'Spring Boot', icon: 'assets/icons/tech/SpringBoot.svg' },
    { name: 'Node.js', icon: 'assets/icons/tech/Nodejs.svg' },
    { name: 'Angular', icon: 'assets/icons/tech/Angular.svg' },
  ];

  techRow2: TechItem[] = [
    { name: 'Express.js', icon: 'assets/icons/tech/Expressjs.svg' },
    { name: 'PostgreSQL', icon: 'assets/icons/tech/PostgreSQL.svg' },
    { name: 'MySQL', icon: 'assets/icons/tech/MySQL.svg' },
    { name: 'MongoDB', icon: 'assets/icons/tech/MongoDB.svg' },
    { name: 'Clean Code', icon: 'assets/icons/tech/CleanCode.svg' },
    { name: 'SOLID', icon: 'assets/icons/tech/SOLID.svg' },
    { name: 'Design Patterns', icon: 'assets/icons/tech/DesignPatterns.svg' },
    { name: 'Scrum', icon: 'assets/icons/tech/Scrum.svg' },
    { name: 'Linux', icon: 'assets/icons/tech/Linux.svg' },
    { name: 'GIT', icon: 'assets/icons/tech/Git.svg' },
    { name: 'Docker', icon: 'assets/icons/tech/Docker.svg' },
    { name: 'Claude Code', icon: 'assets/icons/tech/ClaudeCode.svg' },
  ];
  repeatedRow1 = Array(15).fill(this.techRow1).flat();
  repeatedRow2 = Array(15).fill(this.techRow2).flat();

  groups = [1, 2];
}