import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import {PlayerService} from '../player.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
   providers: [PlayerService]
})

export class IntroductionComponent{
  players: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  eatBreakfast(){
    this.playerService.addPoints(2);
  }

  leaveForSchool(){
    this.playerService.subtractPoints(2);
  }



}
