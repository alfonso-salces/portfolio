import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeRoutingModule } from './home.router';
import { SkillsComponent } from './components/skills/skills.component';
import { SharedModule } from '../shared/shared.module';
import { TranslatedModule } from '../shared/translated.module';
import { MaterialModule } from '../shared/material.module';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { WorksComponent } from './components/works/works.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    WelcomeComponent,
    SkillsComponent,
    TechnologiesComponent,
    WorksComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslatedModule,
    MaterialModule
  ],
})
export class HomeModule { }
