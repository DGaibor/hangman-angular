import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  private db: string[] = ['apple', 'plum', 'pear', 'banana'];

  get(): string {
    const random = Math.floor(Math.random() * this.db.length);
    return this.db[random];
  }
}
