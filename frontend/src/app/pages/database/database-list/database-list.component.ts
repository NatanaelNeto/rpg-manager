import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/models/character-model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.scss'],
})
export class DatabaseListComponent implements OnInit {
  chars: CharacterModel[] = [];
  enemies: CharacterModel[] = []

  constructor (private db: DatabaseService) {
    this.db.getAllCharacters().subscribe(c => this.chars = c);
    this.db.getAllEnemies().subscribe(e => this.enemies = e);

  }
  ngOnInit(): void {
  }
}
