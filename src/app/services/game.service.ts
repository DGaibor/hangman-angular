import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HangmanService } from './hangman.service';

export interface Player {
  step: 'start' | 'game' | 'end';
  word: string;
  limitMisses: number;
  fails: number;
  result?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private playerState = new BehaviorSubject<Player>({
    step: 'start',
    word: '',
    limitMisses: 5,
    fails: 0,
    result: undefined
  });
  constructor(private hangmanService: HangmanService) {}

  player$ = this.playerState.asObservable();
  startGame() {
    const word = this.hangmanService.get();
    this.updatePlayer({ word, step: 'game', fails: 0, limitMisses: 5 });
  }
  updatePlayer(newState: Partial<Player>) {
    this.playerState.next({ ...this.playerState.value, ...newState });
  }
}
