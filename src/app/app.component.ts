import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { ArbeitszeitService } from './arbeitszeit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homeoffice Arbeitszeit';


  constructor(private arbeitszeitService: ArbeitszeitService) {}

  toggleDarkMode() {
    this.arbeitszeitService.toggleDarkMode();
    if(this.isDarkMode){
      document.body.style.backgroundColor = '#212529';

      } else {
        document.body.style.backgroundColor = '#fff';
      }
  }

  get isDarkMode() {
    return this.arbeitszeitService.getIsDarkMode();
  }

  
}




