import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: "login",
  loadChildren: () => import ("./components/login/login.module").then(n => n.LoginModule)
},
  {
    path: "",
    pathMatch: "full",
    redirectTo: "task" // task ou login
  },
  {
    path: "task",
    loadChildren: () => import ("./components/task/task.module").then(n => n.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
