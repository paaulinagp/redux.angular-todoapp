import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsFilters from '../../../filters/filter.actions';
import * as actionsTodos from '../../todo.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filterSelected: actionsFilters.Filters = 'all';

  filters: actionsFilters.Filters[] = ['all', 'completed', 'pending'];

  pendings: number = 0;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.subscribe(({todos, filter}) => {
      this.filterSelected = filter;
      this.pendings = todos.filter(todo => !todo.status).length;
    });
  }

  changeFilter(filter: actionsFilters.Filters ){
    this._store.dispatch(actionsFilters.setFilter({filter}));
  }

  cleanCompleted(){
    this._store.dispatch(actionsTodos.cleanCompleted());
  }

}
