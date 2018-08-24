import { trigger, animate, state, style, transition } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  state('in', style({
    'opacity': 1,
    // height: '100%'
  })),
  transition('void => *', [
    style({
      'opacity': 0
    }),
    animate(2000)
  ]),
  transition('* => void', [
    animate(200, style({
      'opacity': 0
    }))
  ])
]);
