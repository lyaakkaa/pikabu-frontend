import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import {PostFormComponent} from "./components/post-form/post-form.component";
import {BestPostListComponent} from "./components/best-post-list/best-post-list.component";
import {NewPostListComponent} from "./components/new-post-list/new-post-list.component";

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'best', component: BestPostListComponent},
  {path: 'new', component: NewPostListComponent},
  {path: 'posts/:id/comments', component:  PostCommentsComponent},
  {path: 'post/add', component: PostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
