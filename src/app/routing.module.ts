import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {state: 'home'}
    },
    {
        path: 'list',
        component: ListComponent,
        data: {state: 'list'}
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule { }
