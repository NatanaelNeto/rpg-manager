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
    return this.http.get<CharacterModel[]>(`${this.URL_API}characters`);
  }

  public getAllEnemies(): Observable<CharacterModel[]> {
    return this.http.get<CharacterModel[]>(`${this.URL_API}enemies`);
  }

  public addCharacter(character: CharacterModel, isPlayable: boolean) {
    return this.http.post(`${this.URL_API}${isPlayable ? 'characters' : 'enemies'}`, character);
  }

}
