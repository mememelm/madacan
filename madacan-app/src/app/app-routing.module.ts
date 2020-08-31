import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './application/home/home.component';
import { RegisterComponent } from './application/modal/register/register.component';
import { ConnexionComponent } from './application/connexion/connexion.component';
import { FormationComponent } from './application/formation/formation.component';
import { ExerciseComponent } from './application/exercise/exercise.component';
import { TestComponent } from './application/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
