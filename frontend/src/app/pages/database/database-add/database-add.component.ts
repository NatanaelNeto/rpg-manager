import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database.service';
import { EquipmentModel } from 'src/app/models/equipment-model';

@Component({
  selector: 'app-database-add',
  templateUrl: './database-add.component.html',
  styleUrls: ['./database-add.component.scss'],
})
export class DatabaseAddComponent {
  character: CharacterModel = {
    name: '',
    sex: 'F',
    race: '',
    class: '',
    level: -1,
    life: -1,
    currLife: 0,
    mana: -1,
    currMana: 0,
    strength: -1,
    agility: -1,
    intelligence: -1,
    will: -1,
    equipments: [{
      name: 'Teste',
      type: 'Arma à Distância',
      description: 'Arco simples para ataque à distância',
      price: '200 moedas de prata',
      damage: '-',
      fn: 2,
      effects: '-'
    }],
    abilities: [],
    block: {
      armorBonus: 0,
      blockBonus: 0
    },
    dodge: {
      armorBonus: 0,
      blockBonus: 0
    },
    openMenu: false,
    unified: true
  }

  panelEdit: 'none' | 'equipment' | 'ability' = 'none';

  constructor(private db: DatabaseService) { }

  addChar(isPlayable: boolean) {
    if (this.character.name.length < 0 ||
      this.character.race.length < 0 ||
      this.character.class.length < 0 ||
      this.character.level < 0 ||
      this.character.life < 0 ||
      this.character.mana < 0 ||
      this.character.strength < 0 ||
      this.character.agility < 0 ||
      this.character.intelligence < 0 ||
      this.character.will < 0) {
      console.log('Erro');
      return;
    }
    console.log('Salvou');
    this.db.addCharacter(this.character, isPlayable).subscribe(() => console.log('Adicionado'));
  }

  addEquipment(equip: EquipmentModel) {
    console.log('Entrou');
    this.panelEdit = 'none';
    this.character.equipments.push(equip);
  }
}
