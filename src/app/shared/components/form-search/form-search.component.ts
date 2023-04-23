import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <input
  #inputSearch
  autofocus
  type="text"
  class="form-control"
  placeholder="Search..."
  (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styles: ['input {width:100%}']
})
export class FormSearchComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    if (value && value.length > 2) {
      this.router.navigate(['/graphic-card-list'], {
        queryParams: { q: value },
      });
    }
  }

}

