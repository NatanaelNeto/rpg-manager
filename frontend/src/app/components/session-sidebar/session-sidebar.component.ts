import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { SceneOrder } from 'src/app/models/scene-order-model';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-session-sidebar',
  templateUrl: './session-sidebar.component.html',
  styleUrls: ['./session-sidebar.component.scss'],
})

export class SessionSidebarComponent {
  @Input() scene: SceneOrder[] = [];

  @Output() onSelectChar: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();
  @Output() onSceneEdit: EventEmitter<SceneOrder[]> = new EventEmitter<SceneOrder[]>();

  toSelect: boolean = false;

  selectedChar: CharacterModel;

  constructor(private alert: AlertService) { }

  getOrderedScene() {
    return this.scene.sort((a, b) => b.init - a.init);
  }

  setChar(c: CharacterModel) {
    this.selectedChar = c;
    this.onSelectChar.emit(c);
  }

  removeSelectedChar() {
    if (this.selectedChar) {
      this.scene = this.scene.filter(c => c.char.name != this.selectedChar.name);
      this.onSceneEdit.emit(this.scene);
      this.alert.openPanel({ state: true, type: 'sucess', message: `${this.selectedChar.name} foi jogado no mar do esquecimento` });
    }
    else {
      this.alert.openPanel({ state: true, type: 'error', message: 'Ninguém pra ser excluído da rodinha' });
    }
  }

  cancelSelect() {
    this.toSelect = false;
  }

  addChar(char: SceneOrder) {
    if (!char.char.unified) {
      let i = 1;
      while (this.scene.some(s => s.char.name.endsWith(` ${i}`))) {
        i += 1;
      }
      char.char.name += ` ${i}`;
    }
    this.scene.push(char);
    this.toSelect = false;
    this.onSceneEdit.emit(this.scene);
    this.alert.openPanel({ state: true, type: 'sucess', message: `Prepare-se para a encrenca, ${char.char.name}!` });
  }
}
