import { Component } from '@angular/core';
import { GameService, Player } from '../../services/game.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-game-result',
  imports: [
    NgIf
  ],
  templateUrl: './game-result.component.html',
  styleUrl: './game-result.component.css'
})
export class GameResultComponent {
  player: Player | null = null;

  constructor(private gameService: GameService) {
    this.gameService.player$.subscribe(player => {
      this.player = player;
    });
  }

  restartGame() {
    this.gameService.startGame();
  }
}
