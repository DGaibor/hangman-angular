import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hangman-drawing',
  imports: [
    NgIf
  ],
  templateUrl: './hangman-drawing.component.html',
  styleUrl: './hangman-drawing.component.scss'
})
export class HangmanDrawingComponent {
  fails: number = 0;

  constructor(private gameService: GameService) {
    this.gameService.player$.subscribe(player => {
      this.fails = player.fails;
    });
  }
}
