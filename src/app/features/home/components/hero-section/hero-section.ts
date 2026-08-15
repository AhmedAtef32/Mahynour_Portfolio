import { Component, signal, WritableSignal } from '@angular/core';
import { CardOverlay } from "./components/card-overlay/card-overlay";
import { InteractivNodeGraphe } from "./components/interactiv-node-graphe/interactiv-node-graphe";
import { AvatarModule } from '@openng/optimus-ui/avatar';
import { AnimateOnScroll } from '@openng/optimus-ui/animateonscroll';
@Component({
  selector: 'app-hero-section',
  imports: [CardOverlay, InteractivNodeGraphe,AvatarModule,AnimateOnScroll],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  resolve:WritableSignal<boolean>=signal(false);


  toggleResolve(){
    this.resolve.update(val=> !val)
  }
}
