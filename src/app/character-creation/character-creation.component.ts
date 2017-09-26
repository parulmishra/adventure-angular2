import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css'],
   providers:[PlayerService]
})
export class CharacterCreationComponent implements OnInit {
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }
  addPlayer(name: string, hairColor: string, hobby: string )
  {
    this.player = new Player(name,hairColor,hobby);
    this.playerService.addNewPlayer(this.player);
  }

}
