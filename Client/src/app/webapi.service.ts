import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GraClass } from './classes/gra.class';
import { GetDataInterface } from './interfaces/get-data.interface';
import { FormSubmitInterface } from './interfaces/form-submit.interface';

@Injectable()
export class WebapiService implements GetDataInterface, FormSubmitInterface {
  private readonly url = 'http://localhost:5106/api/gry';

  constructor(private http: HttpClient) {}

  //GET(strona+filtr)
  Get(strona?: number, rozmiarStrony?: number, tytul?: string): Observable<GraClass[]> {
    let params = new HttpParams();
    if (strona != null)       params = params.set('strona', strona);
    if (rozmiarStrony != null) params = params.set('rozmiarStrony', rozmiarStrony);
    if (tytul)                params = params.set('tytul', tytul);
    return this.http.get<GraClass[]>(this.url, { params });
  }

  //GET(ID)
  GetByID(id: number): Observable<GraClass> {
    return this.http.get<GraClass>(`${this.url}/${id}`);
  }

  //POST
  Post(nazwa: string, cena: number, data: Date): Observable<boolean> {
    return this.http.post<boolean>(this.url, {
      tytul: nazwa,
      cena: cena,
      dataPremiery: data
    });
  }

  //PUT
  Put(id: number, nazwa: string, cena: number, data: Date): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/${id}`, {
      tytul: nazwa,
      cena: cena,
      dataPremiery: data
    });
  }

  //DELETE
  Delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }
}