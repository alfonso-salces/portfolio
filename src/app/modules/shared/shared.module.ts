import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './components/buttons/simple-button/simple-button.component';
import { MainToolbarComponent } from './components/toolbars/main-toolbar/main-toolbar.component';
import { MaterialModule } from './material.module';
import { BasicCardComponent } from './components/cards/basic/basic-card.component';
import { TranslatedModule } from './translated.module';

@NgModule({
  declarations: [
    SimpleButtonComponent, 
    MainToolbarComponent,
    BasicCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslatedModule
  ],
  exports: [
    SimpleButtonComponent, 
    MainToolbarComponent,
    BasicCardComponent,
  ]
})
export class SharedModule { }