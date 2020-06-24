import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SkillModel } from '../../models/skill.model';
import { defaultSkills } from '../../../shared/consts/default-skills.const';
import { LanguageService } from '../../../../services/language/language.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  skills: SkillModel[];
  showFab: boolean = true;
  @ViewChild("scrollDiv", {static: true}) content: ElementRef;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.checkScroll();
  }

  constructor(protected languageService: LanguageService) {
    this.skills = defaultSkills;
    this.checkScroll();
    this.languageService.getCurrentLangObservable().subscribe(value => {
      this.languageService.getTranslation(value.lang).subscribe(res => {
        this.skills = defaultSkills.map(skill => {
          skill.description = res.public.skill[skill.key];
          return skill;
        });
      });
    });
  }

  ngOnInit(): void {}

  scrollTop() {
    this.content.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }

  checkScroll() {
    if(document.documentElement.scrollTop >= 200) this.showFab = true;
    else this.showFab = false;
  }
}
