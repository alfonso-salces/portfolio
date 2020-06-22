import { trigger, style, animate, transition, state } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0.1 }),
    animate('0.5s ease-in')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ opacity: 0 }))
  ]),
]);

export const enterLeave = trigger('EnterLeave', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('0.5s ease-in')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
  ]),
]);

export const slideInOut = trigger('slideInOut', [
  state('in', style({
    overflow: 'hidden',
    height: '0px',
  })),
  state('out', style({
    overflow: 'hidden',
    height: '*',
  })),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out'))
]);