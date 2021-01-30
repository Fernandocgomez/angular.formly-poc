import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

const animationSpeedTransition = ".75s"; 

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
    optional: true,
  }),
  query(':leave', [style({ display: 'none' })]),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(-100%)' }),
        animate( `${animationSpeedTransition} ease-out`, style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate(`${animationSpeedTransition} ease-out`, style({ transform: 'translateX(100%)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
    optional: true,
  }),
  query(':leave', [style({ display: 'none' })]),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)' }),
        animate(`${animationSpeedTransition} ease-out`, style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate(`${animationSpeedTransition} ease-out`, style({ transform: 'translateX(-100%)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

export const slider = trigger('animRoutes', [
  transition(':increment', right),
  transition(':decrement', left),
]);
