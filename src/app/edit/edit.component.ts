import { Component, OnInit } from '@angular/core';
import { Arbeitszeit } from '../arbeitszeit';
import { Router, ActivatedRoute } from '@angular/router';
import { ArbeitszeitService } from '../arbeitszeit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private arbeitszeitService:ArbeitszeitService){}

  arbeitszeit: Arbeitszeit = {
   personalNr: 0,
   kalenderWoche: 0,
   vorname: "-",
   nachname: "-",
   datum: new Date(),
   startZeit: '-', 
   endZeit: '-',  
   pauseZeit: "-",
   insgesamt: "-",
   notiz: "-"
 }
 
 
 ngOnInit(): void {
   if(this.router.url != '/erstellen'){
     var personalNr = Number(this.activatedRoute.snapshot.paramMap.get('personalNr'))
     var arbeitszeitByPersonalNr = this.arbeitszeitService.getArbeitszeitById(personalNr)
     this.arbeitszeit = arbeitszeitByPersonalNr
   }
 }

 calculateTime() {
  if (
    this.arbeitszeit.startZeit.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) &&
    this.arbeitszeit.endZeit.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) &&
    this.arbeitszeit.pauseZeit.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
  ) {
    const startZeitSplitted = this.arbeitszeit.startZeit.split(':');
    const endZeitSplitted = this.arbeitszeit.endZeit.split(':');
    const pauseZeitSplitted = this.arbeitszeit.pauseZeit.split(':');

    const startZeitMinuten = Number(startZeitSplitted[0]) * 60 + Number(startZeitSplitted[1]);
    const endZeitMinuten = Number(endZeitSplitted[0]) * 60 + Number(endZeitSplitted[1]);
    const pauseMinuten = Number(pauseZeitSplitted[0]) * 60 + Number(pauseZeitSplitted[1]);

    let minuten = (endZeitMinuten - startZeitMinuten) - pauseMinuten;

    if (minuten < 0) {
      minuten += 1440; // Wenn ergebnis negativ ist addiere 24h dazu
    }

    this.arbeitszeit.insgesamt = Math.floor(minuten/60).toString().padStart(2, '0') + ':' + (minuten % 60).toString().padStart(2, '0');
    console.log(minuten)
  }
 }
 
 
 save(): void {
  
   var arbeitszeitByPersonalNr = this.arbeitszeitService.getArbeitszeitById(this.arbeitszeit.personalNr)
 
   if(arbeitszeitByPersonalNr == null || arbeitszeitByPersonalNr == undefined){
     this.arbeitszeitService.addArbeitszeit(this.arbeitszeit)
   } 
   else {
     this.arbeitszeitService.updateArbeitszeit(this.arbeitszeit)
   }
 
   this.router.navigate(['overview'])
 }
 
 get isDarkMode() {
   return this.arbeitszeitService.getIsDarkMode();
 }

 
 }
 


