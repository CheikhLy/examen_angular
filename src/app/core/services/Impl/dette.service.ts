import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IDetteService } from '../IDetteSevice';
import { Dette } from '../../models/Dette';
import { Client } from '../../models/Client';

@Injectable({ providedIn: 'root' })
export class DetteService implements IDetteService {
  private apiUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  getDettesByClientId(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${clientId}`);
  }

  addDette(dette: Dette): Observable<Dette> {
    return this.http.post<Dette>(this.apiUrl, dette);
  }

  majMontantPaye(detteId: number, montant: number): Observable<Dette> {
    return this.http.get<Dette>(`${this.apiUrl}/${detteId}`).pipe(
      map(dette => {
        const updated = { ...dette, montantPaye: dette.montantPaye + montant };
        this.http.put(`${this.apiUrl}/${detteId}`, updated).subscribe();
        return updated;
      })
    );
  }
}