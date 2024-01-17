import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbilityModel } from 'src/app/models/ability-model';
import { CharacterModel } from 'src/app/models/character-model';
import { EquipmentModel } from 'src/app/models/equipment-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  @Input() character: CharacterModel = {
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

  panelEdit: 'none' | 'ability' | 'equipment' = 'none';

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

  editChar() {
    this.updatedChar.emit(this.character);
  }

  cancelChar() {
    this.cancel.emit(true);

  }

  @Output() updatedChar: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
}
