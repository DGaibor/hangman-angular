import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'app-game-start',
  imports: [
    ButtonDirective
  ],
  templateUrl: './game-start.component.html',
  styleUrl: './game-start.component.css'
})
export class GameStartComponent {
  constructor(private gameService: GameService) {}

  startGame() {
    this.gameService.startGame();
  }
}
