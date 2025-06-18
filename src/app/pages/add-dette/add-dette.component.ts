import { Component, Input } from '@angular/core';
import { DetteService } from '../../core/services/Impl/dette.service';
import { Dette } from '../../core/models/Dette';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dette',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-dette.component.html',
  styleUrl: './add-dette.component.css'
})
export class AddDetteComponent {
  @Input() clientId!: number;
  montant: number = 0;
  // ngOnInit(): void {
  //   console.log(this.clientId);
  // }

  constructor(private detteService: DetteService, private route: ActivatedRoute) {}

  ajouterDette(clientId: number): void {
    console.log(clientId)
    const dette: Dette = {
      clientId:Number(this.route.snapshot.paramMap.get('clientId')),
      date: new Date().toISOString(),
      montantDette: this.montant,
      montantPaye: 0,
      montantRestant: this.montant
    };
    this.detteService.addDette(dette,clientId).subscribe();
    this.montant = 0;

  }
}
