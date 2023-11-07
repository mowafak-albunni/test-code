import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Arbeitszeit } from '../arbeitszeit';
import { AppComponent } from '../app.component';
import { ArbeitszeitService } from '../arbeitszeit.service';
import { Arbeitszeiten } from '../mock-arbeitszeit';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  
  constructor(private arbeitszeitService:ArbeitszeitService) {
    
    
  }

  arbeitszeiten : Arbeitszeit[] = []

  ngOnInit(): void{
    this.arbeitszeiten = this.arbeitszeitService.getArbeitszeiten()
  }
  

  deleteAZ(arbeitszeit: Arbeitszeit) : void {
    this.arbeitszeitService.deleteAZ(arbeitszeit)
  }    

  get isDarkMode() {
    return this.arbeitszeitService.getIsDarkMode();
  }

  sortNachname(){
    this.arbeitszeitService.sortNachname()
  }
  sortVorname(){
    this.arbeitszeitService.sortVorname()
  }
  sortID(){
    this.arbeitszeitService.sortID()
  }
  sortKW(){
    this.arbeitszeitService.sortKW()
  }
  sortDate(){
    this.arbeitszeitService.sortDate()
  }
  test(arbeitszeit : Arbeitszeit) : void {
    if(window.confirm('Möchten Sie diesen Eintrag endgültig löschen?')){
      this.arbeitszeitService.deleteAZ(arbeitszeit)
    }
  }


}
  








