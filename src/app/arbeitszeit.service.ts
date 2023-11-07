import { Injectable } from '@angular/core';
import { Arbeitszeiten } from './mock-arbeitszeit';
import { Arbeitszeit } from './arbeitszeit';


@Injectable({
  providedIn: 'root'
})
export class ArbeitszeitService {
   erfolgreich: boolean = false;

  
  


  constructor() { }

  

  getArbeitszeiten() : Arbeitszeit[]{
    return Arbeitszeiten
  }
  // Eintrag Löschen
  deleteAZ(arbeitszeit: Arbeitszeit) : void {
    var index = Arbeitszeiten.indexOf(arbeitszeit)
    Arbeitszeiten.splice(index,1) 
  }    
  
  getArbeitszeitById(personalNr: number): Arbeitszeit{
    var arbeitszeitByPersonalNr = Arbeitszeiten.find(x => x.personalNr == personalNr)!
    return arbeitszeitByPersonalNr
  }
  
  addArbeitszeit(arbeitszeit: Arbeitszeit): void{
    Arbeitszeiten.push(arbeitszeit)  
  }

  updateArbeitszeit(arbeitszeit:Arbeitszeit):void {
    var currentArbeitszeit = this.getArbeitszeitById(arbeitszeit.personalNr)
    currentArbeitszeit = arbeitszeit
  }
  
  private isDarkMode: boolean = false;
  
  getIsDarkMode() {
    return this.isDarkMode;
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
  
  sortNachname(){
    Arbeitszeiten.sort((a, b) => a.nachname.localeCompare(b.nachname)); //Sortiert die Nachnamen A-Z
  }
  sortVorname(){
    Arbeitszeiten.sort((a, b) => a.vorname.localeCompare(b.vorname)); //Sortiert die Nachnamen A-Z
  }
  sortID(){
    Arbeitszeiten.sort((a, b) => a.personalNr - b.personalNr); //sortiert die Raumnummern von 0-->100
  }
  sortKW(){
    Arbeitszeiten.sort((a, b) => a.kalenderWoche - b.kalenderWoche); //sortiert die Raumnummern von 0-->100
  }
  sortDate() {
    Arbeitszeiten.sort((a, b) => {
      const dateA = new Date(a.datum);
      const dateB = new Date(b.datum);
      return dateA.getTime() - dateB.getTime();
    });
  }
  


  // getNameByPersonalNr(arbeitszeit: Arbeitszeit){
  //   if (arbeitszeit.personalNr === 6389){
  //     arbeitszeit.vorname = "Marcel"
  //     arbeitszeit.nachname = "Maier"
  //     this.erfolgreich = true;
  //   } else if (arbeitszeit.personalNr === 595){
  //     arbeitszeit.vorname = "Mouafak"
  //     arbeitszeit.nachname = "Al Bunni"
  //     this.erfolgreich = true;
  //   }  
  // }

}


