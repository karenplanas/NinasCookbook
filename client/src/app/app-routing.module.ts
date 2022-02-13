import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path:'new-recipe', component: NewRecipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }