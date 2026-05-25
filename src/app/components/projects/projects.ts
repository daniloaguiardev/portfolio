import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate';
import { Carousel } from '../carousel/carousel';

interface TechItem {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  tags: TechItem[];
  type: string;
  description: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, Carousel],
  templateUrl: './projects.html',
})
export class Projects {
  portfolioProjects: Project[] = [
    {
      title: 'Backlog Games',
      tags: [
        { name: 'Angular', icon: 'assets/icons/tech/Angular.svg' },
        { name: 'Supabase', icon: 'assets/icons/tech/Supabase.svg' },
        { name: 'Tailwind', icon: 'assets/icons/tech/Tailwind.svg' },
      ],
      type: 'Aplicação Web',
      description: 'Aplicação desenvolvida em Angular com Supabase como backend e Tailwind CSS para estilização. O sistema gerencia a lógica de jogos e apresenta um dashboard administrativo com progresso dos jogadores atualizado em tempo real.',
      images: [
        'assets/projects/backlog/home.png',
        'assets/projects/backlog/login.png',
        'assets/projects/backlog/search.png'
      ],
      link: '#'
    },
    {
      title: 'Dashboard Financeiro',
      tags: [
        { name: 'Google Apps Script', icon: 'assets/icons/tech/GoogleAppsScript.svg' },
        { name: 'Node.js', icon: 'assets/icons/tech/Nodejs.svg' },
        { name: 'MongoDB', icon: 'assets/icons/tech/MongoDB.svg' },
      ],
      type: 'Dashboard Administrativo',
      description: 'Dashboard de controlo financeiro para acompanhamento do orçamento do plano 2025, integrando automação com Google Apps Script e planilhas partilhadas para gerir facilmente as entradas, saídas e despesas do planeamento.',
      images: [],
      link: '#'
    }
  ];
}
