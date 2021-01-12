import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { SidebarComponent } from './components/sidebars/sidebar/sidebar.component';
import { SidebarIconsComponent } from './components/sidebars/sidebar-icons/sidebar-icons.component';
import { SidebarEmailComponent } from './components/sidebars/sidebar-email/sidebar-email.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarIconsComponent,
    SidebarEmailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
