import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'basic-card-component',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
})
export class BasicCardComponent implements OnInit {

  @Input() config: any;

  constructor() {}

  ngOnInit(): void {}
}