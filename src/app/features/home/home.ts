import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { ProjectsSection } from "./components/projects-section/projects-section";
import { HowIThink } from "./components/how-ithink/how-ithink";
import { WhyThisMatters } from "./components/why-this-matters/why-this-matters";

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProjectsSection, HowIThink, WhyThisMatters],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
