import { Component, InputSignal,input } from '@angular/core';

@Component({
  selector: 'app-interactiv-node-graphe',
  imports: [],
  templateUrl: './interactiv-node-graphe.html',
  styleUrl: './interactiv-node-graphe.css',
})
export class InteractivNodeGraphe {
  resolve:InputSignal<boolean> = input.required()

}
