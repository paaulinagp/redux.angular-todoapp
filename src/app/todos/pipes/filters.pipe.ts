import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from '../../filters/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filtersTodo'
})
export class FiltersPipe implements PipeTransform {

  transform(todos: Todo[], filter: Filters): Todo[] {

    switch(filter) {
      case 'completed': 
        return todos.filter(todo => todo.status);
      case 'pending': 
        return todos.filter(todo => !todo.status);
      default: 
        return todos;
    }
  }

}
