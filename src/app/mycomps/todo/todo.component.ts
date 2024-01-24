import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule , TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']  // Correct property name
})
export class TodoComponent {

  todos: Todo[] | undefined

  constructor() {

    this.todos = [
      {

        sno:"1",
        title:"Todoone",
        desc:"some desc of it",
        active:true
      },
      {

        sno:"2",
        title:"Todoonyteyeie",
        desc:"some desc of tewowow it",
        active:true
      },
      {

        sno:"3",
        title:"Tod Three oonyteyeie",
        desc:"some desc Three of tewowow it",
        active:true
      },      
    ]
  } 
}
