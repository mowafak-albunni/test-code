import { Component, OnInit } from '@angular/core';
import { Arbeitszeit } from '../arbeitszeit';
import { Router, ActivatedRoute } from '@angular/router';
import { ArbeitszeitService } from '../arbeitszeit.service';

@Component({
  selector: 'app-hilfe',
  templateUrl: './hilfe.component.html',
  styleUrls: ['./hilfe.component.css']
})
export class HilfeComponent {


  constructor(private arbeitszeitService:ArbeitszeitService) {
  }



  get isDarkMode() {
    return this.arbeitszeitService.getIsDarkMode();
  }
}
