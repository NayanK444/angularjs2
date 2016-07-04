import {Component} from "@angular/core";
import {Task} from "../../models/todo/task";
import {OnInit} from "@angular/core";
import {TaskService} from "../../services/todo/task-service";
import {TaskComponent} from "./task.component";

@Component({
    selector: 'task-list',
    templateUrl: './app/components/todo/task-list.html',
    styleUrls: ['./app/components/todo/task-list.css'],
    directives: [TaskComponent],
    providers: [TaskService]
})
export class TaskListComponent implements OnInit {

    todoCount:number;
    selectedTask:Task;
    tasks:Array<Task>;

    constructor(private _taskService:TaskService) {
        this.tasks = _taskService.getTasks();
        this.calculateTodoCount();
    }

    ngOnInit() {
        console.log("Todo component initialized with " + this.tasks.length + " tasks.");
    }

    calculateTodoCount() {
        this.todoCount = this.tasks.filter(t => !t.done).length;
    }

    select(task:Task) {
        this.selectedTask = task;
    }
}