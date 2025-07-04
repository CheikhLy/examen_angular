import { Paiement } from "./Paiement";

export interface Dette {
    id?: number;
    clientId: number;
    date: string;
    montantDette: number;
    montantPaye: number;
    montantRestant: number;
    paiement?: Paiement [];
  }