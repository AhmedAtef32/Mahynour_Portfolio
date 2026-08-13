import { Component, signal, WritableSignal } from '@angular/core';
import { CardOverlay } from "./components/card-overlay/card-overlay";
import { InteractivNodeGraphe } from "./components/interactiv-node-graphe/interactiv-node-graphe";

@Component({
  selector: 'app-hero-section',
  imports: [CardOverlay, InteractivNodeGraphe],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  resolve:WritableSignal<boolean>=signal(false);


  toggleResolve(){
    this.resolve.update(val=> !val)
  }
}
