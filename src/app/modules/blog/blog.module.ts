import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './pages/articles/articles.component';
import { BlogRoutingModule } from './blog.router';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
