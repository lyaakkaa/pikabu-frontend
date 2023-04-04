import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'post/comments/:id', component:  PostCommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
