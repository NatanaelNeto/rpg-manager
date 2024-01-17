import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbilityModel } from 'src/app/models/ability-model';
import { CharacterModel } from 'src/app/models/character-model';
import { EquipmentModel } from 'src/app/models/equipment-model';
import { AlertService } from '../alert/alert.service';

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

  @Output() updatedChar: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  panelEdit: 'none' | 'ability' | 'equipment' = 'none';

  equipSelected: EquipmentModel;
  confirmEquip: boolean;
  abiliSelected: AbilityModel;
  confirmAbili: boolean;


  constructor(private alertService: AlertService) { }
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
    this.character.currLife = this.character.life;
    this.character.currMana = this.character.mana;
    this.character.block.current = 5 + Number(this.character.strength) + Number(this.character.block.armorBonus) + Number(this.character.block.blockBonus);
    this.character.dodge.current = 5 + Number(this.character.agility) + Number(this.character.dodge.armorBonus) + Number(this.character.dodge.dodgeBonus);
    this.character.determination.current = 8 + Math.max(this.character.intelligence, this.character.will) + Number(this.character.determination.armorBonus) + Number(this.character.determination.determinationBonus);
    this.updatedChar.emit(this.character);
  }

  cancelChar() {
    this.cancel.emit(true);
  }


  setEquip(e: EquipmentModel) {
    if (!this.confirmEquip) {
      this.confirmEquip = true;
      this.equipSelected = e;
      return;
    }
    else if (this.equipSelected != e) {
      this.equipSelected = e;
      return;
    }
    this.confirmEquip = false;
  }

  deleteEquip() {
    this.confirmEquip = false;
    this.character.equipments = this.character.equipments.filter(e => e.name != this.equipSelected.name);
    this.alertService.openPanel({ state: true, type: 'sucess', message: 'Equipamento perdido para sempre' });
  }

  setAbili(a: AbilityModel) {
    if (!this.confirmAbili) {
      this.confirmAbili = true;
      this.abiliSelected = a;
      return;
    }
    else if (this.abiliSelected != a) {
      this.abiliSelected = a;
      return;
    }
    this.confirmAbili = false;
  }

  deleteAbili() {
    this.confirmAbili = false;
    this.character.abilities = this.character.abilities.filter(e => e.name != this.abiliSelected.name);
    this.alertService.openPanel({ state: true, type: 'sucess', message: 'Habilidade perdida para sempre' });
  }
}
