import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service.ts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: string;
  pointsUser = 0;
  pointsComp =  0;

  constructor(private playGame: GameService) {
    this.result = 'Esperando jugada...';
  }

  ngOnInit(): void {
    console.log(this.pointsUser);
  }

  /*
  s: tijeras
  p: papel
  r: piedra
  */

  play(choice: string): void {
    const result = this.playGame.play(choice);
    this.result = result;
    if (result === 'Ganaste!') {
      this.pointsUser++;
    } else if (result === 'Perdiste!') {
      this.pointsComp++;
    }
  }
}
