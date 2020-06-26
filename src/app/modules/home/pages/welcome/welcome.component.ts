import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { SkillModel } from '../../models/skill.model';
import { defaultSkills } from '../../../shared/consts/default-skills.const';
import { LanguageService } from '../../../../services/language/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {

  skills: SkillModel[];
  showFab: boolean = true;
  currentLangSubscription: Subscription = new Subscription();

  @ViewChild("scrollDiv", {static: true}) content: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  constructor(protected languageService: LanguageService) {
    this.skills = defaultSkills;
    this.checkScroll();
    const currentLang = this.languageService.getCurrentLangString();
    this.setSkillsTranslation(this.languageService.getCurrentTranslation(currentLang)[currentLang]);
    this.currentLangSubscription = this.languageService.getCurrentLangObservable().subscribe(value => {
      this.setSkillsTranslation(value.translations);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.currentLangSubscription.unsubscribe();
  }

  scrollTop(): void {
    this.content.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }

  checkScroll(): void {
    if(document.documentElement.scrollTop >= 200) this.showFab = true;
    else this.showFab = false;
  }

  setSkillsTranslation(translations: any): void {
    this.skills = defaultSkills.map(skill => {
      skill.description = translations.public.skill[skill.key];
      return skill;
    });
  }
}
