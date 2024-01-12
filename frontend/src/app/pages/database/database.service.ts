import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterModel } from 'src/app/models/character-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  private URL_API = 'http://localhost:3000/';

  public getAllCharacters(): Observable<CharacterModel[]> {
    console.log('Personagens');
    return this.http.get<CharacterModel[]>(`${this.URL_API}characters`);
  }

  public getAllEnemies(): Observable<CharacterModel[]> {
    console.log('Inimigos');
    return this.http.get<CharacterModel[]>(`${this.URL_API}enemies`);
  }

}
