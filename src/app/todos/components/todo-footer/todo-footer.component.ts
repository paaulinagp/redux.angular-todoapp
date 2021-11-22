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

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.select('filter').subscribe(filter => this.filterSelected = filter)
  }

  changeFilter(filter: actions.Filters ){
    this._store.dispatch(actions.setFilter({filter}));
  }

}
