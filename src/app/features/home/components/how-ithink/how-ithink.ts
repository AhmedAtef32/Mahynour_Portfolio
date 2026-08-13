import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { IHowIThinkCard } from '../../../interfaces/home/IHowIThink';

@Component({
  selector: 'app-how-ithink',
  imports: [],
  templateUrl: './how-ithink.html',
  styleUrl: './how-ithink.css',
})
export class HowIThink {
  selectedId: WritableSignal<number> = signal(1);
  selectedCard: Signal<IHowIThinkCard | undefined> = computed(() =>
    this.howIThinkContent.find((card) => card.id == this.selectedId()),
  );

  howIThinkContent: IHowIThinkCard[] = [
    {
      id: 1,
      title: 'Understand',
      description: 'Users, business goals, context, and constraints come before the canvas.',
      footerDes: 'Start with the landscape, not the solution.',
    },
    {
      id: 2,
      title: 'Frame',
      description: 'Turn a vague request into a clear product problem the team can act on.',
      footerDes: 'A sharp question is already progress.',
    },
    {
      id: 3,
      title: 'Explore',
      description: 'Generate multiple possible directions instead of committing too early.',
      footerDes: 'Range creates better decisions.',
    },
    {
      id: 4,
      title: 'Validate',
      description: 'Test assumptions, expose friction, and learn what the interface is hiding.',
      footerDes: 'Evidence beats preference.',
    },
    {
      id: 5,
      title: 'Refine',
      description: 'Use what you learn to improve the experience and the system behind it.',
      footerDes: 'Good design stays open to revision.',
    },
  ];
}
