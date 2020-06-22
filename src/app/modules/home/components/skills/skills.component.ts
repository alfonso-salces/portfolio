import { Component, OnInit, Input } from '@angular/core';
import { SkillModel } from '../../models/skill.model';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent implements OnInit {

  @Input() skills: SkillModel[];

  constructor() {}

  ngOnInit(): void {}
}
