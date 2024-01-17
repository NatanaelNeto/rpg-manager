import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { SceneOrder } from 'src/app/models/scene-order-model';

@Component({
  selector: 'app-session-sidebar',
  templateUrl: './session-sidebar.component.html',
  styleUrls: ['./session-sidebar.component.scss'],
})

export class SessionSidebarComponent {
  @Output() onSelectChar: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();
  scene: SceneOrder[] = [
    {
      init: 1,
      char: {
        "name": "Lyra Tuk",
        "sex": "F",
        "race": "Levent",
        "class": "Paladina",
        "level": 1,
        "life": 60,
        "currLife": 60,
        "mana": 60,
        "currMana": 60,
        "strength": 3,
        "agility": 3,
        "intelligence": 3,
        "will": 4,
        "equipments": [],
        "abilities": [
          {
            "name": "Asas Ancestrais",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "Voa e plana. Não pode parar em voo. Encontrão causa o dobro de dano,"
          },
          {
            "name": "Mestra de Armas I",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "+3 de dano ao atacar"
          },
          {
            "name": "Código da Lealdadde",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "Não pode atacar um combatente por um fio. Não permite lutas injustas. Não trai e não aceita traição. Recupera o dobro de PV e PM"
          },
          {
            "name": "Combate Tático",
            "type": "Reação",
            "cost": "-",
            "requisites": "",
            "diff": 0,
            "description": "Derrotar um oponente com um ataque corporal permite outro ataque (sem custos)"
          },
          {
            "name": "Justiça Final I",
            "type": "Ação",
            "cost": "25 de mana",
            "requisites": "-",
            "diff": 0,
            "description": "O ataque causa o dobro de dano (triplo para mortos-vivos, infernais, espíritos ou espectros)"
          }
        ],
        "block": {
          "current": 8,
          "armorBonus": 0,
          "blockBonus": 0
        },
        "dodge": {
          "current": 8,
          "armorBonus": 0,
          "dodgeBonus": 0
        },
        "determination": {
          "current": 12,
          "armorBonus": 0,
          "determinationBonus": 0
        },
        "openMenu": false,
        "unified": true,
        "id": 1
      },
    },
    {
      init: 18,
      char: {
        "name": "Lyra Tuk Teste",
        "sex": "F",
        "race": "Levent",
        "class": "Paladina",
        "level": 1,
        "life": 60,
        "currLife": 60,
        "mana": 60,
        "currMana": 60,
        "strength": 3,
        "agility": 3,
        "intelligence": 3,
        "will": 4,
        "equipments": [],
        "abilities": [
          {
            "name": "Asas Ancestrais",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "Voa e plana. Não pode parar em voo. Encontrão causa o dobro de dano,"
          },
          {
            "name": "Mestra de Armas I",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "+3 de dano ao atacar"
          },
          {
            "name": "Código da Lealdadde",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "Não pode atacar um combatente por um fio. Não permite lutas injustas. Não trai e não aceita traição. Recupera o dobro de PV e PM"
          },
          {
            "name": "Combate Tático",
            "type": "Reação",
            "cost": "-",
            "requisites": "",
            "diff": 0,
            "description": "Derrotar um oponente com um ataque corporal permite outro ataque (sem custos)"
          },
          {
            "name": "Justiça Final I",
            "type": "Ação",
            "cost": "25 de mana",
            "requisites": "-",
            "diff": 0,
            "description": "O ataque causa o dobro de dano (triplo para mortos-vivos, infernais, espíritos ou espectros)"
          }
        ],
        "block": {
          "current": 8,
          "armorBonus": 0,
          "blockBonus": 0
        },
        "dodge": {
          "current": 8,
          "armorBonus": 0,
          "dodgeBonus": 0
        },
        "determination": {
          "current": 12,
          "armorBonus": 0,
          "determinationBonus": 0
        },
        "openMenu": false,
        "unified": true,
        "id": 1
      },
    },
    {
      init: 7,
      char: {
        "name": "Lyra Tuk Outro Teste",
        "sex": "F",
        "race": "Levent",
        "class": "Paladina",
        "level": 1,
        "life": 60,
        "currLife": 60,
        "mana": 60,
        "currMana": 60,
        "strength": 3,
        "agility": 3,
        "intelligence": 3,
        "will": 4,
        "equipments": [],
        "abilities": [
          {
            "name": "Asas Ancestrais",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "Voa e plana. Não pode parar em voo. Encontrão causa o dobro de dano,"
          },
          {
            "name": "Mestra de Armas I",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "+3 de dano ao atacar"
          },
          {
            "name": "Código da Lealdadde",
            "type": "Suporte",
            "cost": "-",
            "requisites": "-",
            "diff": 0,
            "description": "Não pode atacar um combatente por um fio. Não permite lutas injustas. Não trai e não aceita traição. Recupera o dobro de PV e PM"
          },
          {
            "name": "Combate Tático",
            "type": "Reação",
            "cost": "-",
            "requisites": "",
            "diff": 0,
            "description": "Derrotar um oponente com um ataque corporal permite outro ataque (sem custos)"
          },
          {
            "name": "Justiça Final I",
            "type": "Ação",
            "cost": "25 de mana",
            "requisites": "-",
            "diff": 0,
            "description": "O ataque causa o dobro de dano (triplo para mortos-vivos, infernais, espíritos ou espectros)"
          }
        ],
        "block": {
          "current": 8,
          "armorBonus": 0,
          "blockBonus": 0
        },
        "dodge": {
          "current": 8,
          "armorBonus": 0,
          "dodgeBonus": 0
        },
        "determination": {
          "current": 12,
          "armorBonus": 0,
          "determinationBonus": 0
        },
        "openMenu": false,
        "unified": true,
        "id": 1
      },
    },

  ];

  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = [];

  getOrderedScene() {
    return this.scene.sort((a, b) => b.init - a.init);
  }

  setChar(c: CharacterModel) {
    this.onSelectChar.emit(c);
  }
}
