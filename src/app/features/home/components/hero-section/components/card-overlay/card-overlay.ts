import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card-overlay',
  imports: [],
  templateUrl: './card-overlay.html',
  styleUrl: './card-overlay.css',
})
export class CardOverlay {
  resolve:InputSignal<boolean> = input.required()
}
