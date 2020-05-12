import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "burbank", component: BurbankComponent },
  { path: "chicago", component: ChicagoComponent },
  { path: "dallas", component: DallasComponent },
  { path: "washington", component: DcComponent },
  { path: "san jose", component: SanjoseComponent },
  { path: "seattle", component: SeattleComponent },
  { path: "home", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
