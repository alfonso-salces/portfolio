import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(protected langService: LanguageService) {}

  ngOnInit() {
    this.langService.initLanguage();
  }

}
