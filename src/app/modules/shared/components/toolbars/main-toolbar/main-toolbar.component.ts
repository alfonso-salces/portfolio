import { Component, OnInit, NgZone } from '@angular/core';
import { fadeInOut } from '../../animations/pf-animations';
import { LanguageService } from '../../../../../services/language/language.service';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'pf-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  animations: [fadeInOut]
})
export class MainToolbarComponent implements OnInit {

  showLanguages: boolean = false;
  languagesList: any[];
  currentLangObj: any;
  unSelectedLangs: any[];
  isToggled: boolean;
  private changeSubject$ = new Subject;

  constructor(protected zone: NgZone, protected langService: LanguageService) {
    this.onResizeScreen(window.innerWidth);
    this.changeSubject$.subscribe((e: any) => { 
      this.onResizeScreen(e.currentTarget.innerWidth);
    });
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'resize').pipe(
        debounceTime(100),
        distinctUntilChanged()).subscribe((e: any) => {
        this.zone.run(() => {
          this.changeSubject$.next(e);
        })
      })
    });
  }

  ngOnInit(): void { 
    this.setToggleLang();
    this.langService.getCurrentLangObservable().subscribe((lang) => {
      this.setToggleLang();
    });
  }

  toggleLanguages(): void {
    this.showLanguages = !this.showLanguages;
  }

  setToggleLang() {
    if(!this.languagesList) this.languagesList = this.langService.getLangList();
    const currentLang = this.langService.getCurrentLangString();
    this.currentLangObj = this.languagesList.find(value => value.lang === currentLang);
    this.unSelectedLangs = this.languagesList.filter(value => value.lang !== currentLang);
  }

  changeLanguage(lang: string) {
    this.langService.setLanguage(lang);
    this.showLanguages = false;
  }

  onToggleClick() {
    this.isToggled = !this.isToggled;
  }

  onResizeScreen(width: number) {
    if(width >= 768) this.isToggled = true
    else {
      this.isToggled = false;
      this.showLanguages = false;
    }
  }

}
