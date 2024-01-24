import { Component, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo:Todo | undefined; 
  
  constructor(){}

  DeleteClicked(todo:Todo | undefined){

    console.log("Delete btn has been clicked", todo)
  }
}
