import { AbilityModel } from "./ability-model";
import { EquipmentModel } from "./equipment-model";

export class CharacterModel {
  // Atributos Pessoais
  id?: number;
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
    current: number,
    armorBonus: number;
    blockBonus: number;
  }

  dodge: {
    current: number,
    armorBonus: number;
    dodgeBonus: number;
  }

  determination: {
    current: number,
    armorBonus: number;
    determinationBonus: number;
  }

  location?: string;
  unified?: boolean = false;
  openMenu: boolean;
}
