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
  name: any = '';

  constructor(private playGame: GameService) {
    this.result = 'Esperando jugada...';
  }

  ngOnInit(){
    this.name = sessionStorage.getItem('nameApp');
  }

  /* s: tijeras, p: papel, r: piedra */

  play(choice: string): void {
    const result = this.playGame.play(choice);
    this.result = result;
    if (result === 'Ganaste!') {
      let points = this.pointsUser++;
      this.pointsUser++;
      sessionStorage.setItem('points', JSON.stringify(points));
    } else if (result === 'Perdiste!') {
      this.pointsComp++;
    }
  }
}
