import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/todo",
  },
  {
    path: "todo",
    loadChildren: () =>
      import("./pages/todo/todo.module").then((m) => m.TodoModule),
  },
  {
    path: "todo/:id",
    loadChildren: () =>
      import("./pages/todo-details/todo-details.module").then(
        (m) => m.TodoDetailsModule
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
