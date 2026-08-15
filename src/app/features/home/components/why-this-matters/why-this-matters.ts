import { Component } from '@angular/core';
import { AvatarModule } from '@openng/optimus-ui/avatar';
import { AnimateOnScroll } from '@openng/optimus-ui/animateonscroll';
@Component({
  selector: 'app-why-this-matters',
  imports: [AvatarModule, AnimateOnScroll],
  templateUrl: './why-this-matters.html',
  styleUrl: './why-this-matters.css',
})
export class WhyThisMatters {}
