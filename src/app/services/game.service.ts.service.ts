import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GameService {
  constructor() {}

  /**
   * Math Random para generar un random y multiplicamos por 3
   * Redondeamos el entero superior, quedando 0,1,2 como posibles resultados
   * y con ello selecciona Piedra (r), Papel (p) ó Tijera (s)
   */
  

   play(choice: string): string {
    const random = Math.ceil(Math.random() * 3);
    let result = '';
    switch (random) {
      case 1:
        result = 'r';
        break;
      case 2:
        result = 'p';
        break;
      case 3:
        result = 's';
        break;
    }
    if (choice === result) {
      return 'Empate!';
    } else if (choice === 'r' && result === 's') {
      return 'Ganaste!';
    } else if (choice === 's' && result === 'p') {
      return 'Ganaste!';
    } else if (choice === 'p' && result === 'r') {
      return 'Ganaste!';
    } else {
      return 'Perdiste!';
    }
   }
}