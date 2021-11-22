import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Filters } from '../../../filters/filter.actions';
import { AppState } from '../../../app.reducer';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filterSelected: Filters = 'all';

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.filterSelected = filter;
    });
  }

}
