import { Observable } from 'rxjs';
import { Paiement } from '../models/Paiement';

export interface IPaiementService {
  getPaiementsByDetteId(detteId: number): Observable<Paiement[]>;
  addPaiement(paiement: Paiement): Observable<Paiement>;
}
