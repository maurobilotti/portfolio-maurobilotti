import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent, data: {animation: 'isRight'} },
  { path: 'about', component: AboutComponent, data: {animation: 'isRight'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'isRight'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
