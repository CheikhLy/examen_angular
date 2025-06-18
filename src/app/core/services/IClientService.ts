import { Observable } from 'rxjs';
import { Client } from '../models/Client';

export interface IClientService {
  getClients(): Observable<Client[]>;
  getClient(id: number): Observable<Client>;
}
