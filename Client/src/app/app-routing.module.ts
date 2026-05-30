import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryComponent } from './gry/gry.component';
import { FormularzComponent } from './formularz/formularz.component';

const routes: Routes = [
  { path: 'gry', component: GryComponent },
  { path: 'dodawanie', component: FormularzComponent },
  { path: 'gry/:id', component: FormularzComponent },
  { path: '', redirectTo: 'gry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
