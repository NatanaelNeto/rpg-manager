import { AbilityModel } from "./ability-model";
import { EquipmentModel } from "./equipment-model";

export class CharacterModel {
  // Atributos Pessoais
  name: string;
  sex: 'F' | 'M';
  race: string;
  class: string;
  level: number;

  // Contadores
  life: number;
  currLife: number;
  mana: number;
  currMana: number;

  // Atributos
  strength: number;
  agility: number;
  intelligence: number;
  will: number;

  equipments: EquipmentModel[];
  abilities: AbilityModel[];

  block: {
    armorBonus: 0;
    blockBonus: 0;
  }

  dodge: {
    armorBonus: 0;
    blockBonus: 0;
  }

  location?: string;
  unified?: boolean = false;
  openMenu: boolean;
}
