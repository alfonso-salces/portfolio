import { Component, OnInit } from '@angular/core';
import { SkillModel } from '../../models/skill.model';
import { defaultSkills } from '../../../shared/consts/default-skills.const';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  skills: SkillModel[];

  constructor() {
    this.skills = defaultSkills;
  }

  ngOnInit(): void {}
}
