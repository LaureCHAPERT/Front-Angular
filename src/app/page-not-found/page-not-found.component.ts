import { Component } from '@angular/core';

@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://cdn.pixabay.com/photo/2016/04/24/22/30/monitor-1350918_960_720.png"/>
      <h1>Cette page n'existe pas !</h1>
      <a routerLink="" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
