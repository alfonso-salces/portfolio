import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TechnologyModel } from '../../models/technology.model';
@Component({
  selector: 'pf-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit, OnDestroy {

  @Input() technologies: TechnologyModel[];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

}