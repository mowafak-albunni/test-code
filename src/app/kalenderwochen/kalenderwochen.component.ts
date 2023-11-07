import { Component, OnInit, Input } from '@angular/core';
import { ArbeitszeitService } from '../arbeitszeit.service';
import { Arbeitszeiten } from '../mock-arbeitszeit';
import { Arbeitszeit } from '../arbeitszeit';

@Component({
  selector: 'app-kalenderwochen',
  templateUrl: './kalenderwochen.component.html',
  styleUrls: ['./kalenderwochen.component.css']
})
export class KalenderwochenComponent {
  arbeitszeiten = Arbeitszeiten
  arbeitszeit!: Arbeitszeit
  kwValue: number[] = Array.from({ length: 1 }, (_, index) => index + 1);
  dateValues: Date[] = Array.from({ length: 1 }, (_, index) => {
    const date = new Date(); // Erstellen Sie ein neues Datum
    date.setDate(date.getDate() + index); // Setzen Sie das Datum auf den nächsten Tag
    return date;
  });
  
  
  

  constructor(private arbeitszeitService: ArbeitszeitService) {}

  // arbeitszeiten : Arbeitszeit[] = []


  get isDarkMode() {
    return this.arbeitszeitService.getIsDarkMode();
  }
  
  isKwUsed(kalenderWoche: Number): boolean {
    return this.arbeitszeiten.some(arbeitszeit => arbeitszeit.kalenderWoche === kalenderWoche);
  }
  isDateUsed(datum: Date | String): boolean {
    return this.arbeitszeiten.some(arbeitszeit => arbeitszeit.datum === datum);
  }



/*
  isDateUsed(datum: Date | string): boolean {
    if (typeof datum === 'string') {
      // Wenn das Argument ein String ist, versuchen Sie, es in ein Date-Objekt umzuwandeln
      const dateParts = datum.split('.');
      if (dateParts.length === 2) {
        const day = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Monate im Date-Objekt sind 0-basiert
        datum = new Date(new Date().getFullYear(), month, day);
      } else {
        // Wenn der String nicht im erwarteten Format ist, ist es wahrscheinlich ein Fehler
        return false;
      }
    }
  
    // Jetzt können Sie sicher beide als Date-Objekte behandeln
    return this.arbeitszeiten.some(arbeitszeit => {
      if (datum instanceof Date) {
        return arbeitszeit.datum.getTime() === datum.getTime();
      }
      return false;
    });
  }
*/
  
  

}