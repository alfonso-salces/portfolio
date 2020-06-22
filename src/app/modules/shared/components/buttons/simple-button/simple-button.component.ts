import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pf-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  @Input() text: string = 'Default';
  @Input() color: string = 'primary';
  @Input() class: string = 'button__w-50';
  

  constructor() { }

  ngOnInit(): void {
  }

}
