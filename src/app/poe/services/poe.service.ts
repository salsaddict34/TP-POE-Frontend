import { Injectable } from '@angular/core';
import { Poe } from '../types/poe.types';
import { IService } from '../../core/interfaces/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoeService implements IService<Poe> {
  private _poes: Array<Poe> = []

  constructor(
    private _httpClient: HttpClient
  ) { }

  add(item: Poe): Observable<Poe> {
    return this._httpClient.post<Poe>(
      'http://localhost:3000/poes',
      item
    )
  }

  findAll(): Observable<Poe[]> {
    return this._httpClient.get<Poe[]>(
      'http://localhost:3000/poes'
    )
      .pipe(
        map((poes: Poe[]) => {
          return poes.sort((poe1: Poe, poe2: Poe) => {
            return poe1.title.localeCompare(poe2.title)
          })
        })
      )
  }

}
