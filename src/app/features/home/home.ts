import { Component, inject, OnInit } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { ProjectsSection } from "./components/projects-section/projects-section";
import { HowIThink } from "./components/how-ithink/how-ithink";
import { WhyThisMatters } from "./components/why-this-matters/why-this-matters";
import { DesignNote } from './components/design-note/design-note';
import { BeyondThePixels } from "./components/beyond-the-pixels/beyond-the-pixels";
import { BehindThePixels } from "./components/behind-the-pixels/behind-the-pixels";
import { LetsTalk } from "./components/lets-talk/lets-talk";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProjectsSection, HowIThink, WhyThisMatters, DesignNote, BeyondThePixels, BehindThePixels, LetsTalk],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  private  _activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this._activatedRoute.fragment.subscribe({
      next:(res)=>{
        console.log(res)

        this.jumpToSection(res!);
      }
    })
  }

  jumpToSection(id:string){
    document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:'start'})
  }
}
