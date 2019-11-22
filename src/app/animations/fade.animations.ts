import { trigger, animate, style, query, transition, stagger } from '@angular/animations';

export const fadeAnimation = trigger ('fadeAnimation', [
  transition( 'home <=> list', [
    query(':enter .wrapper', [
      style({'opacity': 0})
    ]),

    query(':enter .country', [
      style({'opacity': 0, 'transform': 'translateY(20px)'})
    ], {optional: true}),

    query(':leave .wrapper', [
      style({ 'opacity': 1 }),
      animate('.3s', style({ 'opacity': 0 }))
    ]),

    query(':enter .wrapper', [
      style({'opacity': 0}),
      animate('.3s', style({ 'opacity': 1}))
    ]),

    query(':enter .country', stagger(20, [
      animate('.1s', style({'opacity': 1, 'transform': 'translateY(0)'}))
    ]), {optional: true})
  ])
]);
