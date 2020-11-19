import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  { path: '', component: MovieComponent},
  { path: 'people', component: PeopleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
