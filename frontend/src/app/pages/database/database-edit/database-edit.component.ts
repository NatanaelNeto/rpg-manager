import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database.service';
import { AlertService } from 'src/app/components/alert/alert.service';

@Component({
  selector: 'app-database-edit',
  templateUrl: './database-edit.component.html',
  styleUrls: ['./database-edit.component.scss'],
})
export class DatabaseEditComponent {
  char: CharacterModel = {
    name: '',
    sex: 'F',
    race: '',
    class: '',
    level: 0,
    life: 0,
    currLife: 0,
    mana: 0,
    currMana: 0,
    strength: 0,
    agility: 0,
    intelligence: 0,
    will: 0,
    equipments: [],
    abilities: [],
    block: {
      current: 0,
      armorBonus: 0,
      blockBonus: 0
    },
    dodge: {
      current: 0,
      armorBonus: 0,
      dodgeBonus: 0
    },
    determination: {
      current: 0,
      armorBonus: 0,
      determinationBonus: 0
    },
    openMenu: false
  }

  onEdit: boolean = false;

  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = []

  constructor(private db: DatabaseService, private alert:AlertService) {
    this.db.getAllCharacters().subscribe(c => { this.chars = c; console.log(c) });
    this.db.getAllEnemies().subscribe(e => this.enemies = e);
  }

  selectChar(char:CharacterModel) {
    this.char = char;
    this.onEdit = true;
  }

  cancel() {
    this.onEdit = false;
  }

  update(c: CharacterModel) {
    this.onEdit = false;
    this.alert.openPanel({state: true, type: 'alert', message: 'Salvando...'});
    this.db.updateChar(c, this.chars.some(ch => ch.name === c.name)).subscribe(() => {
      this.alert.openPanel({state: true, type: 'sucess', message: 'Personagem alterado!'});
    });
  }
}
