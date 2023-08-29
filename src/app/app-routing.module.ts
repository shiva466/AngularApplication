import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CarHomePageComponent } from './car-home-page/car-home-page.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'homePage', component: HomeComponent},
  {path: 'car/:id', component: CarHomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}