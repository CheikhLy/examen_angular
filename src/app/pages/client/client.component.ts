import { Component, NgModule } from '@angular/core';
import { ClientService } from '../../core/services/Impl/client.service';
import { Client } from '../../core/models/Client';
import { DetteComponent } from '../dette/dette.component';
import { PaiementComponent } from '../paiement/paiement.component';
import { AddPaiementComponent } from '../add-paiement/add-paiement.component';
import { AddDetteComponent } from '../add-dette/add-dette.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  imports: [DetteComponent,PaiementComponent,AddPaiementComponent,AddDetteComponent,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => this.clients = data);
  }

  goToDettes(client: Client): void {
    this.router.navigate(['/clients', client.id, 'dettes']);
  }
}
