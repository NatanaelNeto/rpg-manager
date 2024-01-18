import { Component } from '@angular/core';
import { AlertService } from 'src/app/components/alert/alert.service';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-database-delete',
  templateUrl: './database-delete.component.html',
  styleUrls: ['./database-delete.component.scss'],
})
export class DatabaseDeleteComponent {
  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = [];

  confirm: boolean;

  selectedChar: CharacterModel;

  constructor(private db: DatabaseService, private alert: AlertService) {
    this.db.getAllCharacters().subscribe(c => this.chars = c);
    this.db.getAllEnemies().subscribe(e => this.enemies = e);
  }

  deleteChar(isPlayable: boolean) {
    this.confirm = false;
    this.alert.openPanel({ state: true, type: 'alert', message: 'Excluindo...' });
    this.db.deleteChar(this.selectedChar.id!, isPlayable).subscribe(() => {
      this.alert.openPanel({ state: true, type: 'sucess', message: 'Vai deixar saudades...' });
      this.db.getAllCharacters().subscribe(c => this.chars = c);
      this.db.getAllEnemies().subscribe(e => this.enemies = e);
    })
  }

  selectChar(char: CharacterModel) {
    if (!this.confirm) {
      this.confirm = true;
      this.selectedChar = char;
      return;
    }
    else if (this.selectedChar.name != char.name) {
      this.selectedChar = char;
      return;
    }
    this.confirm = false;
  }
}
