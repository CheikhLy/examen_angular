import { Observable } from 'rxjs';
import { Dette } from '../models/Dette';
import { Client } from '../models/Client';

export interface IDetteService {
  getDettesByClientId(clientId: number): Observable<Client>;
  addDette(dette: Dette): Observable<Dette>;
  majMontantPaye(detteId: number, montant: number): Observable<Dette>;
}
