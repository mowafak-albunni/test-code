import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';
import { HilfeComponent } from './hilfe/hilfe.component';
import { EditComponent } from './edit/edit.component';
import { InformationComponent } from './information/information.component';
import { KalenderwochenComponent } from './kalenderwochen/kalenderwochen.component';

const routes: Routes = [
  {
    path:'overview', component: OverviewComponent
  },
  {
    path:'', redirectTo:'overview', pathMatch:'full'
  },
  {
    path:'erstellen', component: CreateComponent
  },
  {
    path:'bearbeiten/:personalNr', component: EditComponent
  },
  {
    path:'help', component: HilfeComponent
  },
  {
    path:'information/:personalNr', component: InformationComponent
  },
  {
    path:'kalenderwochen', component: KalenderwochenComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
