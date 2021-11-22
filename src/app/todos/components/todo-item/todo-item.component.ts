import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from '../../models/todo.model';
import * as actions from '../../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputEdit') txtInputEdit: ElementRef;

  checkStatus: FormControl;
  txtInput: FormControl;

  edit: boolean = false;

  constructor(private _store: Store<AppState>) {
    this.todo = {
      id: 0,
      content: '',
      status: false
    }

    this.checkStatus = new FormControl();
    this.txtInput = new FormControl('hola', Validators.required );
    this.txtInputEdit = {} as ElementRef;
  }

  ngOnInit(): void {
    this.checkStatus.setValue(this.todo.status);
    this.txtInput.setValue(this.todo.content);

    this.checkStatus.valueChanges.subscribe(() => {
      this._store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.edit = true;
    this.txtInput.setValue(this.todo.content);
    setTimeout(()=> {
      this.txtInputEdit.nativeElement.select();
    }, 1);
  }

  updateListItem() {
    this.edit = false;
    if(this.txtInput.invalid ){ return; }
    if(this.txtInput.value === this.todo.content){ return; }

    this._store.dispatch(actions.update({ id: this.todo.id, content: this.txtInput.value }));
  }

}
