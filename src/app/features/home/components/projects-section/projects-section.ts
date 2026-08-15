import { Component } from '@angular/core';
import { AvatarModule } from '@openng/optimus-ui/avatar';
import { AnimateOnScroll } from '@openng/optimus-ui/animateonscroll';
@Component({
  selector: 'app-projects-section',
  imports: [AvatarModule, AnimateOnScroll],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {}
