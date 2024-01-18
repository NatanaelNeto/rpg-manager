import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { SceneOrder } from 'src/app/models/scene-order-model';
import { DatabaseService } from 'src/app/pages/database/database.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-add-to-party',
  templateUrl: './addToParty.component.html',
  styleUrls: ['./addToParty.component.scss'],
})
export class AddToPartyComponent {
  @Output() selectedChar: EventEmitter<SceneOrder> = new EventEmitter<SceneOrder>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = [];

  char: SceneOrder = {
    init: 0,
    char: new CharacterModel,
  }

  constructor(private db:DatabaseService, private alert: AlertService) {
    this.db.getAllCharacters().subscribe(c => this.chars = c);
    this.db.getAllEnemies().subscribe(e => this.enemies = e);
  }

  selectChar(c: CharacterModel) {
    this.char.char = c;
  }

  emitCancel() {
    this.cancel.emit(true);
  }

  emitChar() {
    if(this.char.init > 0) {
      this.selectedChar.emit(this.char);
    }
    else {
      this.alert.openPanel({state:true, type:'error', message:'Coloque, antes, a iniciativa do personagem'});
    }
  }

}
