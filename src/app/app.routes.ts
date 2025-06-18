import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { DetteComponent } from './pages/dette/dette.component';
import { AddPaiementComponent } from './pages/add-paiement/add-paiement.component';

export const routes: Routes = [
    {
        path: '',
        component: ClientComponent,

    },
    {
        path: 'dette/:id/paiement',
        component: AddPaiementComponent
    },
    {
        path: 'clients/:id/dettes',
        component: DetteComponent
    }
];
