import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fcfa',
  standalone: true
})
export class FcfaPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    return `${value.toLocaleString('fr-FR')} FCFA`;
  }
}