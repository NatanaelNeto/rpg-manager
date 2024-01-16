import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database.service';
import { EquipmentModel } from 'src/app/models/equipment-model';
import { AbilityModel } from 'src/app/models/ability-model';

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
    equipments: [],
    abilities: [
      {
        "name": "Guarda Defletora",
        "type": "Reação",
        "cost": "10 de mana",
        "requisites": "Portar, pelo menos, uma espada",
        "diff": 10,
        "description": "Você gira sua espada, usando ela para defletir projéteis ou golpes. Caso seja um golpe corpo a corpo, você causa 5 de dano."
      },
      {
        "name": "Guarda Defletora",
        "type": "Reação",
        "cost": "10 de mana",
        "requisites": "Portar, pelo menos, uma espada",
        "diff": 10,
        "description": "Você gira sua espada, usando ela para defletir projéteis ou golpes. Caso seja um golpe corpo a corpo, você causa 5 de dano."
      }
    ],
    block: {
      current: 0,
      armorBonus: -1,
      blockBonus: -1
    },
    dodge: {
      current: 0,
      armorBonus: -1,
      dodgeBonus: -1
    },
    determination: {
      current: 0,
      armorBonus: -1,
      determinationBonus: -1
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
    this.character.currLife = this.character.life;
    this.character.currMana = this.character.mana;
    this.character.block.current = 5 + this.character.strength + this.character.block.armorBonus + this.character.block.blockBonus;
    this.character.dodge.current = 5 + this.character.agility + this.character.dodge.armorBonus + this.character.dodge.dodgeBonus;
    this.character.determination.current = 5 + Math.max(this.character.intelligence, this.character.will) + this.character.determination.armorBonus + this.character.determination.determinationBonus;
    this.db.addCharacter(this.character, isPlayable).subscribe(() => console.log('Adicionado'));
  }

  addEquipment(equip: EquipmentModel) {
    this.panelEdit = 'none';
    this.character.equipments.push(equip);
  }
  addAbility(abili: AbilityModel) {
    this.panelEdit = 'none';
    this.character.abilities.push(abili);
  }

  setArmorBonus(event: any) {
    this.character.block.armorBonus = event.target.value;
    this.character.dodge.armorBonus = event.target.value;
    this.character.determination.armorBonus = event.target.value;

  }
}
