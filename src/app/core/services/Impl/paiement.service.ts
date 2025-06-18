import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaiementService } from '../IPaiementService';
import { Paiement } from '../../models/Paiement';

@Injectable({ providedIn: 'root' })
export class PaiementService implements IPaiementService {
  private apiUrl = 'http://localhost:3000/paiements';

  constructor(private http: HttpClient) {}

  getPaiementsByDetteId(detteId: number): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(`${this.apiUrl}?detteId=${detteId}`);
  }

  addPaiement(paiement: Paiement): Observable<Paiement> {
    return this.http.post<Paiement>(this.apiUrl, paiement);
  }
}