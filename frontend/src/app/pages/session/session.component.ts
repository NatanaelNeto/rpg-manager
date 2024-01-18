import { Component } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database/database.service';
import { AlertService } from 'src/app/components/alert/alert.service';
import { SceneModel } from 'src/app/models/scene-model';
import { SceneOrder } from 'src/app/models/scene-order-model';

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

  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = [];

  scenes: SceneModel[] = [];
  currScene: SceneModel = {
    name: 'Cena',
    scene: [],
  }

  toEdit: boolean;

  constructor(private db: DatabaseService, private alert: AlertService) {
    this.db.getAllCharacters().subscribe(c => this.chars = c);
    this.db.getAllEnemies().subscribe(e => this.enemies = e);
    this.db.getAllScenes().subscribe(s => this.scenes = s);
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

  setLife(value: number) {
    if (this.char.currLife + value < 0) {
      this.char.currLife = 0;
    }
    else if (this.char.currLife + value > this.char.life) {
      this.char.currLife = this.char.life;
    }
    else {
      this.char.currLife += value;
    }
    this.updateDB();
  }

  setMana(value: number) {
    if (this.char.currMana + value < 0) {
      this.char.currMana = 0;
    }
    else if (this.char.currMana + value > this.char.mana) {
      this.char.currMana = this.char.mana;
    }
    else {
      this.char.currMana += value;
    }
    this.updateDB();
  }

  editedChar(c: CharacterModel) {
    this.char = c;
    this.updateDB();
  }

  updateDB() {
    this.db.updateChar(this.char, this.chars.some(c => c.name == this.char.name)).subscribe(() => {
      this.alert.openPanel({ state: true, type: 'sucess', message: 'Atualizado!' });
      this.db.getAllCharacters().subscribe(c => this.chars = c);
      this.db.getAllEnemies().subscribe(e => this.enemies = e);
      this.db.getAllScenes().subscribe(s => this.scenes = s);
    });
  }

  editScene(s: SceneOrder[]) {
    this.currScene.scene = s;
    // this.db.updateScene(this.currScene).subscribe(() => {
    //   this.alert.openPanel({ state: true, type: 'sucess', message: 'Cena atualizada!' });
    // });
  }

  createNewScene() {
    this.db.addScene({ name: this.currScene.name, scene: this.currScene.scene }).subscribe(() => {
      this.alert.openPanel({ state: true, type: 'sucess', message: 'Cena salva!' });
      this.db.getAllCharacters().subscribe(c => this.chars = c);
      this.db.getAllEnemies().subscribe(e => this.enemies = e);
      this.db.getAllScenes().subscribe(s => this.scenes = s);
    });
  }

  saveScene() {
    if (this.currScene.name.length > 0) {
      if (this.currScene.id) {
        this.db.updateScene(this.currScene).subscribe(() => {
          this.alert.openPanel({ state: true, type: 'sucess', message: 'Cena atualizada!' });
          this.db.getAllCharacters().subscribe(c => this.chars = c);
          this.db.getAllEnemies().subscribe(e => this.enemies = e);
          this.db.getAllScenes().subscribe(s => this.scenes = s);
        });
      }
      else {
        this.db.addScene(this.currScene).subscribe(() => {
          this.alert.openPanel({ state: true, type: 'sucess', message: 'Cena salva!' });
          this.db.getAllCharacters().subscribe(c => this.chars = c);
          this.db.getAllEnemies().subscribe(e => this.enemies = e);
          this.db.getAllScenes().subscribe(s => this.scenes = s);
        });
      }
    }
    else {
      this.alert.openPanel({ state: true, type: 'error', message: 'A cena precisa de um nome' });
    }
  }
}
