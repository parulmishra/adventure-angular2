import { Injectable } from '@angular/core';
import {Player} from './player';
import { playerList } from './mock-players';
@Injectable()
export class PlayerService {

  constructor() { }

  addNewPlayer(player:Player){
    playerList.push(player);
  }

  getPlayers(){
    return playerList;
  }

  addPoints(points:number){
    playerList[0].points+=points;
  }
  subtractPoints(points:number){
    playerList[0].points-=points;
  }
}
