import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  langList: any[] = environment.languages;

  constructor(protected translateService: TranslateService) { }

  initLanguage() {
    const currentLang = localStorage.getItem('currentLang');
    this.translateService.addLangs(this.langList.map(value => value.lang));
    if(!currentLang || currentLang === '') {
      localStorage.setItem('currentLang', 'es');
      return this.translateService.use('es');
    }
    return this.translateService.use(currentLang);
  }

  setLanguage(lang: string): void {
    localStorage.setItem('currentLang', lang);
    this.translateService.use(lang);
  }

  getCurrentLangString(): string {
    return this.translateService.currentLang;
  }

  getCurrentLangObservable(): Observable<any> {
    return this.translateService.onLangChange;
  }

  getLangList(): any[] {
    return this.langList;
  }

  getTranslation(lang: string): Observable<any> {
    return this.translateService.getTranslation(lang);
  }
}
