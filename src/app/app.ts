import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from "./components/contact/contact";
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}