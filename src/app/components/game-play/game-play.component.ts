import { Component } from '@angular/core';
import { HangmanDrawingComponent } from '../hangman-drawing/hangman-drawing.component';
import { WordInputComponent } from '../word-input/word-input.component';

@Component({
  selector: 'app-game-play',
  imports: [
    HangmanDrawingComponent,
    WordInputComponent
  ],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent {

}
