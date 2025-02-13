import { Component, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';


@Component({
  selector: 'app-word-input',
  imports: [FormsModule, InputOtp],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.scss'
})
export class WordInputComponent {
  token: string = '';
  wordLength:number=0;

  constructor(private gameService: GameService) {
    this.gameService.player$.pipe(take(1)).subscribe(player => {
      this.wordLength =player.word.length;
      this.token = ' '.repeat(this.wordLength);

    });
  }


  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const letter = event.key.toLowerCase();

    this.gameService.player$.pipe(take(1)).subscribe(player => {
      let newToken = this.token.split('');
      let found = false;

      player.word.split('').forEach((char, index) => {
        if (char === letter) {
          newToken[index] = letter;
          found = true;
        }
      });

      this.token = newToken.join('');

      if (!found) {

        if (player.fails >= player.limitMisses) {
          this.gameService.updatePlayer({ step: 'end', result: false });
        }else{
          this.gameService.updatePlayer({ fails: player.fails + 1 });
        }

      }

      if (this.token === player.word) {
        this.gameService.updatePlayer({ step: 'end', result: true });
      }
    });
  }
}
