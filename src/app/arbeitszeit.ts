import { Time } from "@angular/common"
import { Arbeitszeiten } from "./mock-arbeitszeit"


  

export interface Arbeitszeit {
    personalNr: number
    kalenderWoche: number
    vorname: string
    nachname: string
    datum: Date
    startZeit: string; 
    endZeit: string; 
    pauseZeit: string;
    insgesamt: string;
    notiz: string;
}

