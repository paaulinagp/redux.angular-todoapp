import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../../filters/filter.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filterSelected: actions.Filters = 'all';
  filters: actions.Filters[] = ['all', 'completed', 'pending'];

  pendings: number = 0;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.subscribe(({todos, filter}) => {
      this.filterSelected = filter;
      this.pendings = todos.filter(todo => !todo.status).length;
    });
  }

  changeFilter(filter: actions.Filters ){
    this._store.dispatch(actions.setFilter({filter}));
  }

}
