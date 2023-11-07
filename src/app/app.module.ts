import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';

import { FormsModule } from '@angular/forms';
import { HilfeComponent } from './hilfe/hilfe.component';
import { EditComponent } from './edit/edit.component';
import { InformationComponent } from './information/information.component';
import { KalenderwochenComponent } from './kalenderwochen/kalenderwochen.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateComponent,
    HilfeComponent,
    EditComponent,
    InformationComponent,
    KalenderwochenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


