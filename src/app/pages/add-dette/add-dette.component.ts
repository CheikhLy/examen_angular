import { Component, Input } from '@angular/core';
import { DetteService } from '../../core/services/Impl/dette.service';
import { Dette } from '../../core/models/Dette';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-dette',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-dette.component.html',
  styleUrl: './add-dette.component.css'
})
export class AddDetteComponent {
  @Input() clientId!: number;
  montant: number = 0;

  constructor(private detteService: DetteService) {}

  ajouterDette(): void {
    const dette: Dette = {
      clientId: this.clientId,
      date: new Date().toISOString(),
      montantDette: this.montant,
      montantPaye: 0,
      montantRestant: this.montant
    };
    this.detteService.addDette(dette).subscribe();
    this.montant = 0;
  }
}
