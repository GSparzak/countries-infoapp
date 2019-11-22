import { trigger, animate, query, style, transition, animateChild } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    query('.countryInfo', [
      style({'height': 0})
    ]),
    query('.countryInfo', [
      animate(500, style('*'))
    ], {'delay': 100})
  ]),

  transition('* <=> *', [
    // query('table', [
    //   animateChild()
    // ])
    query(':enter', [
      style({'opacity': 0}),
    ]),
    query(':leave', [
      style({'opacity': 1}),
      animate(500, style({'opacity': 0}))
    ]),
    query(':enter', [
      animate(500, style({'opacity': 1}))
    ]),
  ])
]);

export const changeInfo = trigger('changeInfo', [
  transition('* <=> *', [
    animate(500, style({'opacity': 0.5})),
    animate(500, style({'opacity': 1}))
  ])
]);
