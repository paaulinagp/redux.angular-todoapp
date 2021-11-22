import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../todo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  completed: boolean = false;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completed = !this.completed;
    this._store.dispatch(actions.toggleAll({status: this.completed }));
  }

}
