import { Dette } from "./Dette";

export interface Client {
    id?: number;
    nom: string;
    telephone: string;
    adresse: string;
    dettes?: Dette[]
  }
