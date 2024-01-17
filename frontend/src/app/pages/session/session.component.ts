import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';

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
}
