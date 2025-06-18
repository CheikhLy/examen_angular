import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetteService } from '../../core/services/Impl/dette.service';
import { Dette } from '../../core/models/Dette';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../core/models/Client';

@Component({
  selector: 'app-dette-list',
  templateUrl: './dette.component.html',
  styleUrls: ['./dette.component.css'],
  imports: [DetteComponent,CommonModule,FormsModule],

})
export class DetteComponent implements OnInit {
  clientId!: number;
  client?: Client;
  montant: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detteService: DetteService
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadDettes();
  }

  loadDettes(): void {
    this.detteService.getDettesByClientId(this.clientId).subscribe(data => {
      this.client = data;
    });
  }

  goToPaiement(dette: Dette): void {
    this.router.navigate(['/dette', dette.id, 'paiement']);
  }

  ajouterDette(): void {
    const nouvelleDette: Dette = {
      clientId: this.clientId,
      date: new Date().toISOString(),
      montantDette: this.montant,
      montantPaye: 0,
      montantRestant: this.montant
    };
  
    this.detteService.addDette(nouvelleDette).subscribe(() => {
      this.montant = 0;
      // Redirection vers la liste des dettes du client
      this.router.navigate(['/clients', this.clientId, 'dettes']);
    });
  }
  goToAddDette(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('clientId'));
    this.router.navigate(['/clients', this.clientId, 'add-dette']);
  }
}
