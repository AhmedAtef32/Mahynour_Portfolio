import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { ProjectsSection } from "./components/projects-section/projects-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProjectsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
