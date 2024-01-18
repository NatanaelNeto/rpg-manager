import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database/database.service';
import { AlertService } from 'src/app/components/alert/alert.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent {
  char: CharacterModel = {
    name: '',
    sex: 'M',
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

  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = [];

  toEdit: boolean;

  constructor(private db: DatabaseService, private alert: AlertService) {
    this.db.getAllCharacters().subscribe(c => this.chars = c);
    this.db.getAllEnemies().subscribe(e => this.enemies = e);
  }

  setMainChar(c: CharacterModel) {
    this.char = c;
  }

  setBackClass(i: number) {
    if (i <= 1) return 'red';
    else if (i <= 3) return 'orange';
    else if (i <= 5) return 'yellow';
    else if (i <= 10) return 'green';
    return 'blue';
  }

  setLife(value: number) {
    if(this.char.currLife + value < 0) {
      this.char.currLife = 0;
    }
    else if(this.char.currLife + value > this.char.life) {
      this.char.currLife = this.char.life;
    }
    else {
      this.char.currLife += value;
    }
    this.updateDB();
  }

  setMana(value: number) {
    if(this.char.currMana + value < 0) {
      this.char.currMana = 0;
    }
    else if(this.char.currMana + value > this.char.mana) {
      this.char.currMana = this.char.mana;
    }
    else {
      this.char.currMana += value;
    }
    this.updateDB();
  }

  editedChar(c: CharacterModel) {
    this.char = c;
    this.updateDB();
  }

  updateDB() {
    this.db.updateChar(this.char, this.chars.some(c => c.name == this.char.name)).subscribe(() => {
      this.alert.openPanel({state: true, type: 'sucess', message: 'Atualizado!'});
      this.db.getAllCharacters().subscribe(c => this.chars = c);
    this.db.getAllEnemies().subscribe(e => this.enemies = e);
    });
  }
}
