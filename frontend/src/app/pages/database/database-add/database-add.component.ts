import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database.service';
import { EquipmentModel } from 'src/app/models/equipment-model';
import { AbilityModel } from 'src/app/models/ability-model';
import { AlertService } from 'src/app/components/alert/alert.service';

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
    abilities: [],
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

  constructor(private db: DatabaseService, private alertService: AlertService) { }

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
      this.alertService.openPanel({ state: true, type: 'error', message: 'Preencha todos os campos antes de enviar!' });
      return;
    }
    this.alertService.openPanel({ state: true, type: 'alert', message: 'Enviando para o servidor...' });
    this.character.currLife = this.character.life;
    this.character.currMana = this.character.mana;
    this.character.block.current = 5 + Number(this.character.strength) + Number(this.character.block.armorBonus) + Number(this.character.block.blockBonus);
    this.character.dodge.current = 5 + Number(this.character.agility) + Number(this.character.dodge.armorBonus) + Number(this.character.dodge.dodgeBonus);
    this.character.determination.current = 8 + Math.max(this.character.intelligence, this.character.will) + Number(this.character.determination.armorBonus) + Number(this.character.determination.determinationBonus);
    this.db.addCharacter(this.character, isPlayable).subscribe(() => {
      this.alertService.openPanel({ state: true, type: 'sucess', message: 'Adicionado!' });
    });
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

  equipSelected: EquipmentModel;
  confirmEquip: boolean;
  abiliSelected: AbilityModel;
  confirmAbili: boolean;

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
