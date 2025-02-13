import { Component } from '@angular/core';
import { GameService, Player } from '../services/game.service';
import { GameStartComponent } from '../components/game-start/game-start.component';
import { GamePlayComponent } from '../components/game-play/game-play.component';
import { GameResultComponent } from '../components/game-result/game-result.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-game',
  imports: [
    GameStartComponent,
    GamePlayComponent,
    GameResultComponent,
    NgIf
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  player!: Player;
  constructor(private gameService: GameService) {
    this.gameService.player$.subscribe(player => {
      this.player = player;
    });
  }

}
