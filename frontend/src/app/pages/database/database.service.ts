import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CharacterModel } from 'src/app/models/character-model';
import { Observable, catchError, throwError } from 'rxjs';
import { SceneModel } from 'src/app/models/scene-model';

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

  public addCharacter(character: CharacterModel, isPlayable: boolean): Observable<CharacterModel> {
    return this.http.post<CharacterModel>(`${this.URL_API}${isPlayable ? 'characters' : 'enemies'}`, character);
  }

  public deleteChar(id: number, isPlayable: boolean): Observable<CharacterModel> {
    return this.http.delete<CharacterModel>(`${this.URL_API}${isPlayable ? 'characters' : 'enemies'}/${id}`);
  }

  public updateChar(char: CharacterModel, isPlayable: boolean): Observable<CharacterModel> {
    return this.http.put<CharacterModel>(`${this.URL_API}${isPlayable ? 'characters' : 'enemies'}/${char.id}`, char)
  }

  public getAllScenes(): Observable<SceneModel[]> {
    return this.http.get<SceneModel[]>(`${this.URL_API}scenes`);
  }

  public addScene(scene: SceneModel): Observable<SceneModel> {
    return this.http.post<SceneModel>(`${this.URL_API}scenes`, scene);
  }

  public deleteScene(sceneId: number): Observable<SceneModel> {
    return this.http.delete<SceneModel>(`${this.URL_API}scenes/${sceneId}`);
  }

  public updateScene(scene: SceneModel): Observable<SceneModel> {
    return this.http.put<SceneModel>(`${this.URL_API}scenes/${scene.id}`, scene);
  }

}
