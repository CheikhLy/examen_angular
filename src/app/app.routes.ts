import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { DetteComponent } from './pages/dette/dette.component';
import { AddPaiementComponent } from './pages/add-paiement/add-paiement.component';
import { AddDetteComponent } from './pages/add-dette/add-dette.component';

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
    },
    {
        path: 'clients/:id/add-dette',
        component: AddDetteComponent
    }

];
