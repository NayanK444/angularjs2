import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./components/todo/task-list.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives: [TaskListComponent, AboutComponent, HomeComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
    {path: '/about', component: AboutComponent, as: 'About'},
    {path: '/home', component: HomeComponent, as: 'Home'}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}