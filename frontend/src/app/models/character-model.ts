import { AbilityModel } from "./ability-model";
import { EquipmentModel } from "./equipment-model";

export class CharacterModel {
  // Atributos Pessoais
  name: string;
  race: string;
  class: string;
  level: number;

  // Contadores
  life: number;
  mana: number;

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

  getBlock(): number {
    return 5 + this.strength + this.block.armorBonus + this.block.blockBonus;
  }

  getDodge(): number {
    return 5 + this.agility + this.dodge.armorBonus + this.dodge.blockBonus;
  }

  location?: string;
}