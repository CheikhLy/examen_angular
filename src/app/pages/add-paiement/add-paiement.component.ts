import { Component, Input } from '@angular/core';
import { PaiementService } from '../../core/services/Impl/paiement.service';
import { Paiement } from '../../core/models/Paiement';
import { DetteService } from '../../core/services/Impl/dette.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-paiement',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-paiement.component.html',
  styleUrl: './add-paiement.component.css'
})
export class AddPaiementComponent {
  detteId!: number;
  montant: number = 0;

  constructor(private route: ActivatedRoute, private paiementService: PaiementService, private detteService: DetteService) {}

  ngOnInit(): void {
    this.detteId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ajouterPaiement(): void {
    const paiement: Paiement = {
      detteId: this.detteId,
      montant: this.montant,
      date: new Date().toISOString()
    };
    this.paiementService.addPaiement(paiement).subscribe(() => {
      this.detteService.majMontantPaye(this.detteId, this.montant).subscribe();
    });
    this.montant = 0;
  }
}
