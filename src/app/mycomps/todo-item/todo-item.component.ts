import { Component, Input, Output , EventEmitter} from '@angular/core';

import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter ();

  constructor() {}

  DeleteClicked(todo: Todo | undefined) {

    this.todoDelete.emit(todo);
    console.log('Delete btn has been clicked', todo);
  }
}
