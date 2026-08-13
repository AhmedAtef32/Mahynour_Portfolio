import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { ProjectsSection } from "./components/projects-section/projects-section";
import { HowIThink } from "./components/how-ithink/how-ithink";

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProjectsSection, HowIThink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
