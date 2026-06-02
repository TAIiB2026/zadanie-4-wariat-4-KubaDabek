import { Component, inject } from '@angular/core';
import { GET_DATA_TOKEN } from '../tokens/get-data.token';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'taiib2-gry',
  standalone: false,
  templateUrl: './gry.component.html',
  styles: ``
})
export class GryComponent {
  private readonly service = inject(GET_DATA_TOKEN);
  private readonly webapiService = inject(WebapiService);

  public strona = 1;
  public rozmiarStrony = 10;
  public filtrTytul = '';

  public data$ = this.wczytaj();

  wczytaj() {
    return this.service.Get(this.strona, this.rozmiarStrony, this.filtrTytul);
  }

  odswiezListe() {
    this.data$ = this.wczytaj();
  }

  usun(id: number) {
    if (!confirm('Czy chcesz usunąć grę?')) return;
    this.webapiService.Delete(id).subscribe({
      next: () => this.odswiezListe(),
      error: () => alert('Błąd')
    });
  }
}